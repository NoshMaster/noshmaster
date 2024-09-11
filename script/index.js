#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const [,, command, fileName] = process.argv;

if (command === 'add' && fileName) {
  const sourceFilePath = path.join(__dirname, 'components', fileName + ".tsx");
  
  const destDirPath = path.join(process.cwd(), '@', 'animation');
  const destFilePath = path.join(destDirPath, fileName + ".tsx");

  if (!fs.existsSync(sourceFilePath)) {
    console.error(`Error: The component '${fileName}' does not exist.`);
    process.exit(1);
  }

  if (!fs.existsSync(destDirPath)) {
    fs.mkdirSync(destDirPath, { recursive: true });
  }

  fs.copyFile(sourceFilePath, destFilePath, (err) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log(`${fileName} added to your workspace at @/animation`);
    }
  });
} else {
  console.log('Usage: npx noshmaster add <file-name>');
}
