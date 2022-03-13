import { categories } from '../data.js';

const Product = {
  category: (parent, args, context) => {
    console.log(parent);
    return categories.find(category => category.id === parent.categoryId);
  }
}

export default Product;
