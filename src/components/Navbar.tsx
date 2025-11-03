"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const pathname = usePathname();

    const navigation = [
        { name: "Hakkımızda", href: "/about" },
        { name: "Hizmetlerimiz", href: "/services" },
        { name: "Sistemler", href: "/systems" },
        { name: "İletişim", href: "/contact" },
    ];

  return (
    <div className="w-full">
        <nav
            className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
            {/* Logo  */}
            <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
              <span>
                <Image
                    src="/img/bakrenlogo.png"
                    width="80"
                    alt="N"
                    height="80"
                    className="w-64"
                />
              </span>
          </span>
            </Link>

            {/* get started  */}
            <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
                <ThemeChanger/>
                <div className="hidden mr-3 lg:flex nav__item">
                    <Link href="/blog" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
                        Blog
                    </Link>
                </div>
            </div>

            <Disclosure>
                {({open}) => (
                    <>
                        <Disclosure.Button
                            aria-label="Toggle Menu"
                            className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                            <svg
                                className="w-6 h-6 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                {open && (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                    />
                                )}
                                {!open && (
                                    <path
                                        fillRule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                    />
                                )}
                            </svg>
                        </Disclosure.Button>

                        <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                            <>
                                {navigation.map((item, index) => (
                                    <Link key={item.name}
                                          href={item.href}
                                          className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                                        {item.name}
                                    </Link>
                                ))}
                                <Link href="/blog"
                                      className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">
                                    Blog
                                </Link>
                            </>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            {/* menu  */}
            <div className="hidden lg:flex items-center space-x-6">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`text-lg font-normal transition ${
                            pathname === item.href
                                ? "text-flame font-semibold"
                                : "text-gray-700 dark:text-gray-200 hover:text-flame dark:hover:text-solarGold"
                        }`}
                    >
                        {item.name}
                    </Link>
                ))}

            </div>

        </nav>
    </div>
  );
}

