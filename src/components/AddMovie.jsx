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
    this.setState({ [event.target.name]: event.target.value })
  };

  render() {
    const { onClick } = this.props;
    const { title } = this.state;
    return (
      <form>
        <label htmlFor="" data-testid="title-input-label">
          Título
          <input type="text" name="title" data-testid="title-input" value={ title } onChange={ this.handleChange } />
        </label>
      </form>
    );
  }
}

export default AddMovie;
