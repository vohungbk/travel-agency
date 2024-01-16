"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ children, ...rest }: { children: React.ReactNode } & LinkProps) => {
  const { href } = rest;
  const pathName = usePathname();

  const isActive = pathName === href;
  return (
    <Link {...rest} className={`nav-item nav-link ${isActive && "active"}`}>
      {children}
    </Link>
  );
};

export default ActiveLink;
