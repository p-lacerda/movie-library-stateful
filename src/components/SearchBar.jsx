import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto:
          <input data-testid="text-input" value={ searchText } onChange={ onSearchTextChange } />
        </label>
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input type="checkbox" data-testid="checkbox-input" checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
        </label>

        <label data-testid="select-input-label">
          Filtrar por gênero
          <select value={ selectedGenre } data-testid="select-input" onChange={ onSelectedGenreChange }>
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>

      </form>
    );
  }
}

export default SearchBar;
