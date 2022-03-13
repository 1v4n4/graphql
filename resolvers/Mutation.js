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
  },
  deleteCategory: (parent, { id }, { categories, products }) => {
    const categoryIndex = categories.findIndex(category => category.id === id);
    if (categoryIndex === -1) {
      return false;
    }
    categories.splice(categoryIndex, 1);
    products = products.map(product => {
      return product.id === id ? { ...product, categoryId: null } : product;
    });
    return true;
  },
  deleteProduct: (parent, { id }, { products, reviews }) => {
    console.log(products.length);
    console.log(reviews.length);
    if (!products.find(product => product.id === id)) {
      return false;
    }
    products = products.filter(product => product.id !== id);
    reviews = reviews.filter(review => review.productId !== id);
    console.log(products.length);
    console.log(reviews.length);
    return true;
  },
  updateCategory: (parent, { id, input }, { categories }) => {
    const categoryIndex = categories.findIndex(category => category.id === id);
    if (categoryIndex === -1) {
      return null;
        }
    categories[categoryIndex] = {
      ...categories[categoryIndex],
      ...input
    };
    return categories[categoryIndex];
  },
  updateProduct: (parent, { id, input }, { products }) => {
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex === -1) {
      return null;
    }
    products[productIndex] = {
      ...products[productIndex],
      ...input
    };
    return products[productIndex];
  }
};

export default Mutation;