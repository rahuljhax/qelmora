const express = require('express');
const cors = require('cors');
// Initialize the app 
const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))

// To parse request data into json format
app.use(express.json());



// Routes Import 
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');


// Route Mount (Endpoint : /api/auth)
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

module.exports = app;