import { useState } from "react";
import Modal from "src/components/base/Modal";
import useCreateListingMutation from "src/context/mutations/useCreateListingMutation";
import Round2DecimalPlaces from "src/utilities/math/Round2DecimalPlaces";
import PropertyListingsTable from "../PropertyListingsTable";

const PropertyListModal = ({ property }) => {
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState("");

  const { mutate: createListing, isLoading } = useCreateListingMutation(
    property?.propertyId
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const _price = Round2DecimalPlaces(parseFloat(price));
    createListing(
      { price: _price, quantity: 1 },
      {
        onSuccess: () => {
          setOpen(false);
        },
      }
    );
  };

  return (
    <>
      <button
        className="btn-secondary w-full p-4 border border-indigo-500"
        onClick={() => setOpen(true)}
      >
        List a Share
      </button>
      <Modal open={open} close={() => setOpen(false)}>
        <div>Make Offer</div>
        <form onSubmit={handleSubmit} className="p-5">
          <label>Price Per Share</label>
          <input
            required
            className="p-2 border"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button className="btn-primary p-4">
            {isLoading ? "..." : "List Share"}
          </button>
        </form>
        <PropertyListingsTable property={property} />
      </Modal>
    </>
  );
};

export default PropertyListModal;
