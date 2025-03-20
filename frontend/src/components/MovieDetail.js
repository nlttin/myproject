import React from 'react';

function MovieDetail({ movie }) {
	    if (!movie) return <div>Không tìm thấy phim</div>;
	    return (
		            <div>
		                <h1>{movie.title}</h1>
		                <p>{movie.description}</p>
		                <div>
		                    <img src={movie.imageUrl} alt={movie.title} style={{ width: '300px' }} />
		                </div>
		                <div>
		                    <iframe width="560" height="315" src={movie.videoUrl} title={movie.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
		                </div>
		            </div>
		        );
}

export default MovieDetail;
