import React from 'react';
import axios from 'axios';

import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null,
            registering: false
        }
    }
    componentDidMount(){
      axios.get('https://pacific-thicket-04049.herokuapp.com/movies')
        .then(response => {
          this.setState({
            movies: response.data
          });
        })
        .catch(error => {
          console.log(error);
        });
    }


    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }
 
    onLoggedIn(user) {
      this.setState({
        user
      });
    }  

    setRegistering(registering) {
      this.setState({
        registering
      })
    }
 
    render() {
        const { movies, selectedMovie, user, registering } = this.state;
    
        /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
        if (!user) {
          if (registering) {
            return <RegistrationView onComplete={() => this.setRegistering(false)} />;
          } else {
            return <LoginView onLoggedIn={user => this.onLoggedIn(user)} onRegister={() => this.setRegistering(true)} />;
          }
        }

        if (movies.length === 0) return <div className="main-view">Loading or the list is empty</div>;
    
        return (
          <div className="main-view">
            {selectedMovie
              ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
              : movies.map(movie => (
                <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
              ))
            }
          </div>
        );
      }
    
    }