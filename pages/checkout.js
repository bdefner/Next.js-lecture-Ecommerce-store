import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getParsedCookies } from '../util/cookies';

export default function Checkout(props) {
  const router = useRouter();
  const [productsInCart, setProductsInCart] = useState([]);

  const [totalCosts, setTotalCosts] = useState(0);
  useEffect(() => {
    setProductsInCart(getParsedCookies('cart'));

    console.log('totalCosts', totalCosts);
  }, []);

  return (
    <section className="main-section">
      <div id="checkout-container">
        <div id="checkout-summary" className="column">
          <h3>Summary</h3>
          {productsInCart.map((product) => {
            return (
              <div key={product.name}>
                <div>
                  <div>
                    <p>
                      {product.amount} * {` `}
                    </p>
                    <em> {product.name}</em>
                  </div>
                  <span> € {product.singlePrice * product.amount}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div id="checkout-form" className="column">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              router.push('/confirmation').catch(() => {});
            }}
          >
            <div className="group-of-inputs">
              <h2>Shipping information</h2>
              <div className="row-of-inputs">
                <div>
                  <br />
                  <input
                    placeholder="Firts name"
                    id="fname"
                    data-test-id="checkout-first-name"
                    required
                  />
                </div>
                <div>
                  <br />
                  <input
                    placeholder="Last name"
                    data-test-id="checkout-last-name"
                    required
                  />
                </div>
              </div>
              <div>
                <input type="email" placeholder="Email" required />
              </div>
            </div>
            <div className="group-of-inputs">
              <div>
                <label htmlFor="address">Shipping address</label>
                <br />
                <input
                  placeholder="street and number"
                  id="address"
                  data-test-id="checkout-address"
                  required
                />
              </div>
              <div className="row-of-inputs">
                <div>
                  <input
                    placeholder="Postal / Zip"
                    type="text"
                    // pattern="[0-9]"
                    data-test-id="checkout-postal-code"
                    required
                  />
                </div>
                <div>
                  <input
                    placeholder="City"
                    data-test-id="checkout-city"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="group-of-inputs">
              <div>
                <label htmlFor="card-number">Credit card information</label>
                <br />
                <input
                  placeholder="Card number"
                  id="card-number"
                  data-test-id="checkout-credit-card"
                  required
                />
                <div className="row-of-inputs">
                  <input
                    placeholder="MM/YY"
                    data-test-id="checkout-expiration-date"
                    required
                  />
                  <input
                    placeholder="CCV"
                    data-test-id="checkout-security-code"
                    required
                  />
                </div>
              </div>
            </div>
            <input
              type="submit"
              value="Submit order"
              className="main-button"
              data-test-id="checkout-confirm-order"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
