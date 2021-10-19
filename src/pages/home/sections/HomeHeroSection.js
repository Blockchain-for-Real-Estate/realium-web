import Hero from "components/general/Hero";

const HomeHeroSection = () => {
  return (
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
  );
};

export default HomeHeroSection;
