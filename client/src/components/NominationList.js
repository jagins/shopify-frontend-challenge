import React from 'react';
import {connect} from 'react-redux';

function NominationList(props)
{
    const {nominatedMovies} = props;
    return (
        <div className='nomination-list'>
           {nominatedMovies.length > 0 && <h3>Nominated Movies</h3>}
           {nominatedMovies.map(movie => <span>{movie.Title}, </span>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        nominatedMovies: state.nominatedMovies
    }
}

export default connect(mapStateToProps, {})(NominationList);