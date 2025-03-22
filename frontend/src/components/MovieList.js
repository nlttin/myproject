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

    return (
        <Container>
            <h1 className="mt-4">Danh sách phim</h1>
            <Row>
                {movies.map(movie => (
                    <Col md={4} key={movie._id} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={`/media/${movie._id}.jpg`} alt={movie.title} />
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