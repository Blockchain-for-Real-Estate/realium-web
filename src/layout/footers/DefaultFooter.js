import { MailForm } from "src/components/general/MailList"
import Link from "next/link"
import Image from "next/image"
import { ChevronDownIcon } from "@heroicons/react/solid"
//testing deployment
const navigation = {
	quick_links: [
		{ name: "Home", href: "/" },
		{ name: "How it works", href: "/how-it-works" },
		{ name: "FAQ", href: "/faq" },
	],
	company: [
		{ name: "Roadmap", href: "#" },
		{ name: "Contact", href: "/contact" },
	],
	legal: [
		{ name: "Disclaimer", href: "#" },
		{ name: "Terms", href: "#" },
	],
	social: [
		{
			name: "Medium",
			href: "https://medium.com/realium",
			icon: () => (
				<svg
					width="41"
					height="40"
					viewBox="0 0 41 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M29.3647 13.8802L30.9659 12.3378V12H25.4205L21.4684 21.909L16.9729 12H11.1584V12.3378L13.0287 14.6056C13.2115 14.7732 13.3055 15.0193 13.282 15.2655V24.1768C13.3395 24.4989 13.2376 24.8262 13.013 25.0592L10.905 27.6334V27.966H16.8763V27.6282L14.7709 25.0619C14.6581 24.9471 14.5733 24.8077 14.523 24.6546C14.4727 24.5016 14.4583 24.3389 14.481 24.1794V16.47L19.7235 27.9712H20.3321L24.8406 16.47V25.6327C24.8406 25.8736 24.8406 25.9234 24.6838 26.0831L23.0617 27.6622V28H30.9294V27.6622L29.3647 26.1198C29.2289 26.0151 29.1584 25.8396 29.1871 25.6694V14.3306C29.1736 14.2465 29.1829 14.1602 29.2142 14.0809C29.2455 14.0017 29.2975 13.9323 29.3647 13.8802V13.8802Z"
						fill="#9CA3AF"
					/>
					<rect
						x="1.40503"
						y="0.5"
						width="39.0609"
						height="39"
						rx="5.5"
						stroke="#D1D5DB"
					/>
				</svg>
			),
		},
		{
			name: "GitHub",
			href: "https://github.com/Blockchain-for-Real-Estate/",
			icon: () => (
				<svg
					width="41"
					height="40"
					viewBox="0 0 41 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clip-rule="evenodd"
						d="M20.9659 10C15.4429 10 10.9659 14.484 10.9659 20.017C10.9659 24.442 13.8309 28.197 17.8049 29.521C18.3049 29.613 18.4869 29.304 18.4869 29.038C18.4869 28.801 18.4789 28.17 18.4739 27.335C15.6919 27.94 15.1049 25.992 15.1049 25.992C14.6509 24.834 13.9949 24.526 13.9949 24.526C13.0869 23.906 14.0639 23.918 14.0639 23.918C15.0669 23.988 15.5949 24.95 15.5949 24.95C16.4869 26.48 17.9359 26.038 18.5049 25.782C18.5969 25.135 18.8549 24.694 19.1409 24.444C16.9209 24.191 14.5859 23.331 14.5859 19.493C14.5859 18.4 14.9759 17.505 15.6149 16.805C15.5119 16.552 15.1689 15.533 15.7129 14.155C15.7129 14.155 16.5529 13.885 18.4629 15.181C19.2787 14.9585 20.1204 14.8452 20.9659 14.844C21.8159 14.848 22.6709 14.959 23.4699 15.181C25.3789 13.885 26.2169 14.154 26.2169 14.154C26.7629 15.533 26.4189 16.552 26.3169 16.805C26.9569 17.505 27.3449 18.4 27.3449 19.493C27.3449 23.341 25.0059 24.188 22.7789 24.436C23.1379 24.745 23.4569 25.356 23.4569 26.291C23.4569 27.629 23.4449 28.71 23.4449 29.038C23.4449 29.306 23.6249 29.618 24.1329 29.52C26.1242 28.8521 27.8553 27.5753 29.0814 25.87C30.3076 24.1648 30.9668 22.1173 30.9659 20.017C30.9659 14.484 26.4879 10 20.9659 10Z"
						fill="#9CA3AF"
					/>
					<rect
						x="1.46594"
						y="0.5"
						width="39"
						height="39"
						rx="5.5"
						stroke="#D1D5DB"
					/>
				</svg>
			),
		},
		{
			name: "YouTube",
			href: "https://www.youtube.com/channel/UCCRdHFiG7Qw_TzCUO-hgf_g/videos",
			icon: (props) => (
				<svg
					width="41"
					height="40"
					viewBox="0 0 41 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M30.5818 15.1594C30.4654 14.7434 30.2436 14.3644 29.9378 14.0593C29.632 13.7542 29.2526 13.5332 28.8364 13.4177C27.2739 13 20.9925 13 20.9925 13C20.9925 13 14.7231 12.99 13.1443 13.4177C12.7287 13.5337 12.35 13.7549 12.0449 14.06C11.7399 14.3651 11.5186 14.7438 11.4026 15.1594C11.1059 16.759 10.9598 18.3828 10.9661 20.0097C10.9632 21.6288 11.1094 23.2446 11.4026 24.8369C11.519 25.2527 11.7403 25.6316 12.0453 25.9373C12.3503 26.2429 12.7287 26.465 13.1443 26.5823C14.7068 27 20.9925 27 20.9925 27C20.9925 27 27.2582 27 28.8364 26.5823C29.2526 26.4655 29.6318 26.2437 29.9375 25.938C30.2431 25.6323 30.465 25.2531 30.5818 24.8369C30.8692 23.2456 31.0095 21.6273 30.9995 20.0097C31.0095 18.3814 30.8724 16.7607 30.5818 15.1594V15.1594ZM18.986 23.0076V16.9987L24.2146 20.0097L18.986 23.0076Z"
						fill="#9CA3AF"
					/>
					<rect
						x="1.46594"
						y="0.5"
						width="39.0341"
						height="39"
						rx="5.5"
						stroke="#D1D5DB"
					/>
				</svg>
			),
		},
		{
			name: "Twitter",
			href: "https://twitter.com/RealiumTeam",
			icon: () => (
				<svg
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M16.29 28.2534C23.837 28.2534 27.965 22.0004 27.965 16.5784C27.965 16.4004 27.965 16.2234 27.953 16.0484C28.7562 15.4669 29.4493 14.747 30 13.9224C29.2511 14.2544 28.4566 14.4722 27.643 14.5684C28.4996 14.0555 29.1408 13.2487 29.447 12.2984C28.6417 12.7763 27.7607 13.1131 26.842 13.2944C26.2234 12.6362 25.405 12.2002 24.5136 12.0541C23.6222 11.908 22.7075 12.0598 21.9111 12.4861C21.1147 12.9123 20.4811 13.5893 20.1083 14.4121C19.7355 15.2348 19.6444 16.1576 19.849 17.0374C18.2176 16.9556 16.6216 16.5317 15.1646 15.7932C13.7077 15.0546 12.4223 14.0179 11.392 12.7504C10.8673 13.6536 10.7066 14.7228 10.9425 15.7404C11.1785 16.7579 11.7934 17.6473 12.662 18.2274C12.0093 18.2085 11.3706 18.0329 10.8 17.7154V17.7674C10.8004 18.7147 11.1284 19.6327 11.7284 20.3658C12.3284 21.0988 13.1635 21.6018 14.092 21.7894C13.4878 21.9541 12.8539 21.9781 12.239 21.8594C12.5012 22.6749 13.0117 23.388 13.6991 23.899C14.3866 24.41 15.2166 24.6934 16.073 24.7094C15.2221 25.378 14.2478 25.8722 13.2057 26.1639C12.1637 26.4556 11.0743 26.539 10 26.4094C11.8766 27.6137 14.0602 28.2525 16.29 28.2494"
						fill="#9CA3AF"
					/>
					<rect
						x="0.5"
						y="0.5"
						width="39"
						height="39"
						rx="5.5"
						stroke="#D1D5DB"
					/>
				</svg>
			),
		},
	],
}

