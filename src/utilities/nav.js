import React from "react"
import { Link, useLocation, useHistory } from "react-router-dom"
import { Modal } from "../modals/modal"
import { ApiBalanceService } from '../api/services/balance.service'
import { ApiAVAXService } from '../api/services/crypto.services'
import { useInterval } from "../utilities/use-interval-hook"

export function Nav(props) {
    const [menuOpen, setMenuOpen] = React.useState(false)
    let location = useLocation()
    let route = location.pathname.split("/")[1]
    let history = useHistory();
    let [balance, setBalance] = React.useState()
    let [avaxPrice, setAvaxPrice] = React.useState()
    let [currency, setCurrency] = React.useState(true)
    let [profileMenu, setProfileMenu] = React.useState(false)
    let [pollInterval, setPollInterval] = React.useState(0)

    function logout() {
        sessionStorage.clear()
        setMenuOpen(false)
        setProfileMenu(false)
        history.push("/")
        window.location.reload()
    }

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

        const getCurrentAvaxPrice = async () => {
            try {
                let avaxService = new ApiAVAXService()
                    await avaxService.getAvaxAmount().then(
                        (res) => {
                            setAvaxPrice(Number(res.data.AVAX.USD))
                        }
                    )
            } catch{
                setAvaxPrice(null)
            }
        }

        fetchBalance()
        getCurrentAvaxPrice()
    }, [pollInterval])

    useInterval(() => {
        setPollInterval(pollInterval + 1)
    }, 5000)

    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto lg:px-8">
                <div className="flex justify-between lg:h-16">
                    <div className="flex space-x-12">
                        <div className="flex-shrink-0 flex items-center px-4">
                            <Link to="/">
                            <svg width="120" height="99" viewBox="0 0 274 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 77.8099V68.2872L41.5269 84.3636V95L4 77.8099Z" fill="#4F46E5"/><path d="M41.5269 69.9669V79.5289L4 63.5207V53.8512L41.5269 69.9669Z" fill="#4F46E5"/><path d="M4 39.3471V49.124L41.5269 65.1322V55.2479L4 39.3471Z" fill="#4F46E5"/><path d="M41.5269 40.5289V50.4132L4 34.4453V24.6281L41.5269 40.5289Z" fill="#4F46E5"/><path d="M46.1505 50.4132V40.5289L84 24.6281V34.405L46.1505 50.4132Z" fill="#4F46E5"/><path d="M46.1505 65.1322V55.2479L84 39.2397V49.124L46.1505 65.1322Z" fill="#4F46E5"/><path d="M46.1505 79.5289V69.9669L84 53.8512V63.5207L46.1505 79.5289Z" fill="#4F46E5"/><path d="M84 77.8099V68.2872L71.3118 73.7273L71.4624 83.5041L84 77.8099Z" fill="#4F46E5"/><path d="M46.1505 84.3636V95L58.8065 89.2521V78.9917L46.1505 84.3636Z" fill="#4F46E5"/><path d="M44.2151 34.9421L6.58065 19.1488L44.2151 4L81.7419 19.1488L44.2151 34.9421Z" fill="#4F46E5"/><path d="M97 36.1667H109.799C111.253 36.1667 112.694 36.3194 114.121 36.625C115.575 36.9028 116.862 37.4167 117.981 38.1667C119.128 38.8889 120.051 39.875 120.751 41.125C121.45 42.3472 121.8 43.8889 121.8 45.75C121.8 47.5556 121.352 49.1528 120.457 50.5417C119.562 51.9028 118.275 52.9583 116.596 53.7083L124.15 65.6667H112.652L106.945 55.125H106.651V65.6667H97V36.1667ZM106.567 48.625H108.54C108.875 48.625 109.239 48.5972 109.631 48.5417C110.05 48.4861 110.428 48.375 110.764 48.2083C111.127 48.0139 111.421 47.7639 111.645 47.4583C111.897 47.125 112.023 46.6944 112.023 46.1667C112.023 45.6389 111.925 45.2222 111.729 44.9167C111.533 44.6111 111.281 44.3889 110.973 44.25C110.666 44.0833 110.33 43.9861 109.966 43.9583C109.603 43.9028 109.267 43.875 108.959 43.875H106.567V48.625Z" fill="#111827"/><path d="M140.605 51.7917C140.605 51.0139 140.311 50.375 139.724 49.875C139.164 49.375 138.395 49.125 137.416 49.125C136.353 49.125 135.528 49.4167 134.94 50C134.353 50.5833 134.017 51.1806 133.933 51.7917H140.605ZM148.956 54.9167C148.956 55.2778 148.942 55.6528 148.914 56.0417C148.914 56.4028 148.9 56.7083 148.872 56.9583H134.017C134.045 57.3472 134.171 57.6944 134.395 58C134.646 58.3056 134.94 58.5694 135.276 58.7917C135.64 59.0139 136.031 59.1806 136.451 59.2917C136.898 59.4028 137.346 59.4583 137.794 59.4583C138.689 59.4583 139.43 59.3056 140.018 59C140.633 58.6667 141.095 58.3056 141.402 57.9167L148.284 61.375C147.305 62.9583 145.878 64.2083 144.004 65.125C142.158 66.0417 140.004 66.5 137.542 66.5C135.947 66.5 134.395 66.25 132.884 65.75C131.373 65.25 130.031 64.5139 128.856 63.5417C127.709 62.5417 126.786 61.3056 126.086 59.8333C125.387 58.3611 125.037 56.6528 125.037 54.7083C125.037 52.9028 125.359 51.2778 126.002 49.8333C126.646 48.3611 127.513 47.125 128.604 46.125C129.723 45.0972 131.024 44.3056 132.506 43.75C134.017 43.1944 135.626 42.9167 137.332 42.9167C139.067 42.9167 140.647 43.2222 142.074 43.8333C143.501 44.4167 144.717 45.25 145.725 46.3333C146.76 47.3889 147.557 48.6528 148.116 50.125C148.676 51.5972 148.956 53.1944 148.956 54.9167Z" fill="#111827"/><path d="M163.895 56.5833C162.468 56.5833 161.322 56.7361 160.454 57.0417C159.587 57.3472 159.153 57.9167 159.153 58.75C159.153 59.0556 159.223 59.3194 159.363 59.5417C159.503 59.7361 159.685 59.9028 159.909 60.0417C160.133 60.1806 160.37 60.2917 160.622 60.375C160.902 60.4306 161.154 60.4583 161.377 60.4583C162.301 60.4583 163.042 60.1667 163.601 59.5833C164.161 59 164.441 58.25 164.441 57.3333V56.5833H163.895ZM163.811 51.75C163.811 51.0833 163.574 50.5972 163.098 50.2917C162.65 49.9583 162.049 49.7917 161.294 49.7917C160.398 49.7917 159.545 49.9861 158.734 50.375C157.951 50.7361 157.251 51.1667 156.636 51.6667L151.81 46.9167C153.153 45.6389 154.747 44.6528 156.594 43.9583C158.44 43.2639 160.342 42.9167 162.301 42.9167C164.399 42.9167 166.133 43.2083 167.504 43.7917C168.875 44.375 169.952 45.1806 170.735 46.2083C171.546 47.2361 172.106 48.4306 172.414 49.7917C172.749 51.1528 172.917 52.5972 172.917 54.125V65.6667H164.147V63.9167H164.063C163.504 64.75 162.706 65.3472 161.671 65.7083C160.636 66.0694 159.629 66.25 158.65 66.25C157.783 66.25 156.888 66.125 155.964 65.875C155.069 65.625 154.244 65.2222 153.489 64.6667C152.761 64.1111 152.16 63.3889 151.684 62.5C151.209 61.6111 150.971 60.5139 150.971 59.2083C150.971 57.6806 151.362 56.4444 152.146 55.5C152.957 54.5278 153.978 53.7778 155.209 53.25C156.44 52.6944 157.811 52.3194 159.321 52.125C160.86 51.9306 162.357 51.8333 163.811 51.8333V51.75Z" fill="#111827"/><path d="M176.896 34.1667H186.799V65.6667H176.896V34.1667Z" fill="#111827"/><path d="M191.281 43.75H200.974V65.6667H191.281V43.75ZM191.113 37.4167C191.113 36.75 191.239 36.125 191.49 35.5417C191.77 34.9306 192.134 34.4028 192.581 33.9583C193.057 33.5139 193.602 33.1667 194.218 32.9167C194.833 32.6389 195.491 32.5 196.19 32.5C196.862 32.5 197.491 32.6389 198.078 32.9167C198.666 33.1667 199.183 33.5139 199.631 33.9583C200.107 34.4028 200.47 34.9306 200.722 35.5417C201.002 36.125 201.142 36.75 201.142 37.4167C201.142 38.1111 201.002 38.7639 200.722 39.375C200.47 39.9583 200.107 40.4722 199.631 40.9167C199.183 41.3333 198.666 41.6667 198.078 41.9167C197.491 42.1667 196.862 42.2917 196.19 42.2917C195.491 42.2917 194.833 42.1667 194.218 41.9167C193.602 41.6667 193.057 41.3333 192.581 40.9167C192.134 40.4722 191.77 39.9583 191.49 39.375C191.239 38.7639 191.113 38.1111 191.113 37.4167Z" fill="#111827"/><path d="M228.831 65.6667H219.39V63.25H219.306C218.746 64.0556 217.907 64.7639 216.788 65.375C215.697 65.9583 214.438 66.25 213.012 66.25C211.445 66.25 210.158 65.9861 209.151 65.4583C208.144 64.9028 207.333 64.1944 206.717 63.3333C206.13 62.4444 205.71 61.4583 205.458 60.375C205.234 59.2639 205.123 58.1667 205.123 57.0833V43.75H214.858V55.3333C214.858 56.4444 215.026 57.2222 215.361 57.6667C215.725 58.1111 216.257 58.3333 216.956 58.3333C217.599 58.3333 218.117 58.0833 218.509 57.5833C218.928 57.0556 219.138 56.3056 219.138 55.3333V43.75H228.831V65.6667Z" fill="#111827"/><path d="M246.795 65.6667V54.1667C246.795 53.0556 246.655 52.25 246.375 51.75C246.095 51.25 245.634 51 244.99 51C244.515 51 244.053 51.2222 243.606 51.6667C243.186 52.1111 242.976 52.9028 242.976 54.0417V65.6667H233.283V43.75H242.724V46.1667H242.808C243.088 45.8056 243.424 45.4583 243.815 45.125C244.235 44.7639 244.697 44.4444 245.2 44.1667C245.732 43.8611 246.319 43.625 246.963 43.4583C247.606 43.2639 248.305 43.1667 249.061 43.1667C250.515 43.1667 251.774 43.4306 252.837 43.9583C253.9 44.4583 254.74 45.25 255.355 46.3333C256.082 45.4444 256.978 44.6944 258.041 44.0833C259.104 43.4722 260.447 43.1667 262.069 43.1667C263.636 43.1667 264.923 43.4722 265.93 44.0833C266.965 44.6944 267.776 45.4583 268.363 46.375C268.979 47.2917 269.399 48.2917 269.622 49.375C269.874 50.4306 270 51.4167 270 52.3333V65.6667H260.307V54C260.307 52.8056 260.153 52.0139 259.845 51.625C259.565 51.2083 259.118 51 258.502 51C257.943 51 257.467 51.2639 257.076 51.7917C256.684 52.2917 256.488 53.0417 256.488 54.0417V65.6667H246.795Z" fill="#111827"/>
                            </svg>
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link to="/marketplace" className={`${route === "marketplace" ? "border-indigo-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium text-decoration-none`}>
                                Marketplace
                            </Link>
                            <Link to="/howitworks" className={`${route === "howitworks" ? "border-indigo-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium text-decoration-none`}>
                                How It Works
                            </Link>
                            <a href="https://docs.realium.io" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium text-decoration-none">
                                Docs
                            </a>
                        </div>
                    </div>
                    <div className="mr-3 flex items-center sm:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        {sessionStorage.getItem('user') === null ?
                        <div className="flex space-x-6">
                            <Link className="block px-3 py-2 border-transparent text-base font-medium rounded-md text-indigo-700 shadow-sm hover:text-gray-900 hover:bg-gray-50 text-decoration-none" to="/login">
                                Sign In
                            </Link>
                            <div className="block">
                                <Modal page="create" buttonText="Sign Up" />
                            </div>
                        </div>
                        :
                            <>
                                <div className="px-8 mb-1 relative">
                                    <div className="text-center">
                                        <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                                            onClick={() => setProfileMenu(!profileMenu)}>
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-9 w-9 rounded-full" src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=ee8bbf5fb8d6e43aaaa238feae2fe90d" alt="" />
                                        </button>
                                    </div>
                                    <div className={`${!profileMenu ? "hidden" : null } z-50 origin-top-right absolute right-8 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`} style={{'zIndex': '1000'}}>
                                        <h1 to="/" onClick={ (event) => event.preventDefault() } className="block px-3 py-2 rounded-md text-sm font-medium font-bold text-indigo-800 text-decoration-none">
                                            {sessionStorage.getItem("user")}
                                        </h1>
                                        <Link to="/dashboard" onClick={() => setProfileMenu(!profileMenu)} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-100 hover:bg-indigo-500 text-decoration-none">
                                            Dashboard
                                        </Link>
                                        <Link onClick={logout} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-100 hover:bg-indigo-500 text-decoration-none" to="/">
                                            Sign Out
                                        </Link>
                                    </div>
                                </div>
                                {currency===false &&
                                    <div className="flex-shrink-0 inline-flex text-indigo-900 bg-indigo-100 border-2 border-indigo-500 hover:bg-indigo-200 hover:shadow-lg font-bold uppercase text-sm p-2 rounded focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setCurrency(true)}>
                                            <div className="pr-2">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 8C10.343 8 9 8.895 9 10C9 11.105 10.343 12 12 12C13.657 12 15 12.895 15 14C15 15.105 13.657 16 12 16M12 8V16M12 8C13.11 8 14.08 8.402 14.599 9L12 8ZM12 8V7M12 16V17M12 16C10.89 16 9.92 15.598 9.401 15L12 16ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#312E81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            </div>
                                            {(balance*avaxPrice).toFixed(2)} USD
                                    </div>
                                }
                                {currency===true &&
                                    <div className="flex-shrink-0 inline-flex text-indigo-900 bg-indigo-100 border-2 border-indigo-500 hover:bg-indigo-200 hover:shadow-lg font-bold uppercase text-sm p-2 rounded focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setCurrency(false)}>
                                            <svg width="20" height="20" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z" fill="#4F46E5"/>
                                            </svg>
                                    <span className="pl-1.5">{balance} AVAX</span>
                                    </div>
                                }
                            </>
                        }
                    </div>
                </div>
                </div>

            <div className={`${menuOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
                <div className="pt-2 pb-3 space-y-1">
                    <Link to="/marketplace" onClick={() => setMenuOpen(!menuOpen)} className={`${route === "marketplace" ? "bg-indigo-50 border-indigo-500 text-indigo-700" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"} block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-decoration-none`}>
                        Marketplace
                    </Link>
                    <Link to="/howitworks" onClick={() => setMenuOpen(!menuOpen)} className={`${route === "howitworks" ? "bg-indigo-50 border-indigo-500 text-indigo-700" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"} block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-decoration-none`}>
                        How It Works
                    </Link>
                    <a href="https://docs.realium.io" onClick={() => setMenuOpen(!menuOpen)} className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-decoration-none">
                        Docs
                    </a>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="space-y-1">
                    {sessionStorage.getItem('user') === null ?
                        <Link className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-decoration-none" to="/login">
                            Sign In
                        </Link>
                        :
                        <>
                            {currency===false &&
                                <div className="border-transparent inline-flex text-indigo-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-decoration-none"
                                    type="button"
                                    onClick={() => setCurrency(true)}>
                                        <div className="pr-2">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 8C10.343 8 9 8.895 9 10C9 11.105 10.343 12 12 12C13.657 12 15 12.895 15 14C15 15.105 13.657 16 12 16M12 8V16M12 8C13.11 8 14.08 8.402 14.599 9L12 8ZM12 8V7M12 16V17M12 16C10.89 16 9.92 15.598 9.401 15L12 16ZM21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#312E81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        </div>
                                        {(balance*avaxPrice).toFixed(2)} USD
                                </div>
                            }
                            {currency===true &&
                                <div className="border-transparent inline-flex text-indigo-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-decoration-none"
                                    type="button"
                                    onClick={() => setCurrency(false)}>
                                        <svg width="20" height="20" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M153 76.5C153 118.75 118.75 153 76.5 153C34.2502 153 0 118.75 0 76.5C0 34.2502 34.2502 0 76.5 0C118.75 0 153 34.2502 153 76.5ZM72.2494 21.5512L22.6284 108.776C20.8649 111.876 23.1037 115.725 26.6701 115.725H57.7531C59.4209 115.725 60.961 114.832 61.7892 113.384L96.0274 53.5368C96.8467 52.1048 96.8458 50.3458 96.025 48.9145L80.325 21.5372C78.5347 18.4154 74.0289 18.4231 72.2494 21.5512ZM90.0853 115.95H126.325C130.017 115.95 132.327 111.956 130.486 108.756L112.443 77.3996C110.601 74.1984 105.985 74.1898 104.131 77.3843L85.9337 108.741C84.0767 111.941 86.3855 115.95 90.0853 115.95Z" fill="#4F46E5"/>
                                        </svg>
                                    <span className="pl-1">{balance} AVAX</span>
                                </div>
                            }
                            <h1 to="/" onClick={ (event) => event.preventDefault() } className="block px-3 py-2 rounded-md text-sm font-medium font-bold text-indigo-800 text-decoration-none">
                                {sessionStorage.getItem("user")}
                            </h1>
                            <Link to="/dashboard" onClick={() => setMenuOpen(!menuOpen)} className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-decoration-none">
                                Dashboard
                            </Link>
                            <Link onClick={logout} className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-decoration-none" to="/">
                                Sign Out
                            </Link>
                        </>
                    }
                </div>
                </div>
            </div>
        </nav>
    )
}
