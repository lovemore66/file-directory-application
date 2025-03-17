const { getDirectoryListing } = require('../services/directoryService');
const path = require('path'); // ✅ Import this at the top
const fs = require('fs');

const getDirectoryContents = async (req, res) => {
  const { path, page = 1, pageSize = 10 } = req.query;
  const parsedPage = parseInt(page);
  const parsedPageSize = parseInt(pageSize);

  try {
    const files = await getDirectoryListing(path || '/'); // Fetch full list
    const startIndex = (parsedPage - 1) * parsedPageSize;
    const paginatedFiles = files.slice(startIndex, startIndex + parsedPageSize);

    res.status(200).json({
      files: paginatedFiles,
      totalItems: files.length,
    });
  } catch (error) {
    res.status(500).json({ error: `Failed to read directory: ${error.message}` });
  }
};

const openFile = (req, res) => {
  let filePath = req.query.path;

  if (!filePath) {
    return res.status(400).json({ error: 'File path is required' });
  }

  // ✅ Convert backslashes (`\`) to forward slashes (`/`)
  filePath = filePath.replace(/\\/g, '/');

  const resolvedPath = path.resolve(filePath);

  // ✅ Ensure the file exists and is not a directory
  if (!fs.existsSync(resolvedPath) || fs.lstatSync(resolvedPath).isDirectory()) {
    return res.status(404).json({ error: 'File not found or path is a directory' });
  }

  // ✅ Send the file to the browser
  res.sendFile(resolvedPath);
};



module.exports = { getDirectoryContents, openFile };
