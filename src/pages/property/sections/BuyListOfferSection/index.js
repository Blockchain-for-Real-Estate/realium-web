import { Tab } from "@headlessui/react";
import classNames from "src/utilities/web/ClassNames";
import Buy from "./Buy";
import List from "./List";
import Offer from "./Offer";

const BuyListOfferSection = ({ property }) => {
  return (
    <Tab.Group as="div" className="shadow rounded-lg">
      <Tab.List className="flex">
        <Tab
          className={({ selected }) =>
            classNames("flex-1 rounded-t py-2", selected ? "" : "bg-gray-100")
          }
        >
          Buy
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames("flex-1 rounded-t py-2", selected ? "" : "bg-gray-100")
          }
        >
          List
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames("flex-1 rounded-t py-2", selected ? "" : "bg-gray-100")
          }
        >
          Offer
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <Buy />
        </Tab.Panel>
        <Tab.Panel>
          <List />
        </Tab.Panel>
        <Tab.Panel>
          <Offer />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default BuyListOfferSection;
