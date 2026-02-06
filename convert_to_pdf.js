const LibreOfficeConvert = require('libreoffice-convert');
const fs = require('fs');
const path = require('path');

// Convert PPTX to PDF
const inputFile = 'Bus_Management_System_Project.pptx';
const outputFile = 'Bus_Management_System_Project.pdf';

console.log('Converting PowerPoint to PDF...');

const docBuffer = fs.readFileSync(inputFile);

LibreOfficeConvert.convert({
  buffer: docBuffer,
  mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  extension: 'pptx',
}, (err, result) => {
  if (err) {
    console.error('Conversion error:', err);
    process.exit(1);
  }

  fs.writeFileSync(outputFile, result);
  console.log(`✓ Successfully converted to PDF: ${outputFile}`);
  console.log(`File size: ${(fs.statSync(outputFile).size / 1024).toFixed(2)} KB`);
});
