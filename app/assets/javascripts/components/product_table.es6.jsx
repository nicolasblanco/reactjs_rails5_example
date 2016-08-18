class ProductTable extends React.Component {
  render () {
    let rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.name.toUpperCase().indexOf(this.props.filterText.toUpperCase()) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={ product.category } key={ product.category } />);
      }
      rows.push(<ProductRow product={ product } key={ product.name } />);
      lastCategory = product.category;
    });

    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{ rows }</tbody>
      </table>
    );
  }
}
