import clsx from "clsx";
import Price from "./price";

const Label = ({
  title,
  amount,
  currencyCode,
  position = "bottom",
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: "bottom" | "center";
}) => {
  return (
    <div
      className={clsx(
        "absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label",
        {
          "lg:px-20 lg:pb-[35%]": position === "center",
        }
      )}
    >
      <div className="flex items-center p-1 text-xs font-semibold text-black border rounded-full bg-white/70 backdrop-blur-md">
        <h3 className="flex-grow pl-2 mr-4 leading-none tracking-tight line-clamp-2">
          {title}
        </h3>
        <Price
          className="flex-none p-2 text-white bg-blue-600 rounded-full"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;
