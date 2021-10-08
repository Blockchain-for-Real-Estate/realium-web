import React, { useRef, useState } from "react";

export function FaucetPopOut(props) {
    const [copySuccess, setCopySuccess] = useState('');
    const [showModal, setShowModal] = React.useState(false);
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
    };

    return(
        <>
        {!props.modal ?
        <button
            className="bg-indigo-600 text-white active:bg-indigo-500 font-bold uppercase text-xs align-top py-2 px-3 rounded shadow hover:shadow-lg hover:bg-indigo-800 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
            onClick={() => {
                setShowModal(true)
            }}
        >
        Request funds
        </button>
        :
            setShowModal(props.modal)
        }
        {showModal ?
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-end min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-middle bg-white rounded-lg px-4 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
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
            {!copySuccess ?
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
                <h3 className="text-base leading-6 font-medium text-gray-900" id="modal-title">
                    You'll want to have your wallet address handy to receive AVAX.
                </h3>
                {copySuccess === "" ?
                <p className="text-xs text-gray-900">
                    Click to copy it below.
                </p>
                :
                <p className="text-xs text-gray-900">
                    {copySuccess}
                </p>
                }
                <div className="py-2">
                    <input className="text-center text-xs text-indigo-500 w-full border-1 border-gray-200 bg-gray-100 rounded-lg p-2" ref={textAreaRef} style={{cursor: "pointer", color: "transparent", textShadow: "0 0 0 #6366F1"}} defaultValue={props.wallet}
                    onClick={copyToClipboard} readOnly/>
                </div>
                </div>
            </div>
            <div className="mt-3 sm:mt-6">
                <a href="https://faucet.avax-test.network/" target="_blank" rel="noreferrer" onClick={() => setShowModal(false)}>
                    <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-400 text-base font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                    <div className="pr-1">Go to Avalanche Faucet </div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.3335 5.00016H5.00016C4.07969 5.00016 3.3335 5.74635 3.3335 6.66683V15.0002C3.3335 15.9206 4.07969 16.6668 5.00016 16.6668H13.3335C14.254 16.6668 15.0002 15.9206 15.0002 15.0002V11.6668M11.6668 3.3335H16.6668M16.6668 3.3335V8.3335M16.6668 3.3335L8.3335 11.6668" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </button>
                </a>
            </div>
            </div>
        </div>
        </div>
        :
        <></>
        }
    </>
    )
}
