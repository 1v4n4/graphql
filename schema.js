import { gql } from "apollo-server";

// if id not found line 21 throws an error with or without bang

const typeDefs = gql`
  type Query {
    hello: [String!]!
    products(filter: productsFilter): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
    reviews: [Review!]!
  }

  type Mutation {
    addCategory(input: addCategoryInput): Category!
    addProduct(input: addProductInput): Product!
    addReview(input: addReviewInput): Review!
    deleteCategory(id: ID!): Boolean!
    deleteProduct(id: ID!): Boolean!
    updateCategory(id: ID!, input: updateCategoryInput): Category!
    updateProduct(id: ID!, input: updateProductInput): Product!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    category: Category
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: productsFilter): [Product!]!
  }

  type Review {
    id: ID!
    title: String!
    comment: String!
    rating: Int!
    date: String!
    productId: ID!
  }

  input productsFilter {
    onSale: Boolean
    avgRating: Int
  }

  input addCategoryInput {
    name: String!
  }

  input addProductInput {
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    categoryId: ID
  }

  input addReviewInput {
    productId: ID!
    title: String!
    comment: String!
    rating: Int!
  }

  input updateCategoryInput {
    name: String!
  }
  input updateProductInput {
    name: String
    description: String
    quantity: Int
    image: String
    price: Float
    onSale: Boolean
    categoryId: ID
  }
  `;

  export default typeDefs;