export default function DefaultFooter() {
	return (
		<footer className="bg-white" aria-labelledby="footer-heading">
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
					<div className="grid grid-cols-2 gap-8 xl:col-span-4">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
									Quick Links
								</h3>
								<ul role="list" className="mt-4 space-y-4">
									{navigation.quick_links.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-base text-gray-500 hover:text-gray-900"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-12 md:mt-0">
								<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
									Company
								</h3>
								<ul role="list" className="mt-4 space-y-4">
									{navigation.company.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-base text-gray-500 hover:text-gray-900"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
									Legal
								</h3>
								<ul role="list" className="mt-4 space-y-4">
									{navigation.legal.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-base text-gray-500 hover:text-gray-900"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					<div className="mt-12 xl:mt-0">
						<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
							Currency
						</h3>
						<form className="mt-4 sm:max-w-xs">
							<fieldset className="mt-4 w-full">
								<label htmlFor="currency" className="sr-only">
									Currency
								</label>
								<div className="relative">
									<select
										id="currency"
										name="currency"
										className="appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										defaultValue="USD"
									>
										<option>USD</option>
										<option>AVAX</option>
									</select>
									<div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
										<ChevronDownIcon
											className="h-4 w-4 text-gray-400"
											aria-hidden="true"
										/>
									</div>
								</div>
							</fieldset>
						</form>
						<div className="mt-2">
							<Image
								src="/images/powered-by-avalanche.svg"
								alt="Realium"
								height={44}
								width={128}
							/>
						</div>
					</div>
				</div>
				<div className="border-t border-gray-200 py-8 lg:flex lg:items-center lg:justify-between xl:mt-0">
					<div>
						<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
							Subscribe to our waitlist
						</h3>
						<p className="mt-2 text-base text-gray-500">
							Learn when we are launching and stay up to date with
							our roadmap.
						</p>
					</div>
					<MailForm
						subscribe
						btnClasses="border border-indigo-500 text-gray-700 bg-white hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					/>
				</div>
				<div className="border-t border-gray-200 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0">
					<div className="text-sm leading-5 font-normal text-gray-400">
						Realium operates the www.realium.io website and is not a
						broker-dealer or investment advisor. Nothing on this
						website should be construed as an offer to sell,
						solicitation of an offer to buy or a recommendation in
						respect of a security. Any investment-related
						information presented below has been obtained from
						sources Realium believes to be trustworthy, but we make
						no claims or assurances as to its accuracy or
						completeness, and we accept no liability as a result.
						Based on your personal investing objectives, financial
						circumstances, and risk tolerance, you are solely
						responsible for determining whether any investment,
						investment plan, or associated transaction is
						appropriate for you. <br />
						<br />
						Past results are no guarantee of future outcomes.
						Returns in the past, predicted returns in the future,
						and probability forecasts may not reflect actual future
						performance. All real estate entails risk, and it is
						possible to lose all or part of your investment. Realium
						investors recognize and accept the following: 1) that
						investing in real estate, like investing in other
						fields, is risky and unpredictable; 2) that the real
						estate industry has its ups and downs; 3) that the real
						property you invest in may not generate a positive cash
						flow or perform as expected; and 4) that the value of
						any real property you invest in may decline at any time
						and the future property value is unpredictable.
						Prospective investors should carefully study the
						provided financial information of each property and
						consult with their tax, legal, and financial advisors
						before making an investment decision in any offering.
						Realium does not provide investment advice or make
						recommendations in connection with any of the offerings
						on the website.
					</div>
				</div>
				<div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
					<div className="flex space-x-6 md:order-2">
						{navigation.social.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-gray-400 hover:text-gray-500"
							>
								<span className="sr-only">{item.name}</span>
								<item.icon
									className="h-6 w-6"
									aria-hidden="true"
								/>
							</a>
						))}
					</div>
					<p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
						&copy; {new Date().getFullYear()} Realium, Inc. All
						rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export const FooterSection = ({ section }) => {
	return (
		<div>
			<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
				{section.header}
			</h3>
			<ul role="list" className="mt-4 space-y-4">
				{section.links.map((link) => (
					<FooterLink key={link.href} link={link} />
				))}
			</ul>
		</div>
	)
}

export const FooterLink = ({ link }) => {
	return (
		<li>
			<Link href={link.href}>
				<a className="text-base text-gray-500 hover:text-gray-900">
					{link.name}
				</a>
			</Link>
		</li>
	)
}

{
	/* <footer className="bg-gray-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Image
              src="/images/realium.svg"
              alt="Realium"
              height={80}
              width={200}
            />
            <p className="text-gray-500 text-base">
              Realium is a financial technology company that assists in
              purchase, sale, and legal compliance of tokenized real estate
              assets.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 xl:mt-0 xl:col-span-2">
            {footer.map((section, key) => (
              <FooterSection key={key} section={section} />
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Realium, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer> */
}
