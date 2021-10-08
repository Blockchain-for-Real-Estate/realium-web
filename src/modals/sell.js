import React from "react";
import { ListForm } from "../marketplace/list-form"

export function SellModal(props) {
  const [showModal, setShowModal] = React.useState(false);
  const [unconfirmed, setConfirmed] = React.useState(false);
  const [showForm, setShowForm] = React.useState(true)
  const potentialListing = props.potentialListing

  return (
    <>
        <button className="bg-indigo-500 text-white active:bg-indigo-500 text-xs w-4/5 py-2 px-2 rounded shadow-sm hover:shadow-lg hover:bg-indigo-700 outline-none focus:outline-none ease-linear transition-all duration-150" type="button"
            onClick={() => {
                setShowModal(true)
            }}
        >
        Sell Shares
        </button>
        {showModal ?
        /* This example requires Tailwind CSS v2.0+ */
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-2 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div className="mx-auto flex items-right">
                <button
                        className="ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                    >
                        <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                        </span>
                    </button>
                </div>
                <div>
                    {!unconfirmed ?
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100">
                    {/* Heroicon name: outline/hazard */}
                    <svg className="h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    </div>
                    :
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    {/*Heroicon name: outline/check*/}
                    <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    </div>
                    }
                    <div className="mt-3 text-center sm:mt-5">
                    {!unconfirmed ?
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        Listing confirmation
                    </h3>
                    :
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        Listing successful
                    </h3>
                    }
                    {showForm ?
                    <ListForm isModal={true} propertyId={potentialListing['0']['property']['propertyId']} availableToSell={props.availableToSell} confirmed={setConfirmed} showForm={setShowForm}/>
                    : 
                    <p className="px-8 text-sm text-gray-500">Your shares have been listed!</p>
                    }
                    </div>
                </div>
                </div>
            </div>
        </div>
       : null}
    </>
  )
}