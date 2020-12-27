import React, {useEffect, useState} from 'react';
import {useStyles} from '../styles/MovieCardStyles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import {connect} from 'react-redux';
import {addMovieToList} from '../actions';
import { Button } from '@material-ui/core';

function MovieCard(props) {
    const {addMovieToList, nominatedMovies, clickedMovies} = props;
    const classes = useStyles();
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        if(!clicked && nominatedMovies.length < 5 && !(props.movie.Title in clickedMovies))
        {
            addMovieToList(props.movie);
        }
    }

    useEffect(() => {
        if(`${props.movie.Title} (${props.movie.Year})` in clickedMovies)
            setClicked(true);
    }, [])
    return (
        <Card className={classes.movieCard}>
            <CardHeader title={`${props.movie.Title} (${props.movie.Year})`}/>
            <CardMedia className={classes.media} image={props.movie.Poster} />
            <CardActions disableSpacing>
               {clicked ? <Button disabled>Nominate</Button> : <Button onClick={handleClick}>Nominate</Button>}
            </CardActions>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        nominatedMovies: state.nominatedMovies,
        clickedMovies: state.clickedMovies
    };
}

export default connect(mapStateToProps, {addMovieToList})(MovieCard);