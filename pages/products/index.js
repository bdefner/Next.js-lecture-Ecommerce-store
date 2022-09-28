import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';

console.log(products);

export default function Products(props) {
  console.log('props: ', props);
  return (
    <>
      <h1>Products</h1>
      {props.products.map((product) => {
        return (
          <div>
            <Image
              src={`/${product.id}-${product.name}.jpg`}
              alt={`product with name: ${product.name}`}
              width="200"
              height="200"
            />
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </div>
        );
      })}
    </>
  );
}

export function getServerSideProps() {
  return {
    props: {
      products: products,
    },
  };
}
