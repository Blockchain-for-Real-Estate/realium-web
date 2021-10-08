import React from "react"
import { Listing } from "./listing"

import com1 from "../resources/images/commercial-1.jpg"
import com2 from "../resources/images/commercial-2.jpg"
import com3 from "../resources/images/commercial-3.jpg"
import com4 from "../resources/images/commercial-4.jpg"
import com5 from "../resources/images/commercial-5.jpg"
import com6 from "../resources/images/commercial-6.jpg"


// TODO: need to handle different number of listings loaded in
export function Commercial(props) {
    //load in commercial stuff from server here, until then use dummy data below

    //temporary preview array, once we get data loaded in from actual db we can query for just three properties
    let previewArr = []
    if (props.preview) {
        Object.keys(commercialData).forEach((key, idx) => {
            if (idx < 3) {
                previewArr.push(key)
            }
        })
    }

    return (
        <>
            {/* Explore Marketplace */}
            <div className="opacity-70 relative bg-gray-50 pb-20 lg:pt-16 lg:pb-28 lg:px-8">
                <div className="absolute inset-0">
                    <div className="bg-white h-1/3 sm:h-2/3"/>
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                            Commercial Properties
                        </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                            View the properties that are currently available on the Realium marketplace and choose the best investment for you.
                        </p>
                    </div>
                    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        {props.preview ?
                            previewArr.map((key, idx) =>
                                <div key={key} className="l-grid__item">
                                    <Listing listing={commercialData[key]} index={idx}/>
                                </div>
                            )
                        :
                            Object.keys(commercialData).map((key, idx) => (
                                <div key={key} className="l-grid__item">
                                    <Listing listing={commercialData[key]} index={idx}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export const commercialData = {
    7: {
        id: 7,
        streetAddress: '333 Tech Ave',
        city: 'Provo',
        state: 'UT',
        zipCode: 84601,
        purchasedPrice: 3100000.00,
        funded: 465000.00,
        listingType: 'Commercial',
        propertyType: 'office space',
        image: com1,
        forcastedIncome: 8000,
        minInvestment: 1000,
        maxInvestment: 100000,
        share: 20,
        yearBuilt: 1998,
        acerage: 0.42,
        sharePrice: 33
    },
    8: {
        id: 8,
        streetAddress: '4200 Silk Road',
        city: 'Springville',
        state: 'UT',
        zipCode: 84663,
        purchasedPrice: 1100000.00,
        funded: 825000.00,
        listingType: 'Commercial',
        propertyType: 'office space',
        image: com2,
        forcastedIncome: 8000,
        minInvestment: 1000,
        maxInvestment: 100000,
        share: 20,
        yearBuilt: 1998,
        acerage: 0.42,
        sharePrice: 16
    },
    9: {
        id: 9,
        streetAddress: '100 Silicon Slopes',
        city: 'Lehi',
        state: 'UT',
        zipCode: 84043,
        purchasedPrice: 10100000.00,
        funded: 0.00,
        listingType: 'Commercial',
        propertyType: 'office space',
        image: com3,
        forcastedIncome: 8000,
        minInvestment: 1000,
        maxInvestment: 100000,
        share: 20,
        yearBuilt: 1998,
        acerage: 0.42,
        sharePrice: 77
    },
    10: {
        id: 10,
        streetAddress: '200 Silicon Slopes',
        city: 'Lehi',
        state: 'UT',
        zipCode: 84043,
        purchasedPrice: 90000000.00,
        funded: 0.00,
        listingType: 'Commercial',
        propertyType: 'office space',
        image: com4,
        forcastedIncome: 8000,
        minInvestment: 1000,
        maxInvestment: 100000,
        share: 20,
        yearBuilt: 1998,
        acerage: 0.42,
        sharePrice: 109
    },
    11: {
        id: 11,
        streetAddress: '111 Temple Way',
        city: 'Salt Lake City',
        state: 'UT',
        zipCode: 84101,
        purchasedPrice: 109100000.00,
        funded: 0.00,
        listingType: 'Commercial',
        propertyType: 'office space',
        image: com5,
        forcastedIncome: 8000,
        minInvestment: 1000,
        maxInvestment: 100000,
        share: 20,
        yearBuilt: 1998,
        acerage: 0.42,
        sharePrice: 31
    },
    12: {
        id: 12,
        streetAddress: '120 Main Street',
        city: 'Salt Lake City',
        state: 'UT',
        zipCode: 84101,
        purchasedPrice: 60300000.00,
        funded: 0.00,
        listingType: 'Commercial',
        propertyType: 'office space',
        image: com6,
        forcastedIncome: 8000,
        minInvestment: 1000,
        maxInvestment: 100000,
        share: 20,
        yearBuilt: 1998,
        acerage: 0.42,
        sharePrice: 89
    }
}
