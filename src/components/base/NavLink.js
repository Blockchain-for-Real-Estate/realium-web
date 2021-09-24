import { useRouter } from "next/router";
import Link from "next/link";

export default function NavLink({
  href,
  exact,
  classes,
  activeClasses,
  children,
  onClick,
  external,
}) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    classes += ` ${activeClasses}`;
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
        className={classes}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} passHref>
      <button onClick={onClick} className={classes}>
        {children}
      </button>
    </Link>
  );
}
