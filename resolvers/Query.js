// without deconstructing objects

const Query = {
  products: (parent, args, context) => context.products,
  product: (parent, args, context) => {
    return context.products.find(product => product.id === args.id);
  },
  categories: (parent, args, context) => context.categories,
  category: (parent, args, context) => {
    return context.categories.find(category => category.id == args.id);
  }
}

export default Query;