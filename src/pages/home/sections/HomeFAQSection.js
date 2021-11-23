import Faq from "src/components/general/Faq";

const HOME_FAQS = [
  {
    question: "What are shares?",
    answer:
      "Shares on the Realium platform are Non-Fungible Tokens that represent debt or equity in a specific real estate asset. The value of a share is largely determined by the income and capital appreciation associated with owning a property. Income on the property is generated by  rental income (less operating expenses such as property tax, insurance, maintenance, and mortgage debt). Because shares are pegged to a real world asset, they appreciate as the value of the property increases over time. Ultimately, the value is determined by the buyer demand which can surpass both of these figures.",
  },
  {
    question: "What are the costs associated with the platform?",
    answer: `In order for a purchase or sale to go through, a transaction fee is required to add that transaction to the blockchain. The current transaction fees are based on the different functions performed on the Realium platform and range from 0.001 AVAX to 0.01 AVAX. For a full list of the transactions fees, please refer to the <a target="_blank" rel="noreferrer" href="https://docs.avax.network/learn/platform-overview/transaction-fees">Avalanche Fee Schedule.</a>`,
  },
  {
    question: "What is the difference between buying, selling, and offering?",
    answer:
      "Users are able to buy shares of a property that have been listed for sale. These shares are owned by another Realium user that has set a specific asking price and a specific quantity. If users do not see any available shares at their desired price and quantity, they can submit an offer to purchase. Offers are binding and require users to lock up funds when submitting the offer. When a user wants to sell shares of their property, they are able to list the sale price and desired quantity. This allows for users to control the price while Realium only aggregates the historical transaction data to produce transaction trends on specific properties.",
  },
  {
    question: "How and when do properties get added?",
    answer:
      "Properties are added by the Realium team on a rolling basis. Please subscribe to our newsletter to be notified when new properties are added to the platform. Shares are bought very quickly when new assets are added, thus 80% of the shares will be available and launched and a remaining 20% of the shares will be available 12 hours after the property is listed.",
  },
];

const HomeFAQSection = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <Faq questions={HOME_FAQS} />
      </div>
    </div>
  );
};

export default HomeFAQSection;
