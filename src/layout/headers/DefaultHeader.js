import NavLink from "components/base/NavLink";
import Link from "next/link";
import header from "data/static/headerLinks";
import { MenuIcon, UserCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";
import AccountBalance from "components/avax/AccountBalance";
import useUser from "context/queries/useUser";

export default function HeaderDefault() {
  const { data: user } = useUser();

  return (
    <header className="bg-gray-50 z-30 shadow">
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
                    alt="realium"
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
            {user ? (
              <div className="flex items-center">
                <Link href="/account/dashboard" passHref>
                  <button>
                    <UserCircleIcon className="h-10 w-10" />
                  </button>
                </Link>
                <AccountBalance />
              </div>
            ) : (
              <>
                <Link href="/auth/register" passHref>
                  <button className="btn-secondary px-3 py-2">Sign Up</button>
                </Link>
                <Link href="/auth/signin" passHref>
                  <button className="btn-primary  px-3 py-2">Sign in</button>
                </Link>
              </>
            )}
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
