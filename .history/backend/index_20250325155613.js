const express = require('express');
const path = require('path');
const app = express();

// Cấu hình phục vụ tệp tĩnh từ thư mục media
app.use('/media', express.static(path.join(__dirname, 'media')));

// Các cấu hình và route khác...
