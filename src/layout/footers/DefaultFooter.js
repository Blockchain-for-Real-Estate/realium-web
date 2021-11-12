import footer from "data/static/footerLinks";
import Link from "next/link";
import Image from "next/image";

export default function DefaultFooter() {
  return (
    <footer className="bg-gray-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Image
              src="/images/realium.svg"
              alt="Realium"
              height={80}
              width={200}
            />
            <p className="text-gray-500 text-base">
              Realium is a financial technology company that assists in
              purchase, sale, and legal compliance of tokenized real estate
              assets.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 xl:mt-0 xl:col-span-2">
            {footer.map((section, key) => (
              <FooterSection key={key} section={section} />
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Realium, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export const FooterSection = ({ section }) => {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
        {section.header}
      </h3>
      <ul role="list" className="mt-4 space-y-4">
        {section.links.map((link) => (
          <FooterLink key={link.href} link={link} />
        ))}
      </ul>
    </div>
  );
};

export const FooterLink = ({ link }) => {
  return (
    <li>
      <Link href={link.href}>
        <a className="text-base text-gray-500 hover:text-gray-900">
          {link.name}
        </a>
      </Link>
    </li>
  );
};
