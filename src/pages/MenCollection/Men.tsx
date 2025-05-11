import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import { Card } from "../../components/product/Card";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";
import Button from "../../components/ui/button/Button";
import { useNavigate } from "react-router";

export default function Men() {
  const navigate = useNavigate();
  const context = useContext(ProductContext);
  if (!context) return;
  const { products, fetchProducts } = context;

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <PageMeta
        title="Men Collections"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Mens" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="w-full">
          {products.length === 0 && !products ? (
            <div className="text-center">
              <div className="py-4 font-bold text-3xl">No Product Found</div>
              <Button
                children="Add Products"
                variant="outline"
                onClick={() => navigate("/form-elements")}
              />
            </div>
          ) : (
            <div className="grid grid-cols-12">
              {products.map((item) => {
                return <Card key={item._id} data={item} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
