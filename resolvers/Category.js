import { products } from '../data.js';

const Category = {
  products: (parent, args, context) => {
    return products.filter(product => product.categoryId == parent.id);
  }
}

export default Category;