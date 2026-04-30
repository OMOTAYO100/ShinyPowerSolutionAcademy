import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = path.resolve('src/assets');

async function processImages() {
  try {
    const files = fs.readdirSync(assetsDir);
    
    for (const file of files) {
      if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')) {
        const inputPath = path.join(assetsDir, file);
        const parsed = path.parse(file);
        
        // Skip if it's the logo or if webp already exists
        if (file.includes('logo')) {
          console.log(`Skipping logo: ${file}`);
          continue;
        }

        const outputPath = path.join(assetsDir, `${parsed.name}.webp`);
        
        console.log(`Converting ${file} to WebP...`);
        
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        console.log(`Successfully converted to ${outputPath}`);
      }
    }
    console.log('All images processed successfully!');
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

processImages();
