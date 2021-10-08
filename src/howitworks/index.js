import React from "react"
import { Hero } from "../utilities/hero"
import { CollapsableSection, HOW_IT_WORKS_FAQS } from "../utilities/collapsable-section"
import hero_img from "../resources/images/hero-blue.jpg"
import res from "../resources/images/residential-capital-stack.svg"
import asset_table from "../resources/images/asset_table.svg"
import brand_icon from "../resources/images/brand-icon.svg"
import brand_icon2 from "../resources/images/brand-icon-2.svg"
import brand_icon3 from "../resources/images/brand-icon-3.svg"
import listing_example from "../resources/images/transacting-a-property.svg"


export function HowItWorks() {
    return (
        <>
            <Hero img={hero_img} page="howitworks" />
            <div className="bg-gray-100 lg:px-8 px-4 py-10 sm:px-6">
                <div className="sm:flex sm:flex-col sm:align-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-center">Converting the asset</h2>
                    <p className="mt-3 text-xl text-gray-500 sm:text-center">
                        Realium uses blockchain technology to represent the real tangible asset as a security.
                        <br/>
                        This allows for the property to be traded the same way stocks and bonds are traded on exchanges.
                    </p>
                    <div className="my-6 mx-auto">
                        <img src={asset_table} alt="asset table" className="flex-1"/>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
                <div className="lg:flex">
                    <div className="flex-1 py-3">
                        <img src={res} alt="Residential" className="mt-4"/>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-3xl font-extrabold text-gray-900">Expanding the capital stack</h2>
                        <p className="mt-3 text-xl text-gray-500">
                            Property owners are provided with a way to unlock more capital from their asset through tokenization.
                            Since only a portion of the asset is tokenized, Realium users are part-owners that do not carry any voting rights.
                        </p>
                        <div className="mt-3 space-y-4 sm:mt-16 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 grid grid-cols-3">
                            <div className="flex-1 mt-0">
                                <div className="text-3xl leading-9 font-extrabold text-indigo-500">
                                    20%
                                </div>
                                <div className="text-base leading-6 font-medium text-gray-500 mb-12">
                                    Increase in
                                    <br/>
                                    asset liquidty
                                </div>
                            </div>
                            <div className="flex-1 mt-0">
                                <div className="text-3xl leading-9 font-extrabold text-indigo-500">
                                    12
                                </div>
                                <div className="text-base leading-6 font-medium text-gray-500 mb-12">
                                    Properties
                                    <br/>
                                    tokenized
                                </div>
                            </div>
                            <div className="flex-1 mt-0">
                                <div className="text-3xl leading-9 font-extrabold text-indigo-500">
                                    1
                                </div>
                                <div className="text-base leading-6 font-medium text-gray-500 mb-12">
                                Cap table
                                <br/>
                                line item
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 lg:px-8 px-4 py-10 sm:px-6">
                <div className="space-y-4 lg:px-36 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">
                    <div className="flex-1">
                        <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
                            Transacting a property
                        </h2>
                        <div className="flex">
                            <img src={brand_icon} alt="brand icon"/>
                            <div className="mt-4 ml-7">
                                <div className="mt-3 text-xl">
                                    1. View property details
                                </div>
                                <div className="mt-1 text-xl text-gray-500">
                                    Each property listed on the platform will include details related to the individual property and to the investment.
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <img src={brand_icon2} alt="brand icon"/>
                            <div className="mt-4 ml-7">
                                <div className="mt-3 text-xl">
                                    2. Select the desired shares
                                </div>
                                <div className="mt-1 text-xl text-gray-500">
                                    Users will have the option to buy shares of a property, list shares that they currently have tied to their account,
                                    or submit an offer to purchase shares at a specific price.
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <img src={brand_icon3} alt="brand icon"/>
                            <div className="mt-4 ml-7">
                                <div className="mt-3 text-xl">
                                    3. Confirm the transaction
                                </div>
                                <div className="mt-1 text-xl text-gray-500">
                                    Once a transaction is confirmed, it is added to the blockchain. The new property will now appear in the user’s dashboard
                                    where they can list it for sale again.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <img src={listing_example} alt="listing example" />
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Frequently asked questions
                        </h2>
                        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                            {HOW_IT_WORKS_FAQS.map(faq => (
                                <CollapsableSection
                                    title={faq.title}
                                    text={faq.text}
                                    key={faq.title}
                                />
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}
