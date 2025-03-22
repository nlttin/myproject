const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const moviesRouter = require('./routes/movies');
const express = require('express');
const app = express();

// Phục vụ các tệp tĩnh từ /app/media

// ... (các dòng khác)

// Phục vụ tệp static từ /app/media
app.use('/media', express.static(path.join(__dirname, '../media')));

// ... (các dòng khác)
const app = express();
const port = process.env.PORT || 3000;
const mongoHost = process.env.MONGO_HOST || 'localhost';

const mongoose = require('mongoose');
const mongoHost = process.env.MONGO_HOST || 'localhost';
mongoose.connect(`mongodb://${mongoHost}:27017/movieDB`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then(() => console.log('Đã kết nối đến MongoDB'))
    .catch(err => console.error('Lỗi kết nối MongoDB:', err));
.then(() => console.log('Đã kết nối đến MongoDB'))
.catch(err => console.error('Lỗi kết nối MongoDB:', err));

app.use(express.json());
app.use('/api/movies', moviesRouter);

// Phục vụ file tĩnh của frontend (build sau khi chạy npm run build ở frontend)
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// Lắng nghe trên tất cả các interface để container có thể nhận request từ bên ngoài
app.listen(port, '0.0.0.0', () => {
  console.log(`Server đang chạy trên cổng ${port}`);
});

