import Collections from "components/layout/search/collections";
import FilterList from "components/layout/search/filter";
import { sorting } from "lib/constants";
import { Suspense } from "react";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <div className="flex flex-col gap-8 px-4 pb-4 mx-auto text-black max-w-screen-2xl dark:text-white md:flex-row">
        <div className="order-first w-full flex-none md:max-w-[125px]">
          <Collections />
        </div>
        <div className="order-last w-full min-h-screen md:order-none">
          {children}
        </div>
        <div className="order-none flex-none md:order-last md:w-[125px]">
          <FilterList list={sorting} title="Sort by" />
        </div>
      </div>
    </Suspense>
  );
}
