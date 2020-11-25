import React from 'react';
import '../css/Detail.css'

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push('/');
        }
    }
    render(){
        const {location:{state}} = this.props;
        console.log(state);

        return(
        <div className="movies_d">
            <div className="movie">
                <img src={state.poster} alt={state.title}></img>
                <div className="movie_data">
                <h3 className="movie_title">{state.title}</h3>
                <h5 className="movie_year">{state.year}</h5>
                <p className="movie_summary">{state.summary}</p>
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