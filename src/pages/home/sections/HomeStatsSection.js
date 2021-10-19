import Stats from "components/general/Stats";

const HomeStats = [
  { name: "Properties", value: "12" },
  { name: "Daily Trade Volume", value: "1K" },
  { name: "Trading Window", value: "24/7" },
];

const HomeStatsSection = () => {
  return <Stats stats={HomeStats} />;
};

export default HomeStatsSection;
