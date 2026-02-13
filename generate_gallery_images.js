
const fs = require('fs');
const path = require('path');

const galleryDir = path.join(process.cwd(), 'public/gallery');
const categories = ['flowering', 'indoor', 'palm', 'bonsai', 'ornamentals', 'avenues', 'fruits'];

const galleryImages = [];

categories.forEach(category => {
  const dirPath = path.join(galleryDir, category);
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath);
    files.forEach(file => {
      // Filter for image files and ignore system files
      if (file.match(/\.(jpg|jpeg|png|webp)$/i) && !file.startsWith('.')) {
        // Create a readable title from the filename
        // Remove extension, remove -1, -2 suffixes, replace hyphens/underscores with spaces
        let title = file.replace(/\.(jpg|jpeg|png|webp)$/i, '')
                        .replace(/[-_]\d+$/, '') // remove -1, -2 etc at end
                        .replace(/[-_]/g, ' '); // replace remaining separators with spaces
        
        // Capitalize words
        title = title.split(' ')
                     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                     .join(' ');

        galleryImages.push({
          src: `/gallery/${category}/${file}`,
          category: category,
          title: title
        });
      }
    });
  }
});

console.log('const galleryImages = ' + JSON.stringify(galleryImages, null, 2) + ';');
