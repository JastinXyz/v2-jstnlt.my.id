import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href="/">
        <span className="group text-xl font-black leading-none text-[#F5FEFD]">
          <span>Jstn</span>
          <span className="text-primary">
            LT.
          </span>
        </span>
      </Link>
    </>
  );
}
