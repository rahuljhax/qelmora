require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 4000;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`)
        })
    } catch (err) {
        console.log('Failed to start server', err.message)
    }

}
startServer();