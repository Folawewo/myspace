const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', (err) => {
  console.error(`Database Connection error: ${err}`);
});

mongoose.connection.on('connected', () => {
  console.log('Database Connected');
});

mongoose.connection.on('disconnected', () => {
  console.log('Database Disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Database connection closed due to server termination');
    process.exit(0);
  });
});
