const Product = {
  category: ({ categoryId }, args, { categories }) => {
    return categories.find(category => category.id === categoryId);
  },
  reviews: ({ id }, args, { reviews }) => {
    console.log(reviews, id);
    return reviews.filter(review => review.productId === id);
  }
};


export default Product;
