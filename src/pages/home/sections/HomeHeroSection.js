import Hero from "src/components/general/Hero";

const HomeHeroSection = () => {
  return (
    <Hero
      imgSrc={"/images/home-banner-image.jpg"}
      description="Learn more about how properties are acquried, tokenized, sold, and traded on the Realium platform."
      title={
        <>
          <span>Invest in </span>
          <span className="text-indigo-600">fractional real estate</span>
          <span>, get paid dividends.</span>
        </>
      }
    />
  );
};

export default HomeHeroSection;
