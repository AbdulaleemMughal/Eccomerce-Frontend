export interface ProductInterface {
  _id?: string;
  title: string;
  price: number | null;
  description: string;
  discountedPrice: number | null;
  category: string;
  colors: string[];
  sizes: string[];
  image: string;
}
