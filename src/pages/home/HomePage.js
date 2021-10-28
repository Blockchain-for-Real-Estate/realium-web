import useUI from "context/hooks/useUI";
import {
  HomeExploreSection,
  HomeFAQSection,
  HomeHeroSection,
  HomeInfoSection,
  HomeStatsSection,
  HomeSubscribeSection,
} from "./sections";

const HomePage = () => {
  const { modal } = useUI();

  return (
    <>
      <button onClick={() => modal("Hello", <>Testing</>)}>Launch Modal</button>
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
