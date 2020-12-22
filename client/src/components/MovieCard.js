import React, {useState} from 'react';
import {useStyles} from '../styles/MovieCardStyles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

function MovieCard(props) {
    const classes = useStyles();
    const [clicked, setClicked] = useState(false);
    return (
        <Card className={classes.movieCard}>
            <CardHeader title={`${props.movie.Title} (${props.movie.Year})`}/>
            <CardMedia className={classes.media} image={props.movie.Poster} />
            <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                    {props.movie.plot}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label='add to favorites' onClick={() => setClicked(!clicked)}>
                    {clicked ? <FavoriteIcon style={{color: red[500]}}/> : <FavoriteIcon/>}
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default MovieCard;