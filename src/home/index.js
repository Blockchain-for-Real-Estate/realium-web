import React from "react"
import { Hero } from "../utilities/hero"
import { CollapsableSection, HOME_FAQS } from "../utilities/collapsable-section"
import { Residential } from "../marketplace/residential"
import hero_img from "../resources/images/hero-green.jpg"
import home_feature from "../resources/images/home_feature.svg"
import home_feature_2 from "../resources/images/home_feature_2.svg"

export function Home(props) {
    return (
        <>
            {/* Hero section */}
            <Hero img={hero_img} />
            {/* Stats component */}
            <div className="bg-gray-50 pt-12 sm:pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            The best of real estate and stocks
                        </h2>
                        <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                            Realium converts physical real estate assets to trade like securities on an exchange.
                        </p>
                    </div>
                </div>
                <div className="mt-10 pb-12 bg-white sm:pb-16">
                    <div className="relative">
                        <div className="absolute inset-0 h-1/2 bg-gray-50"/>
                        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-4xl mx-auto">
                                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                                    <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                            Properties
                                        </dt>
                                        <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                                            12
                                        </dd>
                                    </div>
                                    <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                            Daily trade volume
                                        </dt>
                                        <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                                            1K
                                        </dd>
                                    </div>
                                    <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                            Trading window
                                        </dt>
                                        <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                                            24/7
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Residential preview setNotify={props.setNotify} />
            {/* Better way to invest section */}
            <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
                <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                    <svg className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
                        <defs>
                            <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
                    </svg>
                    <div className="relative">
                        <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            A better way to invest
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
                            Realium takes away the headaches of traditional real estate investing, while still allowing users to take advantage of the real estate asset className.
                        </p>
                    </div>
                    <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div className="relative">
                            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                                Create a diversified real estate portfolio
                            </h3>
                            <p className="mt-3 text-lg text-gray-500">
                                Realium allows you to create a truly diversified your investment portfolio
                            </p>
                            <dl className="mt-10 space-y-10">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <dt className="text-lg leading-6 font-medium text-gray-900">
                                            Invest in real estate nationwide
                                        </dt>
                                        <dd className="mt-2 text-base text-gray-500">
                                            Properties range in size, price, and location. Choose from the list of properties available on the Realium platform.
                                        </dd>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <dt className="text-lg leading-6 font-medium text-gray-900">
                                            Choose your property type
                                        </dt>
                                        <dd className="mt-2 text-base text-gray-500">
                                            Choose from residential and commercial properties to add to your portfolio. Properties are added on a rolling basis.
                                        </dd>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <dt className="text-lg leading-6 font-medium text-gray-900">
                                            Sell your shares at any time
                                        </dt>
                                        <dd className="mt-2 text-base text-gray-500">
                                            With no lock up or holding periods, Realium users are able to list their shares for sale at any time.
                                        </dd>
                                    </div>
                                </div>
                            </dl>
                        </div>
                        <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                            <svg className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
                                <defs>
                                    <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
                            </svg>
                            <img className="relative mx-auto" width="500" src={home_feature} alt=""/>
                        </div>
                    </div>
                    <svg className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
                        <defs>
                            <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                    </svg>
                    <div className="relative mt-12 sm:mt-16 lg:mt-24">
                        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                            <div className="lg:col-start-2">
                                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                                    A verifiable and proven history
                                </h3>
                                <p className="mt-3 text-lg text-gray-500">
                                    Realium traces all transactions for each property on the blockchain. This allows for Realium to introduce speed, security, and decentralization to the real estate market.
                                </p>
                                <dl className="mt-10 space-y-10">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <dt className="text-lg leading-6 font-medium text-gray-900">
                                                Blockchain-proven ownership
                                            </dt>
                                            <dd className="mt-2 text-base text-gray-500">
                                                Secure and immutable records are powered by Avalanche's next generation blockchain technology
                                            </dd>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <dt className="text-lg leading-6 font-medium text-gray-900">
                                                Non-Fungible Tokens pegged to real assets
                                            </dt>
                                            <dd className="mt-2 text-base text-gray-500">
                                                Properties on Realium are pegged to real assets creating an underlying value for each share of a property.
                                            </dd>
                                        </div>
                                    </div>
                                </dl>
                            </div>
                            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                                <svg className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true">
                                    <defs>
                                        <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
                                </svg>
                                <img className="relative mx-auto" width="550" src={home_feature_2} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* LAUNCH */}
            <div className="bg-white py-12 sm:py-24">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between bg-gray-50 rounded-lg shadow-sm">
                <span className="px-8">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl block">Want to know when we launch?</h2>
                    <h4 className="block text-indigo-600">Sign up for our product updates to stay in the loop.</h4>
                </span>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 sm:px-8">
                <div className="inline-flex rounded-md">
                    <input type="email" placeholder="Enter your email" className="inline-flex items-center justify-center sm:w-80 py-3 border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"/>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow-sm">
                    <button className="inline-flex items-center justify-center text-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600">
                    Notify Me
                    </button>
                </div>
                </div>
            </div>
            </div>
            {/* FAQs */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Frequently asked questions
                        </h2>
                        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                            {HOME_FAQS.map(faq => (
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
