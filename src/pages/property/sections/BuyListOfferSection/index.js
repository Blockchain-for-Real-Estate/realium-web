import { Tab } from "@headlessui/react";
import classNames from "src/utilities/web/ClassNames";
import Buy from "./Buy";
import List from "./List";
import Offer from "./Offer";

const TABS = [
  {
    name: "Buy",
    Component: Buy,
  },
  {
    name: "List",
    Component: List,
  },
  {
    name: "Offer",
    Component: Offer,
  },
];

const BuyListOfferSection = ({ property }) => {
  return (
    <Tab.Group as="div" className="shadow rounded-lg sticky top-5">
      <Tab.List className="flex">
        {TABS.map((tab, key) => (
          <Tab
            key={key}
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
        {TABS.map((tab, key) => (
          <Tab.Panel key={key}>
            <tab.Component />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default BuyListOfferSection;
