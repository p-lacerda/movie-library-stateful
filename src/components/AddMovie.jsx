import React from 'react';
import propTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.functionClick = this.functionClick.bind(this);
    this.createInput = this.createInput.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  createInput = (inputName, inputType, value, dataTestId) => (
    <input
      name={ inputName }
      type={ inputType }
      value={ value }
      data-testid={ dataTestId }
      onChange={ this.handleChange }
    />
  );

  functionClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          {this.createInput('title', 'text', title, 'title-input')}
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          { this.createInput('subtitle', 'text', subtitle, 'subtitle-input') }
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          {this.createInput('imagePath', 'text', imagePath, 'image-input')}
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            cols="30"
            rows="10"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          {this.createInput('rating', 'number', rating, 'rating-input')}
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            onChange={ this.handleChange }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="button" data-testid="send-button" onClick={ this.functionClick }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default AddMovie;
