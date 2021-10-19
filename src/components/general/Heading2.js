const Heading2 = ({ title, subtitle }) => {
  return (
    <div>
      <div className="text-gray-900 text-lg">{title}</div>
      <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
    </div>
  );
};

export default Heading2;
