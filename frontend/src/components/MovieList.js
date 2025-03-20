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
