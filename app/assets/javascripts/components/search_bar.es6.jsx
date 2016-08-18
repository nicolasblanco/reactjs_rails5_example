class SearchBar extends React.Component {
  handleChange () {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.inStockOnlyInput.checked
    );
  }

  render () {
    return (
      <form className="form-inline">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={ this.props.filterText }
            ref="filterTextInput"
            onChange={ this.handleChange.bind(this) }
          />
        </div>
        {' '}
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              checked={ this.props.inStockOnly }
              ref="inStockOnlyInput"
              onChange={ this.handleChange.bind(this) }
            />
            {' '}
            Only show products in stock
          </label>
        </div>
      </form>
    );
  }
}
