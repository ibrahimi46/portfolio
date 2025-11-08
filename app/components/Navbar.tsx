import { Terminal } from "lucide-react";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center fixed top-6 left-1/2 -translate-x-1/2 max-w-4xl
     w-[90%] mx-auto rounded-full px-3 py-3
     border-[0.5px] border-light/20 bg-black/50 backdrop-blur-sm
     text-light backdrop-filter
     "
    >
      <span
        className="font-mono text-md cursor-pointer
      hover:text-[17px] transition-all duration-500 ease-in-out
      "
      >
        $ibrahimi@portfolio
      </span>
      <div>
        <div
          className="flex gap-2 px-4 py-[2px] rounded-full border-[0.5px] border-light/20 cursor-pointer
        hover:border-light/30 transition-all duration-300 ease-in-out
        "
        >
          <Terminal />
          <span>Terminal</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
