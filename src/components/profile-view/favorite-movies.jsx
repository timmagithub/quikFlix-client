import React from 'react';
import Col from 'react-bootstrap/Col'

import MovieCard from '../movie-card/movie-card';

import "./profile-view.scss"

export function FavoriteMovies({ movieList, movies }) {
    
    
    return (
        <div className="fav-movies">
            <h2>Favorite Movies</h2>
            <div className="movie-list">
            {movies.filter(f => movieList.find(m => f._id === m)).map(m => 
            <Col>
                <MovieCard movie={m} key={m._id} className="fav-card" />
            </Col>    
        )}
        </div>
        </div>
    )
}