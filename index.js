const express = require('express');
const connectDB = require('./config/db');

const userRouter = require('./routes/User');
const resultRoutes = require('./routes/results');
require('dotenv').config();
connectDB(); // Connect to MongoDB

const app = express();
app.use(express.json()); // for parsing application/json

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ error: 'An internal server error occurred.' });
});


app.use('/api', userRouter);
app.use('/api', resultRoutes);
app.use('/uploads', express.static('uploads'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`+ ` 🔥`);
});



