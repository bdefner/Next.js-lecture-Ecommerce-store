import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../database/products';
import { calculateTotalCosts } from '../util/CalculateTotalCosts';
import { mainStyles } from '../util/styles';

export default function Cart(props) {
  if (props.products === 'undefined') {
    return (
      <section className="main-section">
        <div className="main-container">
          <h3>You cart is empty 🧐 </h3>
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
                    <Image
                      src={`/${product.id}-${product.name}.jpg`}
                      alt="Product"
                      id="product-image-in-cart"
                      width="50"
                      height="50"
                    />
                    <h3>{product.name}</h3>
                    <p>€ {product.price}</p>

                    <div className="flex-row-center">
                      <div className="amount-wrap">
                        <button>-</button>
                        <p>{product.amount}</p>
                        <button>+</button>
                      </div>
                    </div>

                    <span>Total: € {product.price * product.amount}</span>
                  </div>
                  <hr />
                </div>
              );
            })}
            <div id="total-wrap">
              <span>Total: € {props.totalCosts}</span>

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

export async function getServerSideProps(context) {
  const products = await getProducts();
  const cartFromCookies = [];

  if (context.req.cookies.cart) {
    cartFromCookies.push(JSON.parse(context.req.cookies.cart));
  }

  const itemsFromCookies = cartFromCookies[0];

  // Create an Array of objects to return to the frontend with name, amount and price of the products in the cart
  const productsForCart = itemsFromCookies
    ? itemsFromCookies.map((item) => {
        return {
          id: item.id,
          name: item.name,
          amount: item.amount,
          price: products.find((product) => {
            return product.id === item.id;
          })?.price,
        };
      })
    : 'undefined';

  // if (productsForCart !== 'undefined') {
  //   productsForCart.forEach((element) => {
  //     totalCosts += element.price * element.amount;
  //   });
  // }

  return {
    props: {
      products: productsForCart,

      // Calculate total costs in the backend, so it can not be manipulated in the client

      totalCosts: calculateTotalCosts(productsForCart),
    },
  };
}
