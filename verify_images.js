
const fs = require('fs');
const path = require('path');

const galleryPath = path.join(process.cwd(), 'src/components/Gallery.tsx');
const content = fs.readFileSync(galleryPath, 'utf8');

const regex = /src:\s*'([^']+)'/g;
let match;
const missingConfig = [];

while ((match = regex.exec(content)) !== null) {
  const imagePath = match[1];
  const fullPath = path.join(process.cwd(), 'public', imagePath);
  
  if (!fs.existsSync(fullPath)) {
    console.error(`Missing: ${imagePath}`);
    missingConfig.push(imagePath);
  } else {
    console.log(`Found: ${imagePath}`);
  }
}

if (missingConfig.length > 0) {
  process.exit(1);
} else {
  console.log('All images found!');
}
