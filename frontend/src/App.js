import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList'; // Component hiển thị danh sách phim
import MovieDetail from './components/MovieDetail'; // Component chi tiết phim

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} /> {/* Đường dẫn gốc */}
        <Route path="/movies/:id" element={<MovieDetail />} /> {/* Đường dẫn chi tiết */}
      </Routes>
    </Router>
  );
}

export default App;
