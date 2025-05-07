import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { ProductInterface } from "../interfaces/Data.interface";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { pushProduct } from "../store/productSlice";

interface ProductContextType {
  products: ProductInterface[];
  setProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>;
  fetchProducts: () => void;
}

export const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-products`, {
        withCredentials: true,
      });
      setProducts(response.data.data);
      dispatch(pushProduct(response.data.data));
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  return (
    <ProductContext.Provider value={{ products, setProducts, fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
