import React from "react"
import { useParams } from "react-router-dom"
// import * as bs from "react-bootstrap"
import NumberFormat from "react-number-format"
// import LoadingWave from "@bit/ngoue.playground.loading-wave"
import { Breadcrumbs } from "components/sections/single/Breadcrumbs"
// import { AppContainer } from "../utilities/app-container"
import { ApiPropertyService } from 'data/services/property.service.ts'
import { ApiTokenService } from 'data/services/token.service.ts'
import { ApiEventService } from "data/services/event.service.ts"
import { Transactions } from "components/sections/single/Transactions"
import { BuyListOffer } from "components/sections/single/BuyListOffer"
import { DetailsTable } from "components/sections/single/DetailsTable"

export default function PropertySingle() {

    const propertyId = "49301989-e323-438b-87c9-14a8232f0571"
    const [listing, setListing] = React.useState()
    const [token, setToken] = React.useState()
    const [transactions, setTransactions] = React.useState()
    // const [carousel, setCarousel] = React.useState(imgPackages[propertyId])

    function changeImage(id) {
        let imgHolder = {...carousel}
        let idHolder = imgHolder[id]
        imgHolder[id] = carousel.main
        imgHolder.main = idHolder
        setCarousel(imgHolder)
    }

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                let assetViaApi = new ApiPropertyService()
                await assetViaApi.getAssetById(propertyId).then(
                    res => {
                        setListing(res.data[0])
                    }
                )
            } catch {
                
            }
        };

        fetchData()
    }, [propertyId])

    React.useEffect(() => {
        const fetchToken = async () => {
            try {
                let tokenViaApi = new ApiTokenService()
                    await tokenViaApi.getPropertyTokens(propertyId).then(
                        res => {
                            setToken(res.data[0])
                        }
                    )
            } catch {
                setToken(hardToken)
            }
        };

        fetchToken()
    }, [propertyId, listing])

    React.useEffect(() => {
        try {
            let transactionViaApi = new ApiEventService()
            transactionViaApi.getFilteredTransactions(propertyId).then(
                res => {
                    const txs = res.data
                    setTransactions(txs)
                }
            )
        } catch {
            setTransactions(null)
        }
    }, [propertyId])
console.log(listing, token, transactions)
    return (
        <>
        {listing && token && transactions ?
        <>
                <>
                    <div className="mt-12 mb-12">
                        <div className="border-bottom mb-4 m-4">
                            <bs.Row className="mb-2">
                                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-center">{listing.propertyName || "Valley Ridge"}</h1>
                            </bs.Row>
                            <bs.Row className="mb-2 text-base sm:text-xl">
                                <div className="font-weight-bold">{listing.propertyType} in {listing.city}, {listing.state}</div >
                            </bs.Row>
                            <bs.Row className="justify-content-between mb-4">
                                <div className="text-xs sm:text-base">
                                    {listing.streetAddress} | {listing.city}, {listing.state} | {listing.zipCode}
                                </div>
                                <Breadcrumbs listing={listing} />
                            </bs.Row>
                        </div>
                        <bs.Row>
                            <bs.Col md={7}>
                                <div className="text-center mb-4">
                                    <img src={carousel.main} alt={listing.propertyType} className="object-fill h-90 w-full"/>
                                </div>
                                <bs.Row className="text-center mb-5">
                                    {Object.keys(carousel).map(key =>
                                        key !== 'main' &&  <bs.Col key={key}>
                                                                <img src={carousel[key]} alt={listing.propertyType} className="object-fill h-30 w-full" onClick={() => changeImage(key)} style={{ cursor: "pointer"}}/>
                                                            </bs.Col>
                                    )}
                                </bs.Row>
                                <div className="font-weight-bold" style={{"fontSize": "1.1rem"}}>Description</div>
                                <div className="mb-8">
                                    {listing.propertyName} is located in {listing.city}, {listing.state} for a steal at {<NumberFormat value={token.purchasedPrice} displayType={'text'} thousandSeparator={true} />}
                                    <div className="h-4 inline-flex px-1">
                                    <svg width="15" height="15" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z" fill="#374151"/>
                                    </svg>
                                    </div>. {listing.details.description}
                                    </div>
                            </bs.Col>
                            <bs.Col md={1} />
                            <bs.Col md={4}>
                                <BuyListOffer events={transactions} propertyId={listing.propertyId} />
                                <div style={{"fontSize": "0.9rem"}} className="text-muted m-2 pt-8">
                                    *By purchasing shares of this asset,
                                    you become a part owner of this property
                                    and agree to Realium’s Terms of Use.
                                </div>
                            </bs.Col>
                        </bs.Row>
                    </div>
                </>
        <DetailsTable listing={listing} token={token} event={transactions}/>
        <Transactions listing={listing} setNotify={props.setNotify}/>
    </>
    :
        <div className="content-center flex flex-wrap justify-center py-72">
            {/* <LoadingWave primaryColor="#5C6BF6" secondaryColor="#ABABAB"/> */}
        </div>
    }
    </>
    )
}

const hardToken = {
    "tokenId": 1,
    "purchasedPrice": "800000.00",
    "listedPrice": "50000.00",
    "listed": true,
    "property": 1,
    "owner": 1
}
