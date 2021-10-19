import { HOW_IT_WORKS_FAQS } from "data/static/faqs";
import {
  CashIcon,
  DocumentSearchIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

import Hero from "components/general/Hero";
import Faq from "components/general/Faq";
import Info from "components/general/Info";

export default function HowItWorksPage() {
  return (
    <>
      <Hero
        imgSrc={"/images/hero-blue.jpg"}
        description="Blockchain is changing how the world does business and how real estate is being transacted. Realium leverages these benefits to make investing in real estate even more beneficial for you."
        btnText="Learn More"
        btnHref="https://docs.realium.io"
        title={
          <>
            <span className="block xl:inline">What Is Novel About The </span>
            <span className="block text-indigo-600 xl:inline">Realium</span>
            <span className="block xl:inline"> Platform?</span>
          </>
        }
      />

      {/* CONVERTING */}
      <div className="bg-gray-100 lg:px-8 px-4 py-10 sm:px-6">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Converting the asset
          </h2>
          <p className="mt-3 text-xl text-gray-500 text-center">
            Realium uses blockchain technology to represent the real tangible
            asset as a security.
            <br className="hidden md:block" />
            This allows for the property to be traded the same way stocks and
            bonds are traded on exchanges.
          </p>

          <div className="relative h-56 w-full my-6 mx-auto">
            <Image
              src="/images/asset-table.svg"
              alt="asset table"
              layout="fill"
            />
          </div>
        </div>
      </div>

      {/* INFO */}
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:flex">
          <div className="flex-1 p-16">
            <div className="h-full w-full relative">
              <Image
                src="/images/residential-capital-stack.svg"
                alt="Residential"
                layout="fill"
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Expanding the capital stack
            </h2>
            <p className="mt-3 text-xl text-gray-500">
              Property owners are provided with a way to unlock more capital
              from their asset through tokenization. Since only a portion of the
              asset is tokenized, Realium users are part-owners that do not
              carry any voting rights.
            </p>
            <div className="mt-3 sm:mt-16 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 grid grid-cols-3">
              <div className="flex-1 mt-0">
                <div className="text-3xl leading-9 font-extrabold text-indigo-500">
                  20%
                </div>
                <div className="text-base leading-6 font-medium text-gray-500 mb-12">
                  Increase in
                  <br />
                  asset liquidty
                </div>
              </div>
              <div className="flex-1 mt-0">
                <div className="text-3xl leading-9 font-extrabold text-indigo-500">
                  12
                </div>
                <div className="text-base leading-6 font-medium text-gray-500 mb-12">
                  Properties
                  <br />
                  tokenized
                </div>
              </div>
              <div className="flex-1 mt-0">
                <div className="text-3xl leading-9 font-extrabold text-indigo-500">
                  1
                </div>
                <div className="text-base leading-6 font-medium text-gray-500 mb-12">
                  Cap table
                  <br />
                  line item
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="bg-gray-100 lg:px-8 px-4 py-10 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Info
            header="Transacting a Property"
            description="Realium allows you to create a truly diversified your investment portfolio"
            imgSrc="/images/transacting-a-property.svg"
            data={[
              {
                title: "1. View property details",
                description:
                  "Each property listed on the platform will include details related to the individual property and to the investment.",
                icon: MenuIcon,
              },
              {
                title: "2. Select the desired shares",
                description:
                  "Users will have the option to buy shares of a property, list shares that they currently have tied to their account, or submit an offer to purchase shares at a specific price.",
                icon: DocumentSearchIcon,
              },
              {
                title: "3. Confirm the transaction",
                description:
                  "Once a transaction is confirmed, it is added to the blockchain. The new property will now appear in the user’s dashboard where they can list it for sale again.",
                icon: CashIcon,
              },
            ]}
          />
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <Faq questions={HOW_IT_WORKS_FAQS} />
        </div>
      </div>
    </>
  );
}
