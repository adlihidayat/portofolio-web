import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <div className=" absolute top-6 right-14 sm:right-20 animate-onloadHalf ">
      <Link href="/#Main" className="nav-item">
        Main
      </Link>
      <Link href="/#Tech" className="nav-item">
        Tech
      </Link>
      <Link href="/#Projects" className="nav-item">
        Projects
      </Link>
      <Link href="/#Contacts" className="nav-item">
        Contacts
      </Link>
    </div>
  );
}

export default Nav;
