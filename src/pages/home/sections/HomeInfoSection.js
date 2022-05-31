import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  CashIcon,
} from "@heroicons/react/outline";
import Info from "src/components/general/Info";

const HomeInfoSection = () => {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative mb-10">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to invest
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            Realium allows for fractional real estate investing, giving power to
            users to actively participate in real estate investing with as
            little as $100.
          </p>
        </div>

        <div className="space-y-10">
          <Info
            header="Create your own portfolio"
            description="Diversifiy your risk and geographic ownership by fractionally owning in properties all across the United States."
            imgSrc="/images/home-feature.svg"
            data={[
              {
                title: "Invest in real estate nationwide",
                description: "Properties range in size, price, and location.",
                icon: GlobeAltIcon,
              },
              {
                title: "Sell your tokens at any time",
                description:
                  "No lock up or holding periods, tokens can be bought, sold, and traded freely.",
                icon: LightningBoltIcon,
              },
              {
                title: "Receive rental income",
                description:
                  "Rental income is paid daily based on the number of tokens owned. ",
                icon: CashIcon,
              },
            ]}
          />
          <Info
            itemsCenter
            reverse
            header="A verifiable and proven history"
            description="Realium traces all transactions for each property on the blockchain. This allows for Realium to introduce speed, security, and decentralization to the real estate market."
            imgSrc="/images/verifiable-and-proven-history.svg"
            data={[
              {
                title: "Blockchain-proven ownership",
                description:
                  "Secure and immutable records are powered by Avalanche's next generation blockchain technology",
                icon: AnnotationIcon,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeInfoSection;
