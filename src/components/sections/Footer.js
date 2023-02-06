import {
  FaCode,
  FaHeart,
} from "react-icons/fa";
import Logo from "../dust/Logo";
import Social from "../dust/Social";

export default function Footer() {
  return (
    <>
      <div className="px-6">
        <div className="border-b border-gray-200"></div>
      </div>
      <footer className="footer p-10">
        <div>
          <p>
            <FaCode className="fill-indigo-500 hover:scale-110 transition delay-75 inline-block" />
            {` with `}
            <FaHeart className="fill-error hover:scale-110 transition delay-75 inline-block" />{" "}
            by <Logo />
            <br />
            &copy; {new Date().getFullYear()} Copyright JstnLT.
          </p>
        </div>
        <div>
          <span className="footer-title ml-2">Social</span>
          <Social type={"footer"} />
        </div>
      </footer>
    </>
  );
}
