import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="flex item-center gap-4 text-2xl font-bold">
        <Image src="logo.png" className="w-8 h-8" alt="Logo" w={32} h={32} />
        <span>Lama Blog</span>
      </Link>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "☰"}
        </div>

        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 bg-[#e6e6ff] transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Trending</Link>
          <Link to="/">About</Link>
          <Link to="">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login👋{" "}
            </button>
          </Link>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Trending</Link>
        <Link to="/">About</Link>
        <Link to="">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Login👋{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
