const express = require('express');
const path = require('path');
const cors = require('cors');
// Initialize the app 
const app = express();

// app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))

// To parse request data into json format
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));



// Routes Import 
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');


// Route Mount (Endpoint : /api/auth)
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

module.exports = app;