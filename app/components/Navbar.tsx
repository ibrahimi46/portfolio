"use client";

import Link from "next/link";

const tags = [
  { tag: "Projects", route: "/projects" },
  { tag: "Resume", route: "/resume" },
  { tag: "Contact", route: "/contact" },
  { tag: "Terminal", route: "/terminal" },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex font-roboto justify-between items-center h-20 px-8 z-50 backdrop-blur-sm">
      <div className="text-3xl font-bold cursor-pointer hover:opacity-80 transition-all duration-300">
        IBRAHIMI
      </div>
      <div className="flex gap-4">
        {tags &&
          tags.map((tag, idx) => {
            return (
              <Link
                key={idx}
                href={tag.route}
                className="relative group overflow-hidden"
              >
                {tag.tag}
                <span className="bg-white h-[2px] w-0 absolute bottom-0 left-0 transition-all duration-300 group-hover:w-full ease-out"></span>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Navbar;
