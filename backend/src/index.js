const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const directoryRoutes = require('./routes/directoryRoutes');

// Initialize environment variables
dotenv.config();

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/directory', directoryRoutes);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
