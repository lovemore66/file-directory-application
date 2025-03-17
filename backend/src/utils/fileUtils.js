const fs = require('fs-extra');
const path = require('path');

const getFileStats = async (filePath) => {
  const stats = await fs.stat(filePath);
  return {
    name: path.basename(filePath),
    path: filePath,
    size: stats.size,
    type: stats.isDirectory() ? 'directory' : path.extname(filePath).slice(1),
    permissions: stats.mode.toString(8).slice(-3),
    createdAt: stats.ctime
  };
};

module.exports = { getFileStats };
