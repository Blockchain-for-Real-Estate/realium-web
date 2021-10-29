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
      <HomeSubscribeSection />
      <HomeExploreSection />
      <HomeInfoSection />
      <HomeSubscribeSection />
      <HomeFAQSection />
    </>
  );
};

export default HomePage;
