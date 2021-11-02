import { MailList } from "components/general/MailList"

const HomeSubscribeSection = () => {
  return (
    <div className="bg-white py-12 sm:py-18">
      <MailList
        title=" Want to know when we launch?"
        description="Sign up for our product updates to stay in the loop."
      />
    </div>
  );
};

export default HomeSubscribeSection;
