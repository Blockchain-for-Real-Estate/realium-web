import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { UserCircleIcon, XIcon } from "@heroicons/react/outline";
import useUI from "src/context/hooks/useUI";
import headerLinks from "src/data/headerLinks";
import NavLink from "src/components/base/NavLink";
import useUser from "src/context/queries/useUser";
import useWindowWidth from "src/context/hooks/useWindowWidth";

const MobileSideNav = () => {
  const { mobileNavOpen, toggleMobileNav } = useUI();
  const { data: user } = useUser();

  const windowWidth = useWindowWidth(200);
  useEffect(() => {
    if (windowWidth > 768 && mobileNavOpen) {
      toggleMobileNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

  return (
    <Transition.Root show={mobileNavOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden z-40"
        onClose={toggleMobileNav}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        <div className="relative h-10 w-48">
                          <Image
                            src={"/images/realium.svg"}
                            layout="fill"
                            objectFit="contain"
                            alt="realium"
                          />
                        </div>
                      </Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={toggleMobileNav}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6 flex flex-col justify-between">
                    <div>
                      {headerLinks?.map((link) => (
                        <NavLink
                          key={link.header}
                          href={link.href}
                          exact={true}
                          classes="block p-4 w-full text-xl rounded text-left"
                          activeClasses="bg-gray-100"
                          onClick={toggleMobileNav}
                          external={false}
                        >
                          {link.header}
                        </NavLink>
                      ))}
                    </div>
                    <div>
                      {user ? (
                        <div className="flex items-center">
                          <Link href="/account/dashboard" passHref>
                            <button
                              onClick={toggleMobileNav}
                              className="btn-primary p-4 w-full"
                            >
                              My Account
                            </button>
                          </Link>
                        </div>
                      ) : (
                        <>
                          <Link href="/auth/signin" passHref>
                            <button
                              onClick={toggleMobileNav}
                              className="btn-primary  px-3 py-2 w-full my-2"
                            >
                              Sign in
                            </button>
                          </Link>
                          <Link href="/auth/register" passHref>
                            <button
                              onClick={toggleMobileNav}
                              className="btn-secondary bg-gray-200 px-3 py-2 w-full my-2"
                            >
                              Sign Up
                            </button>
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileSideNav;
