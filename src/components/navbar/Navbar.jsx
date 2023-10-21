"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.css";
const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "About",
      url: "/about",
    },
    {
      id: 3,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 4,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  return (
    <div className={'containers'}>
      <Link href="/" className={'logo'}>
        Jangid Sahab
      </Link>
      <div className={'links'}>
        {links?.map((link) => (
          <Link key={link.id} href={link.url} className={'link'}>
            {link.title}
          </Link>
        ))}
      </div>
      <button className={'logout'}>Logout</button>
    </div>
  );
};

export default Navbar;
