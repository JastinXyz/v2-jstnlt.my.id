import Link from "next/link";
import Logo from "./dust/Logo";

export default function Navbar() {
    return (
      <div className="navbar bg-base-100 pl-5">
        <div className="navbar-start">
          <Logo/>
        </div>
        <div className="navbar-end pr-5">
          <Link href={'/guestbook'} className="hover:underline transition text-[#F5FEFD]">
            Guestbook
          </Link>
        </div>
      </div>
    );
}