<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';

function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('/api/movies')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Lỗi:', error));
    }, []);

    const getYouTubeId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const getThumbnailUrl = (videoUrl) => {
        const videoId = getYouTubeId(videoUrl);
        return videoId ? `https://img.youtube.com/vi/${videoId}/0.jpg` : null;
    };

    return (
        <Container>
            <h1 className="mt-4">Danh sách phim</h1>
            <Row>
                {movies.map(movie => (
                    <Col md={4} key={movie._id} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={getThumbnailUrl(movie.videoUrl)} alt={movie.title} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>{movie.description}</Card.Text>
                                <a href={`/movies/${movie._id}`} className="btn btn-primary">Xem</a>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default MovieList;
=======
import React from 'react';
import { Link } from 'react-router-dom';

function MovieList({ movies }) {
	    return (
		            <div>
		                <h1>Danh sách phim</h1>
		                <ul>
		                    {movies.map(movie => (
					                        <li key={movie._id}>
					                            <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
					                        </li>
					                    ))}
		                </ul>
		            </div>
		        );
}

export default MovieList;
>>>>>>> 3f97a221 (done)
