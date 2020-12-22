import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
    },
}));