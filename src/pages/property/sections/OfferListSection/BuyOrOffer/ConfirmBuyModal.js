import { useState } from "react";
import NumberFormat from "react-number-format";
import AvaxSymbol from "src/components/avax/AvaxSymbol";
import Modal from "src/components/base/Modal";
import useGasEstimate from "src/context/queries/useGasEstimate";
import useProperty from "src/context/queries/useProperty";

const ConfirmBuyModal = ({ listing }) => {
  const [open, setOpen] = useState();
  const subtotal = listing.count * listing.price;

  const { data: property } = useProperty(listing.propertyId);
  const { data: estimate } = useGasEstimate(
    listing.sellerAddress,
    subtotal,
    open
  );

  return (
    <>
      <button onClick={() => setOpen(true)} className="btn-primary p-2">
        Preview
      </button>
      <Modal open={open} close={() => setOpen(false)}>
        <div className="p-5 ">
          <h4 className="font-bold text-center">Purchase Review</h4>
          <table className="border">
            <tbody>
              <tr>
                <td>Property</td>
                <td>{property.propertyName}</td>
              </tr>
              <tr>
                <td>Quantity</td>
                <td>{listing.count}</td>
              </tr>
              <tr>
                <td>Price Per Share</td>
                <td>
                  {listing.price}
                  <AvaxSymbol />
                </td>
              </tr>
              <tr>
                <td>Subtotal</td>
                <td>
                  {subtotal} <AvaxSymbol />
                </td>
              </tr>
              <tr>
                <td>Gas Fee</td>
                <td>
                  {estimate} <AvaxSymbol />
                </td>
              </tr>
              <tr>
                <td>Estimated Total</td>
                <td>
                  ~{" "}
                  <NumberFormat
                    value={subtotal + estimate}
                    displayType={"text"}
                  />
                  <AvaxSymbol />
                </td>
              </tr>
            </tbody>
          </table>
          <button className="w-full btn-primary p-2">Confirm Purchase</button>
        </div>
      </Modal>
    </>
  );
};

export default ConfirmBuyModal;
