import React, { useState } from 'react'
import TimeAgo from 'react-timeago'
import lodash from 'lodash'
// import LoadingWave from "@bit/ngoue.playground.loading-wave"
// import { useParams } from "react-router-dom"

import NumberFormat from "react-number-format"
import { ApiTokenService } from "data/services/token.service.ts"
import { ApiEventService } from "data/services/event.service.ts"
import { Confirmation } from './Confirmation';
// import "./modal.css"

export function Purchase(props) {
    let { propertyId } = 1
    let [tokens, setTokens] = useState('')
    let rows = []
    const setNotify = props.setNotify

    React.useEffect(() => {
        const fetchTokens = async () => {
            try {
                let tokenService = new ApiTokenService()
                await tokenService.getListedTokensForPropertyId(propertyId).then(
                    res => {
                        let tokenArr = res.data.filter(token => token.owner.realiumUserId !== Number(sessionStorage.getItem('id')))
                        setTokens(lodash.groupBy(tokenArr, "owner.realiumUserId"))
                    }
                )
            } catch(error) {
                setTokens(null)
                setNotify && setNotify({ msg: `There was an error getting listings for this property.`,
                                        color: 'red',
                                        show: true })
                console.error(error)
            }
        };

        fetchTokens()
    }, [propertyId, setNotify])

    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    Object.keys(tokens).forEach((key) => {
        var dataset = lodash.groupBy(tokens[key], "listedPrice")
        Object.entries(dataset).forEach((entry) => {
            rows.push(entry[1])
        })
    })

    return (
        <>
        {tokens && rows ?
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="mb-4 mt-4 align-middle inline-block min-w-full sm:px-6 lg:px-12">
                <div className="overflow-hidden sm:rounded-lg">
                    <table className="border-2 border-gray-100 m-0 p-0 min-w-full">
                        <thead className="bg-gray-100 border-1 border-gray-700 divide-y p-3 uppercase text-md">
                            <tr>
                            <th className="p-3">From</th>
                            <th className="p-3">Quantity Listed</th>
                            <th className="p-3">Price Per Share</th>
                            <th className="p-3">Time</th>
                            <th className="p-3"></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white border-1 border-gray-700 divide-y">
                            {Object.keys(rows).map(key => (
                            <tr key={key} className="m-4 border-b border-gray-200 sm:shadow">
                            <td className="p-3" data-label="From">{rows[key][0].owner.walletAddress || "Anonymous"}</td>
                            <td className="p-3 text-center" data-label="Quantity">
                            <NumberFormat
                                value={rows[key].length}
                                displayType={'text'}
                                thousandSeparator={true}
                            /></td>
                            <td className="p-3 text-center" data-label="Price">
                            <NumberFormat
                                value={rows[key][0].listedPrice}
                                displayType={'text'}
                                thousandSeparator={true}
                            />
                            <div className="h-4 inline-flex px-1">
                            <svg width="12" height="12" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z" fill="#4F46E5"/>
                            </svg>
                            </div>
                            </td>
                            <td className="p-3 text-center" data-label="Time">
                                <TimeAgo date={randomDate(new Date(2021, 0, 1), new Date())} locale="en-US"/>
                            </td>
                            <td className="p-3 text-center">
                                <Confirmation purchase={rows[key]} setNotify={setNotify}>
                                    Buy
                                </Confirmation>
                            </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
        :
        <div className="content-center flex flex-wrap justify-center py-48 px-72">
            <LoadingWave primaryColor="#5C6BF6" secondaryColor="#ABABAB"/>
        </div>
        }
    </>
    )
}
