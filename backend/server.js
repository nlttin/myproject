const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const moviesRouter = require('./routes/movies');

const app = express();
const port = process.env.PORT || 3000;

// Kết nối đến MongoDB
const mongoHost = process.env.MONGO_HOST || 'localhost';
mongoose.connect(`mongodb://${mongoHost}:27017/movieDB`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Đã kết nối đến MongoDB'))
    .catch(err => console.error('Lỗi kết nối MongoDB:', err));

// Middleware
app.use(express.json());
app.use('/api/movies', moviesRouter);

// Phục vụ tệp static từ /app/media
app.use('/media', express.static(path.join(__dirname, '../media')));

// Phục vụ tệp build của frontend
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server đang chạy trên cổng ${port}`);
});