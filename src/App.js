import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ScrollToTop from "react-router-scroll-top"
import { Home } from "./home"
import { About } from "./about"
import { Marketplace } from "./marketplace/MarketplacePage"
import { HowItWorks } from "./howitworks"
import { Login } from "./login"
import { Dashboard } from "./home/dashboard"
import { Footer } from "./utilities/footer"
import { Nav } from "./utilities/nav"
import { Notification } from "./utilities/notification"
import { ListingDetails } from "./marketplace/listing-details"

function App() {
	const [notify, setNotify] = React.useState({msg: 'Welcome to Realium! We are currently in testing mode so funds and properties are not real for now.',
												color: 'blue',
												show: true})

	return (
		<Router>
			<Nav />
			<Notification notify={notify} setNotify={setNotify}/>
			<ScrollToTop>
				<Switch>
					<Route exact path="/">
						<Home setNotify={setNotify} />
					</Route>
					<Route path="/marketplace" exact>
						<Marketplace setNotify={setNotify} />
					</Route>
					<Route path="/marketplace/:propertyId">
						<ListingDetails setNotify={setNotify} />
					</Route>
					<Route path="/howitworks" exact>
						<HowItWorks setNotify={setNotify} />
					</Route>
					<Route path="/about">
						<About setNotify={setNotify} />
					</Route>
					<Route path="/login">
						<Login setNotify={setNotify} />
					</Route>
					<Route path="/dashboard">
						<Dashboard setNotify={setNotify} />
					</Route>
				</Switch>
			</ScrollToTop>
			<Footer />
		</Router>
	)
}

export default App
