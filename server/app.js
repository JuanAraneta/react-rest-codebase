import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

const app = express();

// Database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Setting middlewares
app.use(morgan('dev'));
app.use(express.json());

// Setting headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.use('/products', require('./routes/product').default);
app.use('/orders', require('./routes/order').default);
app.use('/', require('./routes/user').default);
app.use('/docs', require('./routes/docs').default);

// Error handling
app.use((req, res, next) => {
  const error = new Error('Route Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      messag: error.message
    }
  });
});

export default app;
