import classNames from "utilities/web/ClassNames";
import Image from "next/image";

export default function Info({
  header,
  description,
  data,
  imgSrc,
  reverse = false,
}) {
  return (
    <div
      className={classNames(
        reverse ? "lg:flex-row-reverse" : "",
        "relative flex flex-col lg:flex-row items-center h-full justify-between"
      )}
    >
      <div className="relative flex-1 p-4">
        <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
          {header}
        </h3>
        <p className="mt-3 text-lg text-gray-500">{description}</p>
        <dl className="mt-10 space-y-10">
          {data.map((item, key) => (
            <InfoItem item={item} key={key} />
          ))}
        </dl>
      </div>

      <div
        className={classNames(
          reverse ? "text-left" : "text-right",
          "flex-1 relative mt-10 lg:mt-0"
        )}
      >
        <Image src={imgSrc} alt="" height={500} width={500} />
      </div>
    </div>
  );
}

export function InfoItem({ item }) {
  return (
    <div className="flex">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
          <item.icon className="h-6 w-6" />
        </div>
      </div>
      <div className="ml-4">
        <dt className="text-lg leading-6 font-medium text-gray-900">
          {item.title}
        </dt>
        <dd className="mt-2 text-base text-gray-500">{item.description}</dd>
      </div>
    </div>
  );
}
