import { useState } from "react";
import Modal from "src/components/base/Modal";
import useCreateListingMutation from "src/context/mutations/useCreateListingMutation";
import Round2DecimalPlaces from "src/utilities/math/Round2DecimalPlaces";
import PropertyListingsTable from "../PropertyListingsTable";
import Heading1 from "src/components/general/Heading1";

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
      <Heading1
        title="List Your Tokens"
        description={`Ready for cash? Evaulate active listings for ${property.propertyName} and competitively list your tokens for fellow investors to buy.`}
      />
        <form onSubmit={handleSubmit} className="pt-8 pb-12 text-center">
        <div className="flex-center lg:mt-0 lg:flex-shrink-0 sm:px-8">
        <div className="inline-flex rounded-md">
          <input
              required
              className="p-3 border"
              placeholder="0.00000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="ml-3 inline-flex rounded-md shadow-sm">
            <button
              onClick={handleSubmit}
              type="submit"
              className="inline-flex items-center justify-center text-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
            >
              {isLoading ? "..." : "List Token"}
            </button>
          </div>
        </div>
        </form>
        <PropertyListingsTable property={property} />
      </Modal>
    </>
  );
};

export default PropertyListModal;
