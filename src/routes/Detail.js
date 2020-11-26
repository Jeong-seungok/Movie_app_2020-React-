import React from 'react';
import '../css/Detail.css'

class Detail extends React.Component{
    componentDidMount(){
        const {location:{state}, history} = this.props;
            console.log(state, history);
        if(state === undefined)
            history.push('/');
        else
            console.log('bring state');
    }
    render(){
        const {location:{state, history}} = this.props;
        if(state === undefined){
            console.log('No data');
            return(
                <div>0</div>
            );
        }
        return(
            <div className="movies_d">
                <div className="movie">
                    <img src={state.poster} alt={state.title}></img>
                    <div className="movie-data">
                        <h3 className="movie_title">{state.title}</h3>
                        <h5 className="movie_year">{state.year}</h5>
                        <p className="movie_summary">{state.summary.split('').splice(0,140).join('')}...</p>
                        <ul className="movie_genres">
                            {state.genres.map((genre,idx)=>{
                                    return(
                                    <li
                                    key={idx}
                                    className="movie_genre">{genre}</li>
                                    );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default Detail;