import React from 'react';
import Movie from '../Component/Movie';
import propTypes from 'prop-types';
import {CircularProgress} from '@material-ui/core';
import axios from 'axios';
import '../css/Home.css'


class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovie = async()=>{
    const {
      data:{
        data:{
          movies
        }
      }
    } = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json');
    this.setState({movies:movies, isLoading:false});
  };
  componentDidMount(){
    this.getMovie();
  };
  render(){
    const { movies, isLoading } = this.state;
    return (
      <div className="App">
        {isLoading ? 
          <div className="loader">
            <span className="loader_txt"><CircularProgress/></span>
          </div> : 
          <div className="movies">
            {movies.map(movie=>
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}>
              </Movie>)}
          </div>
        }
      </div>
    );
  };
  }


export default Home;
