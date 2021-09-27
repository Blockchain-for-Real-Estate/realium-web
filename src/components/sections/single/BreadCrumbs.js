import React from "react";
import Link from "next/link";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";

export function Breadcrumbs({ propertyName }) {
  return (
    <nav className="flex mt-8 sm:pt-0" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5" />
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRightIcon className="h-5 w-5 mx-4" />
            <Link
              href="/marketplace"
              className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 text-decoration-none"
            >
              Marketplace
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRightIcon className="h-5 w-5" />
            <div
              className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              aria-current="page"
            >
              {propertyName}
            </div>
          </div>
        </li>
      </ol>
    </nav>
  );
}
