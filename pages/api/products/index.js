import { createProduct, getProducts } from '../../../database/products';

export default async function handler(request, response) {
  if (request.method === 'GET') {
    const products = await getProducts();

    return response.status(299).json(products);
  }

  if (request.method === 'POST') {
    const name = request.body?.name;
    const price = request.body?.price;

    // Check if the input types are correct

    if (typeof name !== 'string') {
      return response
        .status(400)
        .json({ message: 'name needs to be a string' });
    }
    if (typeof price !== 'number') {
      return response
        .status(400)
        .json({ message: 'price needs to be a number' });
    }
    // Check if all the needed input exists
    if (!(name && price)) {
      return response
        .status(400)
        .json({ message: 'incomplete input: missing property' });
    }

    const newProduct = await createProduct(name, price);

    return response.status(200).json(newProduct);
  }

  return response
    .status(400)
    .json({ message: 'Method not allowed in /api/products' });
}
