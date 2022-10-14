import { deleteProductById, getProductById } from '../../../database/products';

return async function handler(request, response) {
  const productId = request.query.productId;

  // Check if id is a number

  if (!productId) {
    return response.status(404).json({ message: 'Not a valid Id' });
  }

  if (request.method === 'GET') {
    const product = await getProductById(productId);

    // Check if products exists in the database
    if (!product) {
      return response
        .status(404)
        .json({ message: 'Invalid input: Product does not exist' });
    }

    return response.status(200).json(product);
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

    // Check if all needed input is provided

    if (!(name && price)) {
      return response.status(400).json({ message: 'Missing property input' });
    }

    const newProduct = await updateProductById(name, price);

    if (!newProduct) {
      return response
        .status(404)
        .json({ message: 'Invalid input: Product can not be created' });
    }
  }

  if (request.method === 'DELETE') {
    const deletedProduct = await deleteProductById(productId);

    if (!deletedProduct) {
      return response.status(404).json({ message: 'Not a valid Id' });
    }

    return response.status(200).json(deletedProduct);
  }

  return response.status(400).json({ message: 'Method not allowed' });
};
