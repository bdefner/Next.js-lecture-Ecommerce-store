const products = [
  { name: 'cosy', price: 100 },
  { name: 'classy', price: 200 },
  { name: 'cool', price: 300 },
  { name: 'sunny', price: 400 },
];

exports.up = async (sql) => {
  await sql`
  INSERT INTO products ${sql(products, 'name', 'price')}`;
};

exports.down = async (sql) => {
  for (const product of products) {
    await sql`
      DELETE FROM
        products
      WHERE
        name = ${product.name} AND
        price = ${product.price}
    `;
  }
};
