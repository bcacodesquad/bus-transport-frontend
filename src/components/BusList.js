import React, { useState, useEffect } from 'react';
import { getAllBuses, deleteBus } from '../services/api';

const BusList = () => {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBuses();
  }, []);

  const fetchBuses = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllBuses();
      setBuses(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this bus?')) return;
    try {
      await deleteBus(id);
      setBuses((prev) => prev.filter((bus) => bus.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <div style={styles.center}>
        <p style={styles.loading}>Loading buses...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.center}>
        <p style={styles.error}>Error: {error}</p>
        <button style={styles.retryBtn} onClick={fetchBuses}>Retry</button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🚍 Bus List</h2>

      {buses.length === 0 ? (
        <p style={styles.empty}>No buses found.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr style={styles.headerRow}>
              <th style={styles.th}>Bus Number</th>
              <th style={styles.th}>Type</th>
              <th style={styles.th}>Seats</th>
              <th style={styles.th}>Registration</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus) => (
              <tr key={bus.id} style={styles.row}>
                <td style={styles.td}>{bus.busNumber}</td>
                <td style={styles.td}>{bus.busType}</td>
                <td style={styles.td}>{bus.totalSeats}</td>
                <td style={styles.td}>{bus.registrationNumber}</td>
                <td style={styles.td}>
                  <span style={bus.status === 'Active' ? styles.badgeActive : styles.badgeInactive}>
                    {bus.status}
                  </span>
                </td>
                <td style={styles.td}>
                  <button
                    style={styles.deleteBtn}
                    onClick={() => handleDelete(bus.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const styles = {
  container: { padding: '24px', fontFamily: 'sans-serif' },
  title: { marginBottom: '16px' },
  center: { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px' },
  loading: { fontSize: '16px', color: '#555' },
  error: { color: '#c0392b', marginBottom: '12px' },
  empty: { color: '#777' },
  retryBtn: {
    padding: '8px 16px', background: '#3498db', color: '#fff',
    border: 'none', borderRadius: '4px', cursor: 'pointer',
  },
  table: { width: '100%', borderCollapse: 'collapse' },
  headerRow: { background: '#2c3e50', color: '#fff' },
  th: { padding: '10px 14px', textAlign: 'left', fontSize: '14px' },
  row: { borderBottom: '1px solid #eee' },
  td: { padding: '10px 14px', fontSize: '14px' },
  badgeActive: {
    background: '#27ae60', color: '#fff', padding: '2px 8px',
    borderRadius: '12px', fontSize: '12px',
  },
  badgeInactive: {
    background: '#e74c3c', color: '#fff', padding: '2px 8px',
    borderRadius: '12px', fontSize: '12px',
  },
  deleteBtn: {
    padding: '4px 12px', background: '#e74c3c', color: '#fff',
    border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '13px',
  },
};

export default BusList;
