import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getProducts } from '../database/products';
import { getParsedCookies } from '../util/cookies';
import { mainStyles } from '../util/styles';

export default function Cart(props) {
  console.log(
    'typeof props.products[0].price: ',
    typeof props.products[0].price,
  );

  const [totalCosts, setTotalCosts] = useState(0);

  useEffect(() => {
    // for (const product of productsInCart) {
    //   // setTotalCosts(totalCosts + product.singlePrice * product.amount);
    //   console.log('product.price: ', product.price);
    // }
    // // productsInCart.map((product) => {
    // //   console.log('productsInCart: ', productsInCart);
    // //   console.log('totalCosts:', totalCosts);
    // //   setTotalCosts(totalCosts + product.singlePrice * product.amount);
    // // });
  }, []);

  if (props.products === 'undefined') {
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
            {props.products.map((product) => {
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

                    <p>€ {product.price}</p>
                    <span>Total: € {product.price * product.amount}</span>
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

export async function getServerSideProps(context) {
  const products = await getProducts();
  const cartFromCookies = [];

  if (context.req.cookies.cart) {
    cartFromCookies.push(JSON.parse(context.req.cookies.cart));
  }

  const itemsFromCookies = cartFromCookies[0];

  const productsForCart = itemsFromCookies
    ? itemsFromCookies.map((item) => {
        return {
          name: item.name,
          amount: item.amount,
          price: products.find((product) => {
            return product.id === item.id;
          })?.price,
        };
      })
    : 'undefined';

  // console.log('itemsFromCookies: ', itemsFromCookies);
  // console.log('itemsFromCookies[0].name: ', itemsFromCookies[0].name);
  // console.log('productsForCart: ', productsForCart);

  return {
    props: {
      products: productsForCart,
    },
  };
}
