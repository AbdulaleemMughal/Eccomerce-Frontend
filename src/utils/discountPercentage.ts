export const discountedPercentage = (
  price: number,
  discountedPrice: number
) => {
  const percentage = (discountedPrice / price) * 100;
  return Math.ceil(percentage);
};
