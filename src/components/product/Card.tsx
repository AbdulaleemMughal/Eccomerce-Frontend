import { useNavigate } from "react-router";
import { ProductInterface } from "../../interfaces/Data.interface";
import Badge from "../ui/badge/Badge";
import { discountedPercentage } from "../../utils/discountPercentage";

type CardProps = {
  data: ProductInterface;
};

export const Card = ({ data }: CardProps) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="col-span-3 p-2 cursor-pointer max-lg:col-span-6"
        onClick={() => navigate(`/products/${data._id}`)}
      >
        <div className="w-full max-w-xs mx-auto">
          {" "}
          <div className="w-full max-h-[298px]">
            {
              data.image ?  <img
              className="w-full rounded-2xl mix-blend-multiply object-cover"
              src={data?.image}
              alt={data?.title}
            /> : <div className="w-full rounded-2xl bg-gray-200"></div>
            }
           
          </div>
          <div className="flex flex-col mt-2">
            <h4 className="text-[20px] font-bold dark:text-white ">
              {data.title}
            </h4>
            <div className="flex items-center gap-3">
              <p className="text-[24px] font-bold dark:text-white ">
                ${data.price}
              </p>
              <span className=" text-[24px] font-bold text-[#999999] line-through">
                ${data.discountedPrice}
              </span>
              <Badge
                variant="light"
                startIcon="-"
                size="md"
                color="error"
                children={discountedPercentage(
                  Number(data?.price),
                  Number(data?.discountedPrice)
                )}
                endIcon="%"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
