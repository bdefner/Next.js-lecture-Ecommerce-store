import { useRouter } from 'next/router';

export default function Checkout(props) {
  const router = useRouter();
  return (
    <section className="main-section">
      <div id="checkout-container">
        <div id="checkout-summary" className="column">
          summary
        </div>
        <div id="checkout-form" className="column">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              router.push('/confirmation').catch(() => {});
            }}
          >
            <div className="group-of-inputs">
              <label htmlFor="fname">Shipping information</label>
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
