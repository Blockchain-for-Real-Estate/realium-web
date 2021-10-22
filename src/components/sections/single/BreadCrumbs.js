import React from "react";
import Link from "next/link";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";

export function Breadcrumbs({ Property }) {
  return (
    <nav className="flex pt-8 ml-4 sm:pt-0" aria-label="Breadcrumb">
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
            <ChevronRightIcon className="h-5 w-5" />
            <Link
              href="/marketplace"
            >
              <a className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-800 text-decoration-none">
              Marketplace
              </a>
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRightIcon className="h-5 w-5" />
            <Link href={`/marketplace/${Property.propertyId}`}
              className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-800"
            >
              <a className="ml-4 text-sm font-medium text-gray-600 hover:text-gray-800 text-decoration-none">
              {Property.propertyName}
              </a>
            </Link>
          </div>
        </li>
      </ol>
    </nav>
  );
}
