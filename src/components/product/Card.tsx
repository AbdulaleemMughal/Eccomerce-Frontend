import { useNavigate } from "react-router";
import { DataInterface } from "../../interfaces/Data.interface";
import Badge from "../ui/badge/Badge";

type CardProps = {
  data: DataInterface;
};

export const Card = ({ data }: CardProps) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="col-span-3 p-2 cursor-pointer max-lg:col-span-6"
        onClick={() => navigate(`/products/${data.id}`)}
      >
        <div className="w-full max-w-xs mx-auto">
          {" "}
          <div className="w-full max-h-[298px]">
            <img
              className="w-full rounded-2xl mix-blend-multiply object-cover"
              src={data?.image}
              alt={data?.name}
            />
          </div>
          <div className="flex flex-col mt-2">
            <h4 className="text-[20px] font-bold dark:text-white ">
              {data.name}
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
                size="md"
                color="error"
                children="-20"
                endIcon="%"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
