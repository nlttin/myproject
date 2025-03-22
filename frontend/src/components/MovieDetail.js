import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`/api/movies/${id}`)
            .then(response => response.json())
            .then(data => setMovie(data))
            .catch(error => console.error('Lỗi:', error));
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            {/* Video nhúng từ MongoDB (ví dụ: YouTube) */}
            <h3>Video chính</h3>
            <iframe width="560" height="315" src={movie.videoUrl} title={movie.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            {/* Video local từ /media (ví dụ: trailer) */}
            <h3>Trailer</h3>
            <video width="640" height="360" controls>
                <source src={`/media/${movie._id}.mp4`} type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ thẻ video.
            </video>
        </div>
    );
}

export default MovieDetail;