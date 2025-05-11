"use client";
import logo from "@/assets/images/lbrss.jpg";
import "animate.css";
import Link from "next/link";

function Header() {
  const handleClick = () => {
    const active = document.activeElement;
    if (active instanceof HTMLElement) {
      active.blur();
    }
  };

  return (
    <header className="navbar bg-base-100 shadow-sm mb-2">
      <div className="navbar-start">
        <div className="avatar">
          <div className="w-16 rounded">
            <Link href="/">
              <img src={logo.src} alt="Logo" className="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/" className="btn btn-ghost text-xl md:hidden">
          LBRSS
        </Link>
        <Link href="/">
          <div className="font-semibold hidden md:flex md:flex-col">
            <span className="text-xl">Racket Stringing Services</span>
            <span className="font-extralight text-xs">by Luke Barnes</span>
          </div>
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/#services" onClick={handleClick}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/#contact" onClick={handleClick}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/#aboutme" onClick={handleClick}>
                About me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
