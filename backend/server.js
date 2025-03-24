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

// Định tuyến API
app.use('/api/movies', moviesRouter);
app.use('/api', require('./routes/api')); // Đảm bảo rằng bạn đã định nghĩa tệp này

// Phục vụ tệp tĩnh từ thư mục media
app.use('/media', express.static(path.join(__dirname, '../media')));

// Phục vụ tệp tĩnh từ thư mục frontend/build
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Phục vụ index.html cho tất cả các yêu cầu không khớp với route API
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server đang chạy trên cổng ${port}`);
});
