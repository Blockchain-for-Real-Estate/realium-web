import { useState } from "react";
import Modal from "src/components/base/Modal";
import PropertyListingsTable from "../PropertyListingsTable";
import Heading1 from "src/components/general/Heading1";

const PropertyListingsModal = ({ property }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="btn-primary w-full p-4" onClick={() => setOpen(true)}>
        View Listings
      </button>
      <Modal open={open} close={() => setOpen(false)}>
        <Heading1
          title="Active Listings"
        />
        <PropertyListingsTable property={property} action />
      </Modal>
    </>
  );
};

export default PropertyListingsModal;
