import Link from "next/link";
import Image from "next/image";

export default function Hero({ title, description, imgSrc, btnText, btnHref }) {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                {title}
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {description}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start space-x-4">
                <Link href="/signin">
                  <button className="btn-primary px-8 py-3 md:py-4 md:text-lg md:px-10 shadow-lg">
                    Get started
                  </button>
                </Link>
                <Link href={btnHref || ""}>
                  <button className="btn-secondary px-8 py-3 md:py-4 md:text-lg md:px-10 shadow-lg">
                    {btnText || "testing"}
                  </button>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="relative h-96 lg:h-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image src={imgSrc} alt="" layout="fill" objectFit="cover" priority />
      </div>
    </div>
  );
}
