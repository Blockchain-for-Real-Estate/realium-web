import { useState } from "react";
import Modal from "src/components/base/Modal";
import PropertyOffersTable from "../PropertyOffersTable";
import Heading1 from "src/components/general/Heading1";

const PropertyOffersModal = ({ property }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="btn-primary w-full p-4 " onClick={() => setOpen(true)}>
        View Offers
      </button>
      <Modal open={open} close={() => setOpen(false)}>
        <Heading1
          title="Current Offers"
        />
        <PropertyOffersTable property={property} action />
      </Modal>
    </>
  );
};

export default PropertyOffersModal;
