import React from 'react';

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
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <label htmlFor="" data-testid="title-input-label">
          Título
          <input type="text" name="title" data-testid="title-input" value={ title } onChange={ this.handleChange } />
        </label>
        <label htmlFor="" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" name="subtitle" data-testid="subtitle-input" value={ subtitle } onChange={ this.handleChange } />
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input type="text" name="imagePath" data-testid="image-input" value={ imagePath } onChange={ this.handleChange } />
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea name="storyline" cols="30" rows="10" data-testid="storyline-input" value={ storyline } onChange={ this.handleChange } />
        </label>
        <label htmlFor="" data-testid="rating-input-label">
          Avaliação
          <input type="number" name="rating" data-testid="rating-input" value={ rating } onChange={ this.handleChange } />
        </label>
        <label htmlFor="" data-testid="genre-input-label">
          Gênero
          <select name="genre" id="" value={ genre } onChange={ this.handleChange } data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <label htmlFor="">
          <button type="submit" value="" data-testid="send-button" onClick={ onClick }>
            Adicionar filme
          </button>
        </label>
      </form>
    );
  }
}

export default AddMovie;
