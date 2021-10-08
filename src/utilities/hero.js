import React from "react"
import { Link } from "react-router-dom"
import logo from "../resources/images/logo.svg"

export function Hero(props) {
    const [hamburgerMenuShow, setHamburgerMenuShow] = React.useState(false)

    const subheading = (page) => {
        switch(page) {
            case 'marketplace':
                return 'Explore properties listed on the Realium marketplace and compare evaluations to make the best-tailored investments for you. Then exchange your AVAX for unique non-fungible property tokens.'
            case 'howitworks':
                return 'Blockchain is changing how the world does business and how real estate is being transacted. Realium leverages these benefits to make investing in real estate even more beneficial for you.';
            case 'dashboard':
                return 'Welcome to your personal Realium dashboard. Take a look at your recent investment activity, asset performance, or list your shares for exchange.';
            default:
                return 'Realium allows you to invest directly into residential real estate. View the properties for sale in the marketplace to get started with your first real estate investment.';
        }
    }

    const title = (page) => {
        switch(page) {
            case 'howitworks':
                return <>
                <span className="block xl:inline">What Is Novel About The </span>
                <span className="block text-indigo-600 xl:inline">Realium</span>
                <span className="block xl:inline"> Platform?</span>
            </>
            default:
                return <>
                    <span>A </span>
                    <span className="text-indigo-600">Stock Market</span>
                    <span className="block"> For Residential Housing</span>
                </>
        }
    }

    return (
        /* Hero section */
        <>
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                    <div className="relative pt-10 px-2 sm:px-6 lg:px-8"></div>

                    {/* <!--
                        Mobile menu, show/hide based on menu open state.

                        Entering: "duration-150 ease-out"
                        From: "opacity-0 scale-95"
                        To: "opacity-100 scale-100"
                        Leaving: "duration-100 ease-in"
                        From: "opacity-100 scale-100"
                        To: "opacity-0 scale-95"
                    --> */}
                    <div className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden ${hamburgerMenuShow ? 'visible' : 'invisible'}`}>
                        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                            <div>
                            <img className="h-8 w-auto" src={logo} alt="realium_logo"/>
                            </div>
                            <div className="-mr-2">
                            <button
                                type="button"
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                onClick={() => setHamburgerMenuShow(!hamburgerMenuShow)}
                            >
                                <span className="sr-only">Close main menu</span>
                                {/* <!-- Heroicon name: outline/x --> */}
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            {title(props.page)}
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            {subheading(props.page)}
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md">
                            <Link to="/login" className="w-full flex items-center justify-center px-8 py-3 shadow border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                Get Started
                            </Link>
                            </div>
                            <br/>
                            <div className="sm:mt-0 sm:ml-3">
                            {props.page === 'howitworks' ?
                                <a href="https://docs.realium.io/" className="w-full flex items-center justify-center px-8 py-3 border-transparent text-base font-medium rounded-md text-indigo-700 shadow hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                                    Learn More
                                </a>
                            : <Link to="/marketplace" className="w-full flex items-center justify-center px-8 py-3 border-transparent text-base font-medium rounded-md text-indigo-700 shadow hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                                View Marketplace
                            </Link>
                            }
                            </div>
                        </div>
                        </div>
                    </main>
                    </div>
                </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={props.img} alt=""/>
            </div>
            </div>
        </>
    )
}
