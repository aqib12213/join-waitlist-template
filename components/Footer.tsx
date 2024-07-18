import React from "react";

const Footer = ({ className }: { className: string }) => {
  return (
    <footer className={className}>
      <p className="flex flex-col gap-2 sm:flex-row">© 2024 Join-waitlist Template for React • <a className="hover:text-zinc-400" href="https://www.ehtisham.dev/join-waitlist">Download for Free</a></p>
    </footer>
  );
};

export default Footer;
