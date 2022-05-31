// import { HOW_IT_WORKS_FAQS } from "src/data/faqs";
import {
  CashIcon,
  DocumentSearchIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

import Hero from "src/components/general/Hero";
// import Faq from "src/components/general/Faq";
import Info from "src/components/general/Info";

export default function HowItWorksPage() {
  return (
    <>
      <Hero
        imgSrc="/images/how-it-works-hero.jpg"
        description="Learn more about how properties are acquried, tokenized, sold, and traded on the Realium platform."
        title={
          <>
            <span className="block xl:inline">How does the </span>
            <span className="block text-indigo-600 xl:inline">Realium</span>
            <span className="block xl:inline"> platform work?</span>
          </>
        }
      />

      {/* ONBOARDING */}
      <div className="bg-gray-100 lg:px-8 px-4 py-10 sm:px-6">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center">
            Onboarding the property
          </h2>
          <div className="flex justify-center mt-7">
            <p className="text-xl text-gray-500 text-center w-7/12">
              Realium onboards income-producing properties through acquisitions
              or partnerships. We then form an LLC for each property to split it
              into thousands of tokens. Purchasing a token makes you an active
              part owner of an LLC that manages the property.
            </p>
          </div>
          <div className="relative h-96 w-full my-6 mx-auto">
            <Image
              src="/images/legal-structure.svg"
              alt="asset table"
              layout="fill"
            />
          </div>
        </div>
      </div>

      {/* PURCHASING TOKENS */}
      <div className="lg:px-8 px-4 py-10 sm:px-6">
        <div className="lg:w-7/12 max-w-7xl mx-auto">
          <Info
            header="Purchasing tokens"
            description=""
            imgSrc="/images/primary-sale.svg"
            data={[
              {
                title: "1. View investment details",
                description:
                  "View detailed information about the property’s finances and projected return.",
                icon: DocumentSearchIcon,
              },
              {
                title: "2. Purchase tokens",
                description:
                  "Purchase tokens from Realium at a fixed price using your bank account, credit card, or crypto wallet.",
                icon: CurrencyDollarIcon,
              },
              {
                title: "3. Receive rental income",
                description:
                  "Collect rental income based on your percentage of property tokens owned. Your tokens appreciate over time and can be sold back to Realium at any time.",
                icon: CashIcon,
              },
            ]}
          />
        </div>
      </div>

      {/* TRADING TOKENS */}
      <div className="bg-gray-100 lg:px-8 px-4 py-10 sm:px-6">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center">
            Trading tokens
          </h2>
          <div className="flex justify-center mt-7">
            <p className="text-xl text-gray-500 text-center w-7/12">
              Once all the tokens in a property have been sold, Realium creates
              a secondary market for users to sell their tokens to other users.
              Tokens listed for sale will be added to the order book of each
              property. Token price fluctuates based on user demand.
            </p>
          </div>
          <div className="justify-center lg:flex lg:flex-row sm:flex-col">
            <div className="relative h-96 w-72 my-6 mx-auto lg:mx-0">
              <Image
                src="/images/transaction-1.svg"
                alt="transaction details"
                layout="fill"
              />
            </div>
            <div className="relative h-96 w-72 my-6 mx-auto lg:mx-0">
              <Image
                src="/images/transaction-2.svg"
                alt="order book"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Realium fees */}
      <div className="bg-indigo-500 lg:px-8 px-4 py-10 sm:px-6">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h2 className="text-4xl font-extrabold text-white text-center">
            Realium fees
          </h2>
          <div className="flex justify-center mt-7">
            <p className="text-white text-center w-7/12 text-lg leading-7 font-normal">
              Realium sells properties to users at a 6% premium of the
              acquisition cost. Realium collects a 1% transaction fee on all
              secondary trades between users.
            </p>
          </div>
          <div className="flex flex-col justify-center mb-5">
            <div className="relative h-9 my-6 mx-auto">
              <Image
                src="/images/primary-secondary-header.svg"
                alt="asset table"
                width="512"
                height="32"
              />
            </div>
            <div className="relative h-9 my-6 mx-auto">
              <Image
                src="/images/fee-numbers.svg"
                alt="asset table"
                width="512"
                height="80"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
