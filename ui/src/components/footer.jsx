import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center w-full sticky  gap-8 mt-4 top-[100vh] font-MartianMono font-bold items-center">
      <small className="text-blue-400 ">
        &copy; {currentYear}, Read-it. All rights reserved.
      </small>
      <a href="https://www.linkedin.com/in/corentin-laudrin/">
        <img src="/assets/linkedin.svg" alt="linkedin" />
      </a>
      <a href="https://www.instagram.com/corentinlaudrin/">
        <img src="/assets/instagram.svg" alt="instagram" />
      </a>
      <a href="https://github.com/CorentinLdrn">
        <img src="/assets/github.svg" alt="github" />
      </a>
    </footer>
  );
}

export default Footer;
