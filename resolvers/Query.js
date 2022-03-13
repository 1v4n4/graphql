
const Query = {
  products: (parent, args, context) => {
    let products = context.products;
    if (args.filter) {
      const { onSale, avgRating } = args.filter;
      if (onSale) {
        products = onSale === true ? products.filter(product => product.onSale === true) : products.filter(product => product.onSale === false);
      }
      if ([1,2,3,4,5].includes(avgRating)) {
        products = products.filter(product => {
          let ratingSum = 0;
          let count = 0;
          context.reviews.forEach((review) => {
            if (review.productId === product.id) {
              ratingSum += review.rating
              count++;
            }
          });

         return ratingSum/count >= avgRating;
        });
      }

    }
    return products;
  },
  product: (parent, args, context) => {
    return context.products.find(product => product.id === args.id);
  },
  categories: (parent, args, context) => context.categories,
  category: (parent, args, context) => {
    return context.categories.find(category => category.id == args.id);
  },
  reviews: (parent, args, context) => context.reviews
}

export default Query;