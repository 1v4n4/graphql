const Product = {
  category: ({ categoryId }, args, { categories }) => {
    return categories.find(category => category.id === categoryId);
  }
}

export default Product;
