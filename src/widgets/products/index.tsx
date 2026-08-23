import { useAppTranslation } from "@/shared/hooks/useAppTranslation";

export default function Products() {
  const { t } = useAppTranslation();

  return (
    <div className="flex justify-center items-center w-full max-w-[1200px] align-start gap-8 mx-auto py-10">
      <div className="flex flex-col gap-8 w-full ">
        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            justify-between
            gap-6
          "
        >
          <div className=" flex flex-col text-white gap-2">
            <span className="text-lg sm:text-2xl text-gray">
              {t("products.subtitle")}
            </span>
            <span
              className="
                text-primary
                text-4xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                leading-tight
              "
            >
              {t("products.title")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
