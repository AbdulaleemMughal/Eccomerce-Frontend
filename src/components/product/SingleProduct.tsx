import { useParams } from "react-router";
import { menShoesData } from "../../utils/data";
import PageMeta from "../common/PageMeta";
import PageBreadcrumb from "../common/PageBreadCrumb";
import Badge from "../ui/badge/Badge";

export const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();

  const product = menShoesData.find((item) => item.id === Number(id));

  return (
    <>
      <div>
        <PageMeta
          title="React.js Blank Dashboard | TailAdmin - Next.js Admin Dashboard Template"
          description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
        />
        <PageBreadcrumb pageTitle={product?.name} />
        <div className="min-h-screen rounded-2xl border p-4 border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="w-full">
            <div className="flex gap-4 max-lg:flex-col">
              {/* image div  */}
              <div className="flex gap-2 max-lg:justify-center max-md:flex-col-reverse max-md:items-center">
                {/* Three images*/}
                <div className="flex flex-col gap-1 max-lg:justify-center max-md:flex-row">
                  <div className="rounded-xl bg-[#F0EEED] max-h-[130px] max-w-[130px]">
                    <img
                      src={product?.image}
                      className="rounded-xl h-full w-full mix-blend-multiply"
                    />
                  </div>
                  <div className="rounded-xl bg-[#F0EEED] max-h-[130px] max-w-[130px]">
                    <img
                      src={product?.image}
                      className="rounded-xl h-full w-full mix-blend-multiply"
                    />
                  </div>
                  <div className="rounded-xl bg-[#F0EEED] max-h-[130px] max-w-[130px]">
                    <img
                      src={product?.image}
                      className="rounded-xl h-full w-full mix-blend-multiply"
                    />
                  </div>
                </div>
                {/* single image  */}
                <div className="h-[400px] w-[400px] bg-[#F0EEED] rounded-xl max-sm:w-auto">
                  <img
                    src={product?.image}
                    className="h-full w-full mix-blend-multiply"
                  />
                </div>
              </div>
              {/* content div  */}
              <div className="flex-1">
                <div className="flex flex-col gap-1">
                  <h1 className="text-[40px] font-bold dark:text-white">
                    {product?.name}
                  </h1>
                  <div className="flex gap-3">
                    <span className="text-[32px] font-bold dark:text-white">
                      ${product?.price}
                    </span>
                    <span className="text-[32px] font-bold line-through text-[#999999]">
                      ${product?.discountedPrice}
                    </span>
                    <Badge children="-40" color="error" endIcon="%" />
                  </div>
                  <div className="border-b py-1 border-[#999999] dark:border-white">
                    <p className="leading-[19px] dark:text-white">
                      {product?.description}
                    </p>
                  </div>
                  <div className="flex pb-2 flex-col gap-0.5 border-b border-[#999999] dark:border-white">
                    <span className="text-[16px] text-[#999999]">
                      Select Colors
                    </span>
                    <div className="flex gap-3">
                      <div className="w-[37px] h-[37px] rounded-full bg-amber-500"></div>
                      <div className="w-[37px] h-[37px] rounded-full bg-amber-500"></div>
                      <div className="w-[37px] h-[37px] rounded-full bg-amber-500"></div>
                    </div>
                  </div>
                  <div className="border-b pb-2 border-[#999999] dark:border-white flex flex-col gap-0.5">
                    <span className="text-[16px] text-[#999999]">
                      Select Size
                    </span>
                    <div className="flex gap-2">
                      {product?.sizes.map((s) => (
                        <Badge
                          children={s}
                          variant="solid"
                          color="light"
                          className="cursor-pointer"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 pt-3 items-center">
                    <div className="flex bg-[#F0F0F0] justify-around rounded-full">
                      <span className="px-4 py-1 text-2xl cursor-pointer">
                        -
                      </span>
                      <span className="px-4 py-1 text-2xl">1</span>
                      <span className="px-4 py-1 text-2xl cursor-pointer">
                        +
                      </span>
                    </div>
                    <button className="flex-1 bg-[#3641F5] rounded-full text-white py-2">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
