const pptx2pdf = require('pptx2pdf');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, 'Bus_Management_System_Project.pptx');
const outputPath = path.join(__dirname, 'Bus_Management_System_Project.pdf');

console.log('Converting PowerPoint to PDF...');
console.log('Input:', inputPath);
console.log('Output:', outputPath);

pptx2pdf
  .convert(inputPath, outputPath)
  .then(() => {
    const fileSize = fs.statSync(outputPath).size;
    console.log(`✓ Successfully converted to PDF: ${outputPath}`);
    console.log(`File size: ${(fileSize / 1024).toFixed(2)} KB`);
  })
  .catch((err) => {
    console.error('Conversion error:', err.message);
    process.exit(1);
  });
