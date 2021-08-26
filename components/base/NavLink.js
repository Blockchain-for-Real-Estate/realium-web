import { useRouter } from "next/router";
import Link from "next/link";

export default function NavLink({
  href,
  exact,
  classes,
  activeClasses,
  children,
}) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    classes += ` ${activeClasses}`;
  }

  return (
    <Link href={href}>
      <a className={classes}>{children}</a>
    </Link>
  );
}
