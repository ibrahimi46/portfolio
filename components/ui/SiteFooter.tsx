import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function SiteFooter() {
  return (
    <footer className="flex justify-between items-center w-full h-full">
      <p className="text-white/50 mb-4 md:mb-0 font-roboto font-semibold">
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
          <FaGithub className="h-5 w-5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 hover:text-white transition-colors"
          data-cursor-text
        >
          <FaLinkedin className="h-5 w-5" />
        </a>
        <a
          href="mailto:hello@example.com"
          className="text-white/50 hover:text-white transition-colors"
          data-cursor-text
        >
          <FaEnvelope className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}
