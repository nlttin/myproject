<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

function App() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Web Film</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Trang chủ</Nav.Link>
                </Nav>
            </Navbar>
            <Switch>
                <Route exact path="/" component={MovieList} />
                <Route path="/movies/:id" component={MovieDetail} />
            </Switch>
        </Router>
    );
}

export default App;
=======
import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	    const [movies, setMovies] = useState([]);

	    useEffect(() => {
		            fetch('/api/movies')
		                .then(response => response.json())
		                .then(data => setMovies(data))
		                .catch(error => console.error('Lỗi lấy phim:', error));
		        }, []);

	    return (
		            <Router>
		                <Switch>
		                    <Route exact path="/" render={() => <MovieList movies={movies} />} />
		                    <Route path="/movies/:id" render={(props) => {
					                        const movieId = props.match.params.id;
					                        const movie = movies.find(m => m._id === movieId);
					                        return <MovieDetail movie={movie} />
						                    }} />
		                </Switch>
		            </Router>
		        );
}

export default App;
>>>>>>> 3f97a221 (done)
