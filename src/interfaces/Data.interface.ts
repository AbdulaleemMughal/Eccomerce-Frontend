export interface DataInterface {
  id: number;
  name: string;
  price: number;
  image?: string;
  discountedPrice: number;
  description: string;
  sizes: string[];
}

export interface ProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  discountedPrice: number;
  category: string;
  colors: string[];
  sizes: string[];
  time: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}
