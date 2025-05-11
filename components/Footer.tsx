import { LuInstagram } from "react-icons/lu";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10 mt-6">
        <nav className="grid grid-flow-col gap-4">
          <Link href="/privacypolicy" className="link link-hover">
            Privacy Policy
          </Link>
          <Link href="/impressum" className="link link-hover">
            Impressum
          </Link>
          <Link href="/#contact" className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <LuInstagram size="24" />
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Luke
            Barnes Racket Stringing Services
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
