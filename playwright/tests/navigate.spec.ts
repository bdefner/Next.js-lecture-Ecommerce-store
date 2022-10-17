import { expect, test } from '@playwright/test';

// E2E test: Go to shop, add product named "cosy", go to cart, go to checkout and submit checkout form

test('checkout flow', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('h1')).toHaveText('vegan hats for cats');

  // Go to shop and click on product "cosy"
  await page.locator('a:has-text("shop")').click();
  await expect(page).toHaveURL('http://localhost:3000/products');
  await page.locator('a:has-text("cosy")').click();

  // Add 1 "cosy" to cart
  await expect(page).toHaveURL('http://localhost:3000/products/1');
  await expect(page.locator('h2')).toHaveText('cosy');
  await page.locator('button:has-text("add to cart")').click();

  // Go to cart and click on checkout
  await page.locator('data-test-id=go-to-cart').click();
  await expect(page).toHaveURL('http://localhost:3000/cart');
  await expect(page.locator('h1')).toHaveText('Shopping cart');
  await page.locator('button:has-text("checkout")').click();

  // Fill out checkout form and submit order

  await expect(page).toHaveURL('http://localhost:3000/checkout');
  await page.locator('data-test-id=checkout-first-name').fill('Mani');
  await page.locator('data-test-id=checkout-last-name').fill('Magi');
  await page.locator('data-test-id=checkout-email').fill('manimagi@juhuu.at');
  await page
    .locator('data-test-id=checkout-address')
    .fill('strawberry street 3');
  await page.locator('data-test-id=checkout-postal-code').fill('0815');
  await page.locator('data-test-id=checkout-city').fill('Meow city');
  await page
    .locator('data-test-id=checkout-credit-card')
    .fill('0815 404 500 200');
  await page.locator('data-test-id=checkout-expiration-date').fill('08/15');
  await page.locator('data-test-id=checkout-security-code').fill('404');

  await page.locator('data-test-id=checkout-confirm-order').click();

  // Check thank you page

  await expect(page).toHaveURL('http://localhost:3000/confirmation');
  await expect(page.locator('h1')).toHaveText('Thanks for your order!');
});
