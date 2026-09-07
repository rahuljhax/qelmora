const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
// Initialize the app 
const app = express();

app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

// To parse request data into json format
app.use(express.json());


// Routes Import 
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');
const invitationRoutes = require('./routes/invitationRoutes');


// Route Mount (Endpoint : /api/auth)
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/invitations', invitationRoutes);


module.exports = app;