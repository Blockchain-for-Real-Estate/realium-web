import React from "react";
import NumberFormat from "react-number-format"
import { ApiEventService } from "data/services/event.service.ts";
import { ApiBalanceService } from "data/services/balance.service.ts"

export function Confirmation(props) {
    let [balance, setBalance] = React.useState(0)
    const [showModal, setShowModal] = React.useState(false);
    const [unconfirmed, setConfirmed] = React.useState(false);
    const auth_token = sessionStorage.getItem('token')
    const setNotify = props.setNotify
    const purchase = props.purchase

    React.useEffect(() => {
        let wallet = sessionStorage.getItem('avax')
        const fetchBalance = async () => {
            try {
                let balanceService = new ApiBalanceService()
                await balanceService.getBalance(wallet).then(
                    (res) => {
                        setBalance(Number(res.data.result.balance)/1000000000) //AVAX uses a demonination of 9
                    }
                )
            } catch {
                setBalance(null)
            }
        };

        fetchBalance()
    }, [])
    
    function submit() {
        //trigger Event POST as a SALE
        const data = purchase[0]
        const payload = {
            eventType: "SALE",
            listedPrice: data.listedPrice,
            quantity: purchase.length,
            property: data.property.propertyId,
            tokenOwner: data.owner.realiumUserId,
            eventCreator: sessionStorage.getItem('id')
        }

        async function Buy(payload) {
            let txTotal = purchase.length * data.listedPrice
            if (balance > txTotal) {
                try {
                    let auth_token = sessionStorage.getItem('token')
                    let transactionService = new ApiEventService()
                    await transactionService.postTransaction(payload, auth_token).then(
                        (res) => {
                            if (res.status === 200 || res.status === 201) {
                                setConfirmed(true)
                            }
                        }
                    )
                } catch(error) {
                    setShowModal(false)
                    setNotify && setNotify({ msg: `There was an error processing this transaction.`,
                                            color: 'red',
                                            show: true })
                    console.error(error)
                }
            } else {
                setShowModal(false)
                setNotify && setNotify({ msg: `You do not have enough funds to conduct this transaction. Request more funds at the faucet from your dashboard.`,
                                        color: 'red',
                                        show: true })
            }
        }

        Buy(payload); //generates 401 right now
    }

  return (
        <>
        <button
            className="bg-indigo-500 text-white active:bg-indigo-500 font-bold uppercase text-sm w-full py-2 px-7 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
            onClick={() => {
                setShowModal(true)
                setConfirmed(false)
            }}
        >
        BUY
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
                        Purchase confirmation
                    </h3>
                    :
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        Payment successful
                    </h3>
                    }
                    {!unconfirmed ?
                    <div className="mt-2">
                        {auth_token ?
                        <p className="px-8 text-sm text-gray-500">
                        Are you sure you want to purchase <span className="text-sm text-indigo-600 font-bold">
                            <NumberFormat
                                value={purchase.length}
                                displayType={'text'}
                                thousandSeparator={true}
                            />
                        </span>{purchase.length > 1 ? " shares" : " share"} for <span className="text-sm text-indigo-600 font-bold">
                        <NumberFormat
                                value={purchase[0].listedPrice}
                                displayType={'text'}
                                thousandSeparator={true}
                            />
                        </span>
                        <span className="h-4 inline-flex px-1">
                        <svg width="12" height="12" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z" fill="#4F46E5"/>
                        </svg>
                        </span>
                         per share?
                        </p>
                        :
                        <p className="px-8 text-sm text-gray-500">Please sign in to complete this purchase.</p>
                        }
                    </div>
                    :
                    <div className="mt-2">
                        <p className="px-8 text-sm text-gray-500">
                        Purchase confirmed for <span className="text-sm text-indigo-600 font-bold">
                            {purchase.length}</span>{purchase.length > 1 ? " shares" : " share"} at <span className="text-sm text-indigo-600 font-bold">
                            {purchase[0].listedPrice}
                            <div className="h-4 inline-flex px-1">
                            <svg width="12" height="12" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z" fill="#4F46E5"/>
                            </svg>
                            </div>
                            </span> per share.
                        </p>
                    </div>
                    }
                    </div>
                </div>
                <div className="mt-5 sm:mt-6">
                    {!unconfirmed ?
                    <button type="button" id="modalButton" className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    onClick={auth_token ? () => { submit() } : history.push("/login")}>
                        {auth_token ? "CONFIRM PURCHASE" : "Sign In"}
                    </button>
                    :
                    <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    onClick={() => {
                        setShowModal(false)
                        history.push("/dashboard")
                        window.location.reload();
                    }}>
                        Return to Dashboard
                    </button>
                    }
                </div>
                </div>
            </div>
        </div>
       : null}
    </>
  )
}
