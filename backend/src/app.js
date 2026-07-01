const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();


/* Routes */
const authRoutes = require('./routers/auth.routes');
const chatRoutes = require('./routers/chat.routes');

/* Midlleware*/
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

/* Using Routes*/
app.use('/api/auth',authRoutes);
app.use('/api/chat',chatRoutes);

module.exports=app;