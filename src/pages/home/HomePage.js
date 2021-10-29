import {
  HomeExploreSection,
  HomeFAQSection,
  HomeHeroSection,
  HomeInfoSection,
  HomeStatsSection,
  HomeSubscribeSection,
} from "./sections";

const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <HomeStatsSection />
      <HomeExploreSection />
      <HomeInfoSection />
      <HomeSubscribeSection />
      <HomeFAQSection />
    </>
  );
};

export default HomePage;
