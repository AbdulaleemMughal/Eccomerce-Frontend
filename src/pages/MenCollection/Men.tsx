import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import { Banner } from "../../components/product/Banner";
import { Card } from "../../components/product/Card";
import { menShoesData } from "../../utils/data";

export default function Men() {
  return (
    <div>
      <PageMeta
        title="Men Collections"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Mens" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="w-full">
          {/* <Banner /> */}
          <div className="grid grid-cols-12">
            {menShoesData.map((item) => {
              return <Card key={item.id} data={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
