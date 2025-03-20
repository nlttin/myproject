const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/', async (req, res) => {
	    try {
		            const movies = await Movie.find();
		            res.json(movies);
		        } catch (err) {
				        res.status(500).json({ message: err.message });
				    }
});

router.get('/:id', async (req, res) => {
	    try {
		            const movie = await Movie.findById(req.params.id);
		            if (!movie) {
				                return res.status(404).json({ message: 'Không tìm thấy phim' });
				            }
		            res.json(movie);
		        } catch (err) {
				        res.status(500).json({ message: err.message });
				    }
});

module.exports = router;
