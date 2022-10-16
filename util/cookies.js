import Cookies from 'js-cookie';

export function getParsedCookies(key) {
  const cookieValue = Cookies.get(key); // Type string | Undefined

  if (!cookieValue) {
    return undefined;
  }

  try {
    return JSON.parse(cookieValue); // Type should be a string
  } catch (err) {
    return undefined;
  }
}

export function setStringifiedCookie(key, value) {
  Cookies.set(key, JSON.stringify(value));
}

export function deleteCookies(key) {
  return Cookies.remove(key);
}
