import bannerImage from "../../assests/Rectangle 2.jpg";

export const Banner = () => {
  return (
    <>
      <div className="h-[663px] flex max-lg:flex-col">
        <div className="bg-[#F2F0F1] py-24 pl-14 flex flex-col gap-4 items-start dark:bg-white/[0.03] max-lg:py-2 max-lg:px-4">
          <h1 className="text-[64px] font-bold leading-[64px] text-[#525af5] max-lg:text-[50px] max-lg:leading-[50px] max-sm:text-[36px] max-sm:leading-[34px] dark:text-white">
            FIND SHOES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="text-[#888df0] dark:text-white">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="py-2.5 mt-3 px-14 bg-[#3641F5] rounded-3xl text-white max-lg:w-full">
            Shop Now
          </button>
          <div className="mt-8 flex flex-wrap max-lg:justify-around max-lg:items-center">
            <div className="flex max-lg:justify-around max-lg:w-full">
              <div className="pr-2">
                <h3 className="text-[30px] text-[#3641F5] font-bold dark:text-white">
                  200+
                </h3>
                <p className="text-[#888df0]">International Brands</p>
              </div>
              <div className="px-4 border-l-2 border-r-2 border-[#888df0] max-lg:border-none">
                <h3 className="text-[30px] text-[#3641F5] font-bold dark:text-white">
                  2,000+
                </h3>
                <p className="text-[#888df0]">High-Quality Products</p>
              </div>
            </div>
            <div className="pl-2 max-lg:pt-5">
              <h3 className="text-[30px] text-[#3641F5] font-bold dark:text-white">
                200+
              </h3>
              <p className="text-[#888df0]">Happy Customers</p>
            </div>
          </div>
        </div>
        <img src={bannerImage} className="h-full" />
      </div>
    </>
  );
};
