🚌 Bus Transport Management System – Frontend

This repository contains the React frontend for the Bus Transport Management System.
It provides a clean and user-friendly interface to manage bus details, bus types, and seat information, and communicates with a Spring Boot backend deployed on Render.

🚀 Live Application (Vercel)

👉 Frontend URL:
http://localhost:3000/

⚠️ Important Note (Backend on Render – Free Plan)

The backend server for this project is hosted on Render Free Plan.

The backend may sleep when idle

First request may take 30–60 seconds to respond

Please open the backend URL once and wait until it responds (for example, returning [])

After the backend wakes up, refresh the frontend page

🌐 Backend Integration

This frontend consumes REST APIs from the Spring Boot backend.

Backend Repository:
https://github.com/mugiultra/bus-transport-backend

Backend Base URL:

http://localhost:8080/api/buses

🛠️ Tech Stack

React

JavaScript (ES6+)

Axios

HTML5

CSS3

Node.js & npm

Vercel (Deployment)

📌 Frontend Features

Bus Management Module

Add New Bus Details

View Bus List

Select Bus Type (AC / Non-AC)

Seat Count Management

Backend API Integration

Network Error Handling

Responsive User Interface

▶️ Run Frontend Locally
1️⃣ Clone the repository
git clone https://github.com/mugiultra/bus-transport-frontend.git
cd bus-transport-frontend

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm start


Frontend runs at:

http://localhost:3000

⚙️ Environment Configuration

Create a .env file in the project root:

REACT_APP_API_URL=http://localhost:8080/api/buses


Restart the development server after updating environment variables.

🧪 Build for Production
npm run build

📊 Project Presentation (PPT)

[Download Project PPT](https://github.com/mugiultra/bus-transport-frontend/blob/main/Bus-Transport-Management-System.pptx)

📷 Screenshots

Screenshots of the frontend UI can be added here.

📄 License

This project is developed for academic and educational purposes.

👨‍💻 Author

Mugesh Pandi
BCA Student
Bus Transport Management System

If you want, I can:

✅ Write PPT slide content (ready-to-use)

✅ Add screenshots section formatting

✅ Improve loading UI for Render cold start

✅ Fix Network Error handling properly
