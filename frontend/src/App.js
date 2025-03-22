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
const express = require('express');
const path = require('path');
const app = express();

// Phục vụ các tệp tĩnh từ /app/media
app.use('/media', express.static(path.join(__dirname, 'media')));