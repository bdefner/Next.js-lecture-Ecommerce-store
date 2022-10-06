import React, { useEffect, useState } from 'react';
import { productsDatabase } from '../database/products';
import { getParsedCookies, setStringifiedCookie } from '../util/cookies';
import { mainStyles } from '../util/styles';

export default function Cart(props) {
  const [productsInCart, setProductsInCart] = useState([]);
  const [totalCosts, setTotalCosts] = useState(0);
  useEffect(() => {
    setProductsInCart(getParsedCookies('cart'));
    productsInCart.map((product) => {
      setTotalCosts(totalCosts + product.singlePrice * product.amount);
    });
    console.log('totalCosts', totalCosts);
  }, []);
  return (
    <div css={mainStyles}>
      <section className="main-section">
        <container>
          {productsInCart.map((product) => {
            return (
              <div
                key={product.id}
                id="cart-item"
                data-test-id="cart-product-<product id>"
              >
                <h3>{product.name}</h3>
                <p>amount: {product.amount}</p>
                <p>total: € {product.singlePrice * product.amount}</p>
                <span>Total: € {totalCosts}</span>
              </div>
            );
          })}
        </container>
      </section>
    </div>
  );
}

// export default function Cart() {
//   return <></>;
// }

export async function getServerSideProps() {
  // const products = await getProducts();
  return {
    props: {
      products: productsDatabase,
    },
  };
}
