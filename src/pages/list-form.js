import React from "react"
import { useHistory } from "react-router-dom"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { ApiTokenService } from "data/services/token.service.ts"
import { ApiEventService } from "data/services/event.service.ts"

export function ListForm(props) {
    const history = useHistory()
    const propertyId = props.propertyId
    const [tokensAvailable, setTokensAvailable] = React.useState([])
    const setNotify = props.setNotify

    React.useEffect(() => {
        const getAvailableTokens = async () => {
            try {
                let tokenService = new ApiTokenService()
                let resp = await tokenService.getPropertyTokensByUser(sessionStorage.getItem("id"), propertyId)

                setTokensAvailable(resp.data)
            } catch (err) {
                setTokensAvailable(0)
                setNotify && setNotify({ msg: `There was an error loading user tokens.`,
                                        color: 'red',
                                        show: true })
                console.error(`Error: ${err}`)
            }
        }

        getAvailableTokens()
    }, [propertyId, setNotify])

    return (
        <Formik
            validateOnChange
            validateOnBlur={false}
            initialValues={{
                shares: '',
                price: '',
            }}
            validationSchema={
                Yup.object({
                    shares: Yup.string()
                        .matches(/^\s|^(\d)+(?=\s|$)/, "Enter a whole number of shares.")
                        .required("Enter a whole number of shares to list."),
                    price: Yup.number("Please enter a valid number of AVAX")
                        .required("Enter the price you would like to list at your shares for.")
            })}
            onSubmit={async (values, actions) => {
                try {
                    actions.setSubmitting(true)
                    let eventService = new ApiEventService()
                    await eventService.postTransaction({
                        "eventType": 'LIST',
                        "listedPrice": values.price,
                        "quantity": values.shares,
                        "property": propertyId,
                        "tokenOwner": sessionStorage.getItem("id"),
                        "eventCreator": sessionStorage.getItem("id")
                    }, sessionStorage.getItem("token"))

                    setNotify && setNotify({msg: "Your tokens have been listed.",
                                        color: 'green',
                                        show: true})
                } catch (err) {
                    setNotify && setNotify({msg: 'There was an error listing tokens.',
                                        color: 'red',
                                        show: true})
                    console.error(err)
                }
                actions.setSubmitting(false)
                actions.resetForm()
                if (props.isModal) {
                    props.confirmed(true)
                    props.showForm(false)
                    history.go(0)
                }
            }}
        >{form => (
            <Form>
                <div className="mt-12 mb-2 mx-2">
                    <fieldset>
                        <div className="mt-1 bg-white rounded-md shadow-md -space-y-px w-full">
                            <div className="flex -space-x-px border rounded-t border-gray-900">
                                <div className="w-1/2 flex-1 min-w-0">
                                    <input
                                        disabled
                                        type="text"
                                        readOnly
                                        className="rounded-tl focus:ring-white-500 focus:border-white-500 relative block w-full rounded-none bg-transparent focus:z-10 sm:text-sm border-white text-white text-shadow"
                                        placeholder="Shares"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    {!props.isModal ?
                                    <Field
                                        as="input"
                                        id="shares"
                                        name="shares"
                                        type="text"
                                        className="rounded-tr focus:ring-white-500 focus:border-white-500 text-right relative block w-full rounded-none bg-transparent focus:z-10 sm:text-sm border-l-white border-white"
                                        placeholder={`${tokensAvailable.length} available` || "100"}
                                    />
                                    :
                                    <Field
                                        as="input"
                                        id="shares"
                                        name="shares"
                                        type="text"
                                        className="rounded-tr focus:ring-white-500 focus:border-white-500 text-right relative block w-full rounded-none bg-transparent focus:z-10 sm:text-sm border-l-white border-white"
                                        placeholder={`${props.availableToSell} available` || "100"}
                                    />
                                    }
                                </div>
                            </div>
                            <div className="flex -space-x-px border rounded-b border-gray-900">
                                <div className="w-1/2 flex-1 min-w-0">
                                    <input
                                        disabled
                                        type="text"
                                        readOnly
                                        className="rounded-bl focus:ring-white-500 focus:border-white-500 relative block w-full rounded-none bg-transparent focus:z-10 sm:text-sm border-white text-white text-shadow"
                                        placeholder="Share price"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <Field
                                        as="input"
                                        id="price"
                                        name="price"
                                        type="text"
                                        className="rounded-br focus:ring-white-500 focus:border-white-500 text-right relative block w-full rounded-none bg-transparent focus:z-10 sm:text-sm border-l-white border-white"
                                        placeholder={tokensAvailable.length > 0 ? `${Number(tokensAvailable[0].listedPrice) + 1} AVAX` : "1 AVAX"}
                                    />
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div className="text-sm text-red-500 my-2.5 px-2">
                    <div><ErrorMessage name="shares" /></div>
                    <div><ErrorMessage name="price" /></div>
                </div>
                <div className="mb-8 mx-2 text-right text-xs text-gray-300">
                    Total: {Object.keys(form.errors).length > 0 ? "0" : Number(form.values.shares) * Number(form.values.price)} AVAX
                </div>
                <div className="my-4 space-y-3 text-center sm:m-1 sm:items-center">
                    <button
                        className="bg-indigo-500 text-white active:bg-indigo-500 text-xs w-full py-2 px-2 rounded shadow-sm hover:shadow-lg hover:bg-indigo-700 outline-none focus:outline-none ease-linear transition-all duration-150"
                        type="submit"
                    >
                        Sell Shares
                    </button>
                    {!props.isModal ? 
                    <button
                        className="bg-indigo-200 text-indigo-600 active:bg-indigo-500 text-xs w-full py-2 px-2 rounded shadow-sm hover:shadow-lg hover:bg-indigo-300 outline-none focus:outline-none ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => console.log('viewing offers')}
                    >
                        View Offers
                    </button>
                    : null }
                </div>
            </Form>)}
        </Formik>
    )
}
