import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import { Banner } from "../../components/product/Banner";


export default function Women() {
  return (
    <div>
      <PageMeta
        title="Women Collections"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Womens" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="w-full">
          <Banner />
        </div>
      </div>
    </div>
  );
}
