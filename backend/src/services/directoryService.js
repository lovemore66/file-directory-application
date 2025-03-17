const fs = require('fs-extra');
const path = require('path');
const { getFileStats } = require('../utils/fileUtils');

// Function to read directory and return file details
const getDirectoryListing = async (dirPath) => {
  const files = await fs.readdir(dirPath);
  const fileDetails = [];

  for (let file of files) {
    const filePath = path.join(dirPath, file);
    try {
      const fileStats = await getFileStats(filePath);
      fileDetails.push(fileStats);
    } catch (error) {
      console.error(`Error reading file stats for ${filePath}:`, error);
    }
  }

  return fileDetails;
};

module.exports = { getDirectoryListing };
