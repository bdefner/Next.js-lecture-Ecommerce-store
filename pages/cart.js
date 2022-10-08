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
        <container id="cart-container">
          <div>
            {productsInCart.map((product) => {
              return (
                <div>
                  <div
                    key={product.id}
                    id="cart-item"
                    data-test-id="cart-product-<product id>"
                  >
                    <h3>{product.name}</h3>

                    <div className="flex-row-center">
                      <button>-</button>
                      <p>{product.amount}</p>
                      <button>+</button>
                    </div>

                    <p>€ {product.singlePrice * product.amount}</p>
                    <span>Total: € {totalCosts}</span>
                  </div>
                  <hr />
                </div>
              );
            })}
            <div id="total-wrap">
              <span>Total: € </span>
              <button className="main-button">Checkout</button>
            </div>
          </div>
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
