
const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src/components/ProductCategories.tsx');
const content = fs.readFileSync(filePath, 'utf8');

const regex = /image:\s*'([^']+)'/g;
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
  console.log('All product category images found!');
}
