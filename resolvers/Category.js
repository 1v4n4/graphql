const Category = {
  products: ({categoryId}, args, {products}) => {
    return products.filter(product => categoryId == parent.id);
  }
}

export default Category;