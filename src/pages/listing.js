import React from "react"
import Link from "next/link";
import { useHistory } from "react-router-dom"
import NumberFormat from "react-number-format"
import { ApiTokenService } from "data/services/token.service.ts"

export function Listing(props) {
    let history = useHistory()
    let [minPrice, setMinPrice] = React.useState(0)
    const propertyId = props.listing.propertyId
    const setNotify = props.setNotify

    const comingSoon = "/images/coming-soon.jpg"

    const residentialImages = [
        "/images/residential/residential-1.jpg",
        "/images/residential/residential-2.jpg", 
        "/images/residential/residential-3.jpg", 
        "/images/residential/residential-4.jpg", 
        "/images/residential/residential-5.jpg", 
        "/images/residential/residential-6.jpg"
    ]
    const commercialImages = [
        "/images/commercial-1.jpg", 
        "/images/commercial-2.jpg", 
        "/images/commercial-3.jpg", 
        "/images/commercial-4.jpg", 
        "/images/commercial-5.jpg", 
        "/images/commercial-6.jpg"
    ]

    React.useEffect(() => {
        const fetchTokens = async () => {
            if (props.listing.listingType === "Residential") {
                try {
                    let tokenService = new ApiTokenService()
                    await tokenService.getListedTokensForPropertyId(propertyId).then(
                        res => {
                            let tokens = Object.values(res.data).sort(function (a, b) {
                                return a.listedPrice - b.listedPrice;
                            });
                            try {
                                setMinPrice(tokens[0].listedPrice)
                            } catch {
                                setMinPrice(0.00)
                            }
                        }
                    )
                } catch(error) {
                    setNotify && setNotify({ msg: `There was an error getting tokens for this property.`,
                                            color: 'red',
                                            show: true })
                    console.error(error)
                }
            }
        };

        fetchTokens()
    }, [propertyId, setNotify, props.listing.listingType])

    return (
        <Link href={`/marketplace/${propertyId}`}>
        <div className="flex flex-col rounded-lg shadow-md overflow-hidden" style={{cursor: "pointer"}}>
            <div className="flex-shrink-0">
                {props.listing.listingType === "Residential" ?
                    <div className="relative">
                        <img className="h-60 w-full object-cover" src={residentialImages[props.index] || comingSoon} alt={props.listing.streetAddress} />
                        <span className="absolute right-1 top-3 px-2 py-1 mr-2 h-7">
                        <svg width="44" height="20" viewBox="0 0 44 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 4C0 1.79086 1.79086 0 4 0H40C42.2091 0 44 1.79086 44 4V16C44 18.2091 42.2091 20 40 20H4C1.79086 20 0 18.2091 0 16V4Z" fill="#EDE9FE"/>
                        <path d="M16.0536 5.27273H14.7496V11.6818H14.6687L10.2283 5.27273H9.00959V14H10.3263V7.59943H10.4073L14.8434 14H16.0536V5.27273ZM20.6932 14.1321C22.1207 14.1321 23.1307 13.429 23.4205 12.3636L22.2145 12.1463C21.9844 12.7642 21.4304 13.0795 20.706 13.0795C19.6151 13.0795 18.8821 12.3722 18.848 11.1108H23.5014V10.6591C23.5014 8.29403 22.0866 7.36932 20.6037 7.36932C18.7798 7.36932 17.5781 8.75852 17.5781 10.7699C17.5781 12.8026 18.7628 14.1321 20.6932 14.1321ZM18.8523 10.1562C18.9034 9.22727 19.5767 8.42188 20.6122 8.42188C21.6009 8.42188 22.2486 9.15483 22.2528 10.1562H18.8523ZM26.3224 14H27.6179L28.9474 9.27415H29.0455L30.375 14H31.6747L33.5966 7.45455H32.2798L31.0057 12.2401H30.9418L29.6634 7.45455H28.3466L27.0597 12.2614H26.9957L25.7131 7.45455H24.3963L26.3224 14Z" fill="#5B21B6"/>
                        </svg>
                        </span>
                    </div>
                    :
                    <div className="relative">
                        <img className="opacity-40 h- w-full object-cover" src={commercialImages[props.index] || comingSoon} alt={props.listing.streetAddress} />
                        <span className="absolute right-1 top-3 px-2 py-1 mr-2 h-7">
                        <svg width="97" height="20" viewBox="0 0 97 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 4C0 1.79086 1.79086 0 4 0H93C95.2091 0 97 1.79086 97 4V16C97 18.2091 95.2091 20 93 20H4C1.79086 20 0 18.2091 0 16V4Z" fill="#F3F4F6"/>
                        <path d="M18.3285 8.1108C18.0302 6.24432 16.5685 5.15341 14.7234 5.15341C12.4648 5.15341 10.7987 6.84517 10.7987 9.63636C10.7987 12.4276 12.4563 14.1193 14.7234 14.1193C16.641 14.1193 18.043 12.9176 18.3285 11.1918L16.9989 11.1875C16.7731 12.304 15.8356 12.9176 14.7319 12.9176C13.2362 12.9176 12.1069 11.7713 12.1069 9.63636C12.1069 7.51847 13.2319 6.35511 14.7362 6.35511C15.8484 6.35511 16.7816 6.98153 16.9989 8.1108H18.3285ZM22.5589 14.1321C24.4041 14.1321 25.6101 12.7812 25.6101 10.7571C25.6101 8.72017 24.4041 7.36932 22.5589 7.36932C20.7138 7.36932 19.5078 8.72017 19.5078 10.7571C19.5078 12.7812 20.7138 14.1321 22.5589 14.1321ZM22.5632 13.0625C21.3572 13.0625 20.7947 12.0099 20.7947 10.7528C20.7947 9.5 21.3572 8.43466 22.5632 8.43466C23.7607 8.43466 24.3232 9.5 24.3232 10.7528C24.3232 12.0099 23.7607 13.0625 22.5632 13.0625ZM27.0323 14H28.3065V9.96449C28.3065 9.08239 28.9244 8.46875 29.6488 8.46875C30.3562 8.46875 30.8462 8.9375 30.8462 9.64915V14H32.1161V9.82812C32.1161 9.03977 32.5977 8.46875 33.4286 8.46875C34.1019 8.46875 34.6559 8.84375 34.6559 9.73011V14H35.93V9.6108C35.93 8.11506 35.0948 7.36932 33.9102 7.36932C32.9684 7.36932 32.261 7.82102 31.9457 8.51989H31.8775C31.592 7.80398 30.9911 7.36932 30.1175 7.36932C29.2525 7.36932 28.609 7.79972 28.3363 8.51989H28.2553V7.45455H27.0323V14ZM37.6378 14H38.9119V7.45455H37.6378V14ZM38.2812 6.4446C38.7202 6.4446 39.0866 6.10369 39.0866 5.68608C39.0866 5.26847 38.7202 4.9233 38.2812 4.9233C37.8381 4.9233 37.4759 5.26847 37.4759 5.68608C37.4759 6.10369 37.8381 6.4446 38.2812 6.4446ZM41.9002 10.1136C41.9002 9.0696 42.5394 8.47301 43.4258 8.47301C44.2908 8.47301 44.815 9.03977 44.815 9.99006V14H46.0891V9.83665C46.0891 8.21733 45.1985 7.36932 43.8604 7.36932C42.8761 7.36932 42.2326 7.82528 41.93 8.51989H41.8491V7.45455H40.6261V14H41.9002V10.1136ZM50.5423 16.5909C52.2085 16.5909 53.4954 15.8281 53.4954 14.1449V7.45455H52.2468V8.51562H52.1531C51.9272 8.1108 51.4755 7.36932 50.2567 7.36932C48.6758 7.36932 47.5124 8.6179 47.5124 10.7017C47.5124 12.7898 48.7013 13.902 50.2482 13.902C51.4499 13.902 51.9144 13.2244 52.1445 12.8068H52.2255V14.0938C52.2255 15.1207 51.5224 15.5639 50.555 15.5639C49.494 15.5639 49.0806 15.0312 48.8548 14.6562L47.7596 15.108C48.1048 15.9091 48.9783 16.5909 50.5423 16.5909ZM50.5295 12.8452C49.3917 12.8452 48.7994 11.9716 48.7994 10.6847C48.7994 9.42756 49.3789 8.4517 50.5295 8.4517C51.6417 8.4517 52.2383 9.35938 52.2383 10.6847C52.2383 12.0355 51.6289 12.8452 50.5295 12.8452ZM63.2422 7.56534H64.5121C64.4737 6.16761 63.2379 5.15341 61.4652 5.15341C59.7138 5.15341 58.3714 6.15483 58.3714 7.65909C58.3714 8.87358 59.2408 9.58523 60.6428 9.96449L61.674 10.2457C62.6072 10.4929 63.3274 10.7997 63.3274 11.5753C63.3274 12.4276 62.5135 12.9901 61.3928 12.9901C60.3786 12.9901 59.5348 12.5384 59.4581 11.5881H58.1371C58.2223 13.169 59.4453 14.1449 61.4013 14.1449C63.451 14.1449 64.6314 13.0668 64.6314 11.5881C64.6314 10.0156 63.2294 9.40625 62.1214 9.13352L61.2692 8.91193C60.5874 8.73722 59.6797 8.41761 59.6839 7.58239C59.6839 6.84091 60.3615 6.29119 61.4354 6.29119C62.4368 6.29119 63.1484 6.75994 63.2422 7.56534ZM68.8597 14.1321C70.7049 14.1321 71.9109 12.7812 71.9109 10.7571C71.9109 8.72017 70.7049 7.36932 68.8597 7.36932C67.0146 7.36932 65.8086 8.72017 65.8086 10.7571C65.8086 12.7812 67.0146 14.1321 68.8597 14.1321ZM68.864 13.0625C67.658 13.0625 67.0955 12.0099 67.0955 10.7528C67.0955 9.5 67.658 8.43466 68.864 8.43466C70.0614 8.43466 70.6239 9.5 70.6239 10.7528C70.6239 12.0099 70.0614 13.0625 68.864 13.0625ZM76.0902 14.1321C77.9354 14.1321 79.1413 12.7812 79.1413 10.7571C79.1413 8.72017 77.9354 7.36932 76.0902 7.36932C74.245 7.36932 73.0391 8.72017 73.0391 10.7571C73.0391 12.7812 74.245 14.1321 76.0902 14.1321ZM76.0945 13.0625C74.8885 13.0625 74.326 12.0099 74.326 10.7528C74.326 9.5 74.8885 8.43466 76.0945 8.43466C77.2919 8.43466 77.8544 9.5 77.8544 10.7528C77.8544 12.0099 77.2919 13.0625 76.0945 13.0625ZM81.8377 10.1136C81.8377 9.0696 82.4769 8.47301 83.3633 8.47301C84.2283 8.47301 84.7525 9.03977 84.7525 9.99006V14H86.0266V9.83665C86.0266 8.21733 85.136 7.36932 83.7979 7.36932C82.8136 7.36932 82.1701 7.82528 81.8675 8.51989H81.7866V7.45455H80.5636V14H81.8377V10.1136Z" fill="#1F2937"/>
                        </svg>
                        </span>
                    </div>
                }
                </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    {props.listing.listingType === "Residential" ?
                    <p className="text-sm font-medium text-indigo-600">
                    {props.listing.listingType}
                    </p>
                    :
                    <p className="text-sm font-medium text-green-500">
                    {props.listing.listingType}
                    </p>
                    }
                    <p className="text-xl font-semibold text-gray-900">
                        {props.listing.propertyName}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                        {`This property is a ${props.listing.propertyType.toLowerCase()} located in ${props.listing.city}, ${props.listing.state}.`}
                    </p>
                    {props.listing.listingType === "Residential" ?
                    <div className="mt-3 text-sm font-medium text-indigo-600">
                        <NumberFormat
                            value={minPrice}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'Shares From: '}
                        />
                        <div className="h-4 inline-flex px-1">
                        <svg width="12" height="12" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z" fill="#4F46E5"/>
                        </svg>
                        </div>
                    </div>
                    :
                    <div className="mt-3 text-sm font-medium text-green-500">
                        <NumberFormat
                            value={minPrice}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'Share Price: '}
                        />
                        <div className="h-4 inline-flex px-1">
                        <svg width="12" height="12" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z" fill="#34D399"/>
                        </svg>
                        </div>
                    </div>
                    }
                </div>
            </div>
            </div>
        </Link>
    )
}
