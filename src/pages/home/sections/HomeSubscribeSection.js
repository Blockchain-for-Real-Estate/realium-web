import MailList from "src/components/general/MailList";

const HomeSubscribeSection = () => {
  return (
    <div className="bg-white py-12 sm:py-18">
      <MailList
        title=" Want to know when we launch?"
        description="Sign up for our product updates to stay in the loop. Hear about the latest Realium development updates."
      />
    </div>
  );
};

export default HomeSubscribeSection;
