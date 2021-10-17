import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import './movie-card.scss';

export class MovieCard extends React.Component {
    render() {
        const handleSubmit = (e) => {
            const token = localStorage.getItem('token');
            const user = localStorage.getItem('user');
            axios.post(`https://quikflix.herokuapp.com/users/${user}/myMovies/` + 
                this.props.movie._id, {}, {headers: { Authorization: `Bearer ${token}` }, })
                .then(response => {
                    const data = response.data;
                    console.log(data);
                    alert('Movie was added to your favorites. (If this was done in error, go to profile page to remove it.');
                })
                .catch(e=> {
                    console.log('error adding movie to your favorites')
                });
          };

        const { movie } = this.props;

        return ( 
            <Container className="card-container">
                <Card className="movie-card">
                    <Card.Img crossOrigin="anonymous" variant="top" src={movie.image} />

                        <Card.Body className="card-body">
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>{movie.year}</Card.Text>
                            <Link to={`/movies/${movie.title}`} >
                                <Button variant="link">Open</Button>
                            </Link>
                            <Button variant="primary" type="submit" onClick={handleSubmit}>
                                Add to Favs
                            </Button>
                        </Card.Body>
                    </Card>
            </Container>
            );
    }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired
    }),
    onClick: PropTypes.func
};