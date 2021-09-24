import NavLink from "components/base/NavLink";
import Link from "next/link";
import header from "data/static/headerLinks";
import { MenuIcon } from "@heroicons/react/outline";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function HeaderDefault() {
  return (
    <header className="bg-white z-30 shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <a>
                <span className="sr-only">Realium</span>
                <div className="relative h-10 w-48">
                  <Image
                    src={"/images/realium.svg"}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </a>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {header.map((link, key) => (
                <HeaderLink key={key} link={link} />
              ))}
            </div>
          </div>

          {/* MOBILE */}
          <div className="lg:hidden ml-10 space-x-4">
            <MenuIcon className="h-10" />
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:block ml-10 space-x-4">
            <button onClick={signIn} className="btn-secondary  px-3 py-2">
              Sign in
            </button>
            {/* <Link href="/signup"> */}
            <button className="btn-primary px-3 py-2" onClick={signOut}>
              Sign Out
            </button>
            {/* </Link> */}
          </div>
        </div>
      </nav>
    </header>
  );
}

export function HeaderLink({ link }) {
  return (
    <NavLink
      href={link.href}
      classes="text-gray-500 hover:border-gray-300 hover:text-gray-700"
      activeClasses="border-b border-indigo-500 text-gray-900"
    >
      {link.header}
    </NavLink>
  );
}
