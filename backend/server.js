const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const config = require('./config/config');

const app = express();

// ✅ Use Correct Middleware
app.use(cors()); 
app.use(express.json()); // Replaces body-parser
app.use(express.urlencoded({ extended: true })); // For form data

// ✅ MongoDB Connection
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log('MongoDB Connection Error:', err));

// ✅ Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// ✅ Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
