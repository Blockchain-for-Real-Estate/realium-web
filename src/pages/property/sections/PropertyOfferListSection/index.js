import { Tab } from "@headlessui/react";
import useUser from "src/context/queries/useUser";
import classNames from "src/utilities/web/ClassNames";
import BuyOrOffer from "./BuyOrOffer";
import SellOrList from "./SellOrList";
import Link from "next/link";

const TABS = [
  {
    name: "Buy or Offer",
    Component: BuyOrOffer,
  },
  {
    name: "Sell or List",
    Component: SellOrList,
  },
];

const BuyListOfferSection = ({ property }) => {
  const { data: user } = useUser();

  return (
    <Tab.Group as="div" className="shadow rounded-lg sticky top-5">
      <Tab.List className="flex">
        {TABS.map((tab) => (
          <Tab
            key={tab.name}
            className={({ selected }) =>
              classNames(
                "flex-1 rounded-t py-2",
                selected ? "bg-white" : "bg-gray-100"
              )
            }
          >
            {tab.name}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {TABS.map((tab, key) =>
          user ? (
            <Tab.Panel key={key}>
              <tab.Component property={property} />
            </Tab.Panel>
          ) : (
            <Tab.Panel
              key={key}
              className="flex flex-col justify-between h-96 p-4"
            >
              <div>You must Sign In to interact with this property</div>
              <Link href={"/auth/signin"} passHref>
                <button className="btn-primary p-4 w-full">Sign In</button>
              </Link>
            </Tab.Panel>
          )
        )}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default BuyListOfferSection;
