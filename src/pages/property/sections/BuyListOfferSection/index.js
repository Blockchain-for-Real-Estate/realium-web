import { Tab } from "@headlessui/react";
import useUser from "src/context/queries/useUser";
import classNames from "src/utilities/web/ClassNames";
import Buy from "./Buy";
import Offer from "./Offer";

const TABS = [
  {
    name: "Buy",
    Component: Buy,
  },
  {
    name: "Offer",
    Component: Offer,
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
        {user ? (
          TABS.map((tab, key) => (
            <Tab.Panel key={key}>
              <tab.Component property={property} />
            </Tab.Panel>
          ))
        ) : (
          <Tab.Panel>Please Sign In</Tab.Panel>
        )}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default BuyListOfferSection;
