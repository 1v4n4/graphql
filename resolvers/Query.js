import { products, categories } from '../data.js';

const Query = {
  hello: () => ['Hello', 'world!'],
  products: () => products,
  product: (parent, args, context) => {
    return products.find(product => product.id === args.id);
  },
  categories: () => categories,
  category: (parent, args, context) => {
    return categories.find(category => category.id == args.id);
  }
}

export default Query;