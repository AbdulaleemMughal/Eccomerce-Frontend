import { useContext } from "react";
import { Link } from "react-router";
import { ProductContext } from "../../context/ProductContext";
import axios from "axios";
import { BASE_URL } from "../../utils/constant";

type CategoryOption = {
  value: string;
  label: string;
};

const categoryOptions: CategoryOption[] = [
  { value: "mens", label: "Mens" },
  { value: "womens", label: "Womens" },
  { value: "kids", label: "Kids" },
];

interface BreadcrumbProps {
  pageTitle: string | undefined;
}

const PageBreadcrumb: React.FC<BreadcrumbProps> = ({ pageTitle }) => {
  const context = useContext(ProductContext);
  if (!context) return;
  const { setProducts, setMessage, fetchProducts } = context;

  const handleCategory = async (value: string) => {
    if (value === "") {
      fetchProducts();
    } else {
      const res = await axios.get(BASE_URL + `/get-category/${value}`, {
        withCredentials: true,
      });

      setProducts(res.data?.data);
      setMessage(res?.data?.message);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-6 max-lg:px-3 max-lg:pt-3">
      <div className="flex items-center gap-10">
        <h2
          className="text-xl font-semibold text-gray-800 dark:text-white/90"
          x-text="pageName"
        >
          {pageTitle}
        </h2>
        {pageTitle === "Mens" && (
          <select
            className="border border-gray-400 rounded-md p-1 z-10 dark:text-white"
            onChange={(e) => handleCategory(e.target.value)}
          >
            <option value="" className="dark:text-black">All</option>
            {categoryOptions.map((option) => {
              return (
                <option className="dark:text-black" key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        )}
      </div>

      <nav>
        <ol className="flex items-center gap-1.5">
          <li>
            <Link
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
              to="/dashboard"
            >
              Home
              <svg
                className="stroke-current"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"
                  stroke=""
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
          <li className="text-sm text-gray-800 dark:text-white/90">
            {pageTitle}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default PageBreadcrumb;
