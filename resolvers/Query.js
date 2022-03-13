const Query = {
  hello: () => ['Hello', 'world!'],
  products: (parent, args, context) => {
      console.log(parent, args, context);
      if (args.filter)
      return args.filter.onSale === true ?  context.products.filter(product => product.onSale === true) : context.products.filter(product => product.onSale === false);
    },
  product: (parent, args, context) => {
    return context.products.find(product => product.id === args.id);
  },
  categories: (parent, args, context) => context.categories,
  category: (parent, args, context) => {
    return context.categories.find(category => category.id == args.id);
  }
}

export default Query;