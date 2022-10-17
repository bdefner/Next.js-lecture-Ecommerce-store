export function calculateTotalCosts(products) {
  let totalCosts = 0;
  if (products !== 'undefined') {
    products.forEach((element) => {
      totalCosts += element.price * element.amount;
    });
    return totalCosts;
  } else {
    return 0;
  }
}
