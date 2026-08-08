const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'test.html');
const pdfPath = path.join(__dirname, 'test.pdf');

fs.writeFileSync(htmlPath, '<html><body><h1>Test PDF</h1></body></html>');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const cmd = `"${edgePath}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "file:///${htmlPath.replace(/\\/g, '/')}"`;

console.log('Running command:', cmd);
try {
  execSync(cmd);
  console.log('Success! PDF file size:', fs.statSync(pdfPath).size);
} catch (e) {
  console.error('Error generating PDF:', e);
}
