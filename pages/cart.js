import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getProducts } from '../database/products';
import { getParsedCookies } from '../util/cookies';
import { mainStyles } from '../util/styles';

export default function Cart(props) {
  const [productsInCart, setProductsInCart] = useState([]);

  const [totalCosts, setTotalCosts] = useState(0);
  async function fetchDataFromCookies() {
    setProductsInCart(await getParsedCookies('cart'));
  }

  useEffect(() => {
    fetchDataFromCookies().catch((error) => {
      console.log(error);
    });

    for (const product of productsInCart) {
      // setTotalCosts(totalCosts + product.singlePrice * product.amount);
      console.log('product.price: ', product.price);
    }

    // productsInCart.map((product) => {
    //   console.log('productsInCart: ', productsInCart);
    //   console.log('totalCosts:', totalCosts);
    //   setTotalCosts(totalCosts + product.singlePrice * product.amount);
    // });
    console.log('productsInCart: ', productsInCart);
  }, []);

  if (productsInCart === 'undefined') {
    return (
      <section className="main-section">
        <div className="main-container">
          <h3>Cart is empty</h3>
          <Link href="/products">
            <button className="main-button">See our products</button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div css={mainStyles}>
      <section className="main-section">
        <container id="cart-container">
          <h1>Shopping cart</h1>
          <div>
            {productsInCart.map((product) => {
              return (
                <div key={product.name}>
                  <div id="cart-item" data-test-id="cart-product-<product id>">
                    <h3>{product.name}</h3>

                    <div className="flex-row-center">
                      <div className="amount-wrap">
                        <button>-</button>
                        <p>{product.amount}</p>
                        <button>+</button>
                      </div>
                    </div>

                    <p>€ {product.singlePrice}</p>
                    <span>Total: € {product.singlePrice * product.amount}</span>
                  </div>
                  <hr />
                </div>
              );
            })}
            <div id="total-wrap">
              <span>Total: € {totalCosts} </span>

              <Link href="/checkout">
                <button className="main-button">checkout</button>
              </Link>
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
  const products = await getProducts();
  return {
    props: {
      products: products,
    },
  };
}
