import {
  HomeExploreSection,
  HomeFAQSection,
  HomeHeroSection,
  HomeInfoSection,
  HomeSubscribeSection,
} from "./sections";

const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <HomeSubscribeSection />
      <HomeExploreSection />
      <HomeInfoSection />
    </>
  );
};

export default HomePage;
