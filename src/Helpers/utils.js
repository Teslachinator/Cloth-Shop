export const calcTotalPrice = (items) =>
  items.reduce((acc, item) => (acc += calcLastPrice(item.price, item.sale)), 0);
export const calcFirstPrice = (items) =>
  items.reduce((acc, item) => (acc += item.price), 0);
export const calcLastPrice = (price, sale) => (sale ? sale : price);
export const calcLastSale = (price, sale) => {
  if (sale === 0) {
    return (sale = 0);
  } else {
    return price - sale;
  }
};
export const calcTotalSale = (items) =>
  items.reduce((acc, item) => (acc += calcLastSale(item.price, item.sale)), 0);
