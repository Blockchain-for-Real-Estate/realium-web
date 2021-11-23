import { useState } from "react";
import NumberFormat from "react-number-format";
import AvaxSymbol from "src/components/avax/AvaxSymbol";
import Modal from "src/components/base/Modal";
import useListings from "src/context/queries/useListings";
import ConfirmModal from "./ConfirmBuyModal";

const ListingsModal = ({ property }) => {
  const [open, setOpen] = useState();
  const { data: listings } = useListings(property?.propertyId);

  // if (!listings) return null;
  return (
    <>
      <button
        className="w-full btn-primary px-3 py-4"
        onClick={() => setOpen(true)}
      >
        View Listings
      </button>
      <Modal
        open={open}
        close={() => setOpen(false)}
        position="justify-center items-start"
      >
        <div>
          <h2>Available Listings</h2>
        </div>
        <table className="border-2 border-gray-100 m-0 p-0">
          <thead className="bg-gray-100 border-1 border-gray-700 divide-y p-3 uppercase text-md">
            <tr>
              <th className="p-3">Quantity Listed</th>
              <th className="p-3">Price Per Share</th>
              <th className="p-3">Time</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white border-1 border-gray-700 divide-y">
            {listings?.map((listing) => (
              <tr
                key={listing.createdAt}
                className="m-4 border-b border-gray-200 sm:shadow"
              >
                <td className="p-3 text-center" data-label="Quantity">
                  <NumberFormat
                    value={listing.count}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </td>
                <td className="p-3 text-center" data-label="Price">
                  <NumberFormat
                    value={listing.price}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                  <div className="h-4 inline-flex px-1">
                    <AvaxSymbol />
                  </div>
                </td>
                <td className="p-3 text-center" data-label="Time">
                  {new Date().getTime() - new Date(listing.createdAt)}
                </td>
                <td className="p-3 text-center">
                  <ConfirmModal listing={listing} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal>
    </>
  );
};

export default ListingsModal;
