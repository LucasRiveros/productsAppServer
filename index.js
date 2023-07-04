const express = require('express');
const connectDB = require('./config/db');
const router = require('./routes/product');
const app = express();
const cors = require('cors');
app.use(cors());
connectDB();
app.use(express.json());
app.use('/api/products', router);
app.listen(4000, () => {
    console.log('Server is running on port 4000');
})