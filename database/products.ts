import { sql } from './connect';

// export const productsDatabase = [
//   { id: '1', name: 'cosy', price: 9.99 },
//   { id: '2', name: 'classy', price: 99.9 },
//   { id: '3', name: 'cool', price: 999.0 },
//   { id: '4', name: 'sunny', price: 9990.0 },
// ];

export type Product = {
  id: number;
  name: string;
  price: number;
};

// Get all products

export async function getProducts() {
  const products = await sql<Product[]>`
  SELECT * FROM products;
  `;
  return products;
}

// Get a single product by id

export async function getProductById(id: number) {
  const [product] = await sql<Product[]>`
  SELECT * FROM products WHERE id = ${id}
  `;
  return product;
}

export async function createProduct(name: string, price: number) {
  const [product] = await sql<Product[]>`
  INSERT INTO products(name, price)
  VALUES (${name}, ${price})
  RETURNING *
  `;
  return product;
}

export async function updateProductById(
  id: number,
  name: string,
  price: number,
) {
  const [product] = await sql<Product[]>`
   UPDATE
   products
   SET
   name = ${name}
   price = ${price}
   WHERE
   id = ${id}
   RETURNING *`;
  return product;
}

export async function deleteProductById(id: number) {
  const [product] = await sql<Product[]>`
  DELETE FROM
  products
  WHERE
  id = ${id}
  RETURNING *`;
  return product;
}
