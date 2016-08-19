const ProductTable = ({ products, filterText, inStockOnly }) => {
  let rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toUpperCase().indexOf(filterText.toUpperCase()) === -1 || (!product.stocked && inStockOnly)) {
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
