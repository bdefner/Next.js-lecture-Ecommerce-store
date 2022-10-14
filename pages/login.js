import { useRouter } from 'next/router';
import { useState } from 'react';
import { mainStyles } from '../util/styles';

export default function Login() {
  const router = useRouter();
  const [displayPassword, setDisplayPassword] = useState('hidden');
  const [passwordInput, SetPasswordInput] = useState('');
  const correctPassword = 'password123';
  return (
    <section css={mainStyles} id="login-section">
      <div id="login-wrap">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (!passwordInput === correctPassword) {
              alert('Wrong password. Please try again!');
            }
            if (passwordInput === correctPassword) {
              router.push('/admin').catch((error) => {
                console.log(error);
              });
            }
          }}
        >
          <h3>Login to edit the products database</h3>
          <div className="flex-row-center">
            <div>
              <input
                type="password"
                placeholder="password"
                onChange={(event) =>
                  SetPasswordInput(event.currentTarget.value)
                }
              />
            </div>
            <input type="submit" className="main-button" value="Login" />
          </div>
        </form>
        <p
          id="i-forgot"
          onClick={() => {
            setDisplayPassword('block');
          }}
        >
          But, I don't know the password
        </p>
        <span className={displayPassword}>
          Psst... the password is: password123
        </span>
      </div>
    </section>
  );
}
