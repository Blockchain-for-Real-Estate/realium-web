import { HOME_FAQS } from "data/static/faqs";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

import Hero from "components/marketing/Hero";
import Stats from "components/marketing/Stats";
import ListingArchive from "components/marketplace/ListingArchive";
import Info from "components/marketing/Info";
import MailList from "components/marketing/MailList";
import Faq from "components/marketing/Faq";
import Heading1 from "components/marketing/Heading1";

export default function Home() {
  return (
    <>
      <Hero
        imgSrc={"/images/hero-green.jpg"}
        description="Blockchain is changing how the world does business and how real estate is being transacted. Realium leverages these benefits to make investing in real estate even more beneficial for you."
        btnText="View Marketplace"
        btnHref="/marketplace"
        title={
          <>
            <span>A </span>
            <span className="text-indigo-600">Stock Market</span>
            <span className="block"> For Residential Housing</span>
          </>
        }
      />
      <Stats
        stats={[
          { name: "Properties", value: "12" },
          { name: "Daily Trade Volume", value: "1K" },
          { name: "Trading Window", value: "24/7" },
        ]}
      />

      <Heading1
        title="Explore the marketplace"
        description="View the properties that are currently available on the Realium marketplace and choose the best investment for you."
      />

      <div className="max-w-7xl mx-auto my-10">
        <ListingArchive />
      </div>

      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <svg
            className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
            />
          </svg>

          <div className="relative mb-10">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to invest
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              Realium takes away the headaches of traditional real estate
              investing, while still allowing users to take advantage of the
              real estate asset className.
            </p>
          </div>

          <div className="space-y-10">
            <Info
              header="Create a diversified real estate portfolio"
              description="Realium allows you to create a truly diversified your investment portfolio"
              imgSrc="/images/home-feature.svg"
              data={[
                {
                  title: "Invest in real estate nationwide",
                  description:
                    "Properties range in size, price, and location. Choose from the list of properties available on the Realium platform.",
                  icon: GlobeAltIcon,
                },
                {
                  title: "Choose your property type",
                  description:
                    "Choose from residential and commercial properties to add to your portfolio. Properties are added on a rolling basis.",
                  icon: ScaleIcon,
                },
                {
                  title: "Sell your shares at any time",
                  description:
                    "With no lock up or holding periods, Realium users are able to list their shares for sale at any time.",
                  icon: LightningBoltIcon,
                },
              ]}
            />
            <Info
              reverse={true}
              header="A verifiable and proven history"
              description="Realium traces all transactions for each property on the blockchain. This allows for Realium to introduce speed, security, and decentralization to the real estate market."
              imgSrc="/images/home-feature-2.svg"
              data={[
                {
                  title: "Blockchain-proven ownership",
                  description:
                    "Secure and immutable records are powered by Avalanche's next generation blockchain technology",
                  icon: AnnotationIcon,
                },
                {
                  title: "Non-Fungible Tokens pegged to real assets",
                  description:
                    "Properties on Realium are pegged to real assets creating an underlying value for each share of a property.",
                  icon: MailIcon,
                },
              ]}
            />
          </div>
        </div>
      </div>

      {/* MAIL SUBSCRIBE */}
      <div className="bg-white py-12 sm:py-24">
        <MailList
          title=" Want to know when we launch?"
          description="Sign up for our product updates to stay in the loop."
        />
      </div>

      {/* FAQs */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <Faq questions={HOME_FAQS} />
        </div>
      </div>
    </>
  );
}
