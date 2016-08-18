class HomeController < ApplicationController
  def index
    @products = [
      { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
      { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
      { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
      { category: 'Sporting Goods', price: '$19.99', stocked: false, name: 'Handball' },
      { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
      { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
      { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
      { category: 'Electronics', price: '$599.99', stocked: false, name: 'Samsung Galaxy S7' },
      { category: 'Electronics', price: '$799.99', stocked: false, name: 'iPhone 6' },
      { category: 'Electronics', price: '$399.99', stocked: true, name: 'Nexus 5X' },
      { category: 'Electronics', price: '$699.99', stocked: true, name: 'Samsung Galaxy S7 Edge' },
      { category: 'Electronics', price: '$399.99', stocked: true, name: 'OnePlus 3' }
    ]
  end
end
