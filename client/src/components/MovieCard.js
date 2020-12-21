import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    movieCard: {
        width: '30%',
        marginBottom: '3%',
        marginRight: '0.5%'
    },
    media: {
        width: '95%',
        paddingTop: '56.25%',
        paddingBottom: '56.25%',
        margin: '0 auto'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', { duration: theme.transitions.duration.shortest })
    },
    expandOpen: {
        transfrom: 'rotate(180deg)'
    }
}));

function MovieCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => { setExpanded(!expanded) };

    return (
        <Card className={classes.movieCard}>
            <CardHeader
                title={`${props.movie.Title} (${props.movie.Year})`}
                subheader={props.movie.Actors}
            />
            <CardMedia className={classes.media} image={props.movie.Poster} />
            <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                    {props.movie.plot}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label='add to favorites'>
                    <FavoriteIcon />
                </IconButton>
                {/* <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton> */}
            </CardActions>
        </Card>
    )
}

export default MovieCard;