import React from 'react';
import {connect} from 'react-redux';
import swal from 'sweetalert';

function NominationList(props)
{
    const {nominatedMovies} = props;
    if(nominatedMovies.length >= 5)
    {
        swal('Success', `You've added 5 movies to your nomination list`, 'success');
    }
    return (
        <ul className='nomination-list'>
           {nominatedMovies.length > 0 && <h3>Nominated Movies</h3>}
           {nominatedMovies.length > 0 && nominatedMovies.map(movie => <li key={movie.imdbID}>{movie.Title}</li>)}
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        nominatedMovies: state.nominatedMovies
    }
}

export default connect(mapStateToProps, {})(NominationList);