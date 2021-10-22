import { Tab } from "@headlessui/react";
import classNames from "utilities/web/ClassNames";
import Image from "next/image";

export default function ImageGallery({ images }) {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      {/* Image selector */}
      <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <Tab
              key={image.id}
              className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
            >
              {({ selected }) => (
                <>
                  <span className="sr-only">{image.name}</span>
                  <span className="absolute inset-0 rounded-md overflow-hidden">
                    <Image
                      src={image}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </span>
                  <span
                    className={classNames(
                      selected ? "ring-indigo-500" : "ring-transparent",
                      "absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>

      {/* MAIN IMAGE */}
      <Tab.Panels className="w-full aspect-w-7 aspect-h-6 sm:aspect-w-5 sm:aspect-h-4">
        {images.map((image, key) => (
          <Tab.Panel key={key}>
            <Image
              src={image}
              className="w-full h-full object-center object-cover sm:rounded-lg shadow"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
