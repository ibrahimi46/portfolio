import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function SiteFooter() {
  return (
    <footer
      className="flex items-center justify-between  text-nowrap h-12 px-4 sm:px-12 absolute w-full bottom-0 border-t
         border-white/10 backdrop-blur-sm z-30"
    >
      <p className="text-white/50 font-roboto text-[10px] md:text-[12px] font-semibold">
        © {new Date().getFullYear()} Anas Ibrahimi. All rights reserved.
      </p>

      <div className="flex gap-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 hover:text-white transition-colors"
          data-cursor-text
        >
          <FaGithub className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 hover:text-white transition-colors"
          data-cursor-text
        >
          <FaLinkedin className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
        </a>
        <a
          href="mailto:hello@example.com"
          className="text-white/50 hover:text-white transition-colors"
          data-cursor-text
        >
          <FaEnvelope className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
        </a>
      </div>
    </footer>
  );
}
