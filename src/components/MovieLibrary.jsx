import React, { Component } from 'react';
import propTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.addClick = this.addClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  // Referência ao código do Marcello. Link: https://github.com/tryber/sd-014-a-project-movie-cards-library-stateful/blob/marcello-alves-movie-cards-library-stateful/src/components/MovieLibrary.jsx
  filterMovies = ({ searchText, selectedGenre, bookmarkedOnly, movies }) => movies
    .filter((movie) => (movie.title.includes(searchText)
      || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText)))
    .filter((movie) => (bookmarkedOnly ? movie.bookmarked : true))
    .filter((movie) => (selectedGenre ? movie.genre === selectedGenre : true))

  addClick(moviesInfo) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, moviesInfo] });
  } // Adicionar um novo array na chave movies

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filterMovies(this.state) } />
        <AddMovie onClick={ this.addClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: propTypes.arrayOf(propTypes.object).isRequired,
};

export default MovieLibrary;
