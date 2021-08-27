export default function Heading1({ title, description }) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 sm:pb-8 sm:py-24">
        <div className="text-center">
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {title}
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
