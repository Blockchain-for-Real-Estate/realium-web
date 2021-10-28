import React from "react";
import NavLink from "components/base/NavLink";
import {
  CreditCardIcon,
  KeyIcon,
  LogoutIcon,
  TemplateIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import useSignoutMutation from "context/mutations/useSignoutMutation";

export const links = [
  {
    header: "Account",
    links: [
      {
        name: "Dashboard",
        href: "/account/dashboard",
        external: false,
        Icon: TemplateIcon,
      },
      {
        name: "Profile",
        href: "/account/profile",
        external: false,
        Icon: UserCircleIcon,
      },
      {
        name: "Verification",
        href: "/account/verification",
        external: false,
        Icon: UsersIcon,
      },
      {
        name: "Security",
        href: "/account/security",
        external: false,
        Icon: KeyIcon,
      },
      {
        name: "Wallet",
        href: "/account/wallet",
        external: false,
        Icon: CreditCardIcon,
      },
    ],
  },
];

const AccountSidebar = () => {
  const { mutate: signout } = useSignoutMutation();

  return (
    <div className="pr-4 relative h-full">
      <div className="sticky top-5">
        {links.map((section, key) => (
          <AccountSidebarSection key={key} section={section} />
        ))}

        <div className="flex relative">
          <div className="px-2 text-gray-500 bg-gray-100 ml-4 md:ml-0">
            Actions
          </div>
          <div className="mt-3 border-t border-gray-300 flex-1" />
        </div>
        <div className="md:pl-4" onClick={signout}>
          <AccountSidebarLink
            link={{ name: "Sign Out", Icon: LogoutIcon, href: "#" }}
          />
        </div>
      </div>
    </div>
  );
};

export const AccountSidebarSection = ({ section }) => {
  return (
    <>
      <div className="flex relative">
        <div className="px-2 text-gray-500 bg-gray-100 ml-4 md:ml-0">
          {section.header}
        </div>
        <div className="mt-3 border-t border-gray-300 flex-1" />
      </div>
      <div className="py-2 md:pl-4">
        {section.links.map((link, key) => (
          <AccountSidebarLink key={key} link={link} />
        ))}
      </div>
    </>
  );
};

export const AccountSidebarLink = ({ link }) => {
  return (
    <NavLink
      href={link.href}
      classes="pl-2 rounded-md flex items-center py-2 m-2 text-gray-500 w-full hover:bg-blue-50"
      activeClasses="bg-blue-100 text-blue-700"
      exact
    >
      <link.Icon className="h-6 w-6 mx-2" />
      <span>{link.name}</span>
    </NavLink>
  );
};

export default AccountSidebar;
