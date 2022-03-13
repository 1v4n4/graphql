import { v4 as uuid } from 'uuid';

const Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const newCategory = {
      id: uuid(),
      name: input.name
    };
    categories.push(newCategory);
    return newCategory;
  },
  addProduct: (parent, { input }, { products }) => {
   const { name, description, quantity, image, price, onSale, categoryId } = input;
    const newProduct = {
      id: uuid(),
      name,
      description,
      quantity,
      image,
      price,
      onSale,
      categoryId
    };
    products.push(newProduct);
    return newProduct;
  },
  addReview: (parent, { input }, { reviews }) => {
    const { productId, title, comment, rating, date } = input;
    const newReview = {
      id: uuid(),
      productId,
      title,
      comment,
      rating,
      date
    }
    reviews.push(newReview);
    return newReview;
  }
};

export default Mutation;