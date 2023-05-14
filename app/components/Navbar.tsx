import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="text-dark">
      <div className="flex justify-between px-4 py-12 lg:px-[100px]">
        <h1 className="">ABDULAZEEZ ISHAQ</h1>

        <div className="hidden gap-8 lg:flex">
          <Link href="/" className="uppercase">
            work
          </Link>
          <Link href="/" className="uppercase">
            about
          </Link>
          <Link href="/" className="uppercase">
            resume
          </Link>
          <Link href="/" className="uppercase">
            contact
          </Link>
        </div>

        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="lg:hidden"
        >
          <line x1="2" y1="6" x2="19" y2="6" stroke="black" strokeWidth="2" />
          <line x1="2" y1="13" x2="19" y2="13" stroke="black" strokeWidth="2" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
