const Category = {
  products: ({ id }, { filter }, { products }) => {
    if (filter) {
      return products.filter(product => product.categoryId === id && product.onSale === filter.onSale);
    }
    return products.filter(product => product.categoryId === id);
  }
}

export default Category;