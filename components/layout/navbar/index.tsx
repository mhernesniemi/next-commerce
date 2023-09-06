import Cart from "components/cart";
import OpenCart from "components/cart/open-cart";
import { getMenu } from "lib/shopify";
import { Menu } from "lib/shopify/types";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";
import Search from "./search";
const { SITE_NAME } = process.env;

export default async function Navbar() {
  const menu = await getMenu("next-js-frontend-header-menu");

  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="flex-none block md:hidden">
        <MobileMenu menu={menu} />
      </div>
      <div className="flex items-center w-full">
        <div className="flex w-full md:w-1/3">
          <Link
            href="/"
            className="flex items-center justify-center w-full mr-2 md:w-auto lg:mr-6"
          >
            <div className="text-3xl">🍷</div>
            <div className="flex-none ml-2 text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link>
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="justify-center hidden md:flex md:w-1/3">
          <Search />
        </div>
        <div className="flex justify-end md:w-1/3">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
