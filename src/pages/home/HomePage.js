import {
  HomeExploreSection,
  HomeFAQSection,
  HomeHeroSection,
  HomeInfoSection,
  HomeStatsSection,
  HomeSubscribeSection,
  HomeEmailList,
} from "./sections";

const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <HomeStatsSection />
      <HomeEmailList />
      <HomeExploreSection />
      <HomeInfoSection />
      <HomeSubscribeSection />
      <HomeFAQSection />
    </>
  );
};

export default HomePage;
