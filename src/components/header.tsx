"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronRight, Menu, MoreHorizontal, Search, X } from "lucide-react";

const navLink =
  "inline-flex min-h-[38px] items-center max-[760px]:min-h-[42px] max-[760px]:border-b max-[760px]:border-[#edf0f2]";

const navTextLink =
  "relative isolate inline-flex min-h-[38px] items-center after:absolute after:-left-[6px] after:-right-[6px] after:top-[calc(50%+4px)] after:z-[-1] after:h-[7px] after:bg-[#f4d682] after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] hover:after:opacity-100 max-[760px]:min-h-[42px] max-[760px]:border-b max-[760px]:border-[#edf0f2] max-[760px]:after:hidden";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const closeAll = () => {
    setMoreOpen(false);
    setMenuOpen(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-[1] flex items-center justify-between px-[5%] pt-[40px] max-[1050px]:px-[2%] max-[760px]:px-[18px] max-[760px]:pt-7">
      <a className="block shrink-0 leading-none" href="#home" aria-label="XTRA Construction home">
        <Image
          src="/images/xtra-construction-logo.png"
          alt="XTRA Construction"
          width={170}
          height={50}
          priority
          className="w-[270px] max-[1050px]:w-[210px] max-[760px]:w-[160px]"
        />
      </a>

      <button
        className="hidden h-[46px] w-[46px] place-items-center bg-white text-[#243344] max-[760px]:grid"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((o) => !o)}
      >
        {menuOpen ? <X aria-hidden="true" className="h-7 w-7" /> : <Menu aria-hidden="true" className="h-7 w-7" />}
      </button>

      <nav
        id="main-navigation"
        aria-label="Main navigation"
        className={`${menuOpen ? "flex" : "hidden"} min-[761px]:flex mt-[22px] items-center gap-[50px] whitespace-nowrap text-[18px] font-medium text-[#243344] max-[1400px]:gap-10 max-[1400px]:text-[16px] max-[1050px]:gap-6 max-[1050px]:text-[15px] max-[760px]:absolute max-[760px]:right-[18px] max-[760px]:top-[100px] max-[760px]:mt-0 max-[760px]:w-[min(310px,calc(100vw-36px))] max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-0 max-[760px]:bg-white max-[760px]:p-[18px] max-[760px]:shadow-[0_8px_25px_rgb(0_0_0_/_15%)]`}
      >
        <a
          className="relative isolate inline-flex h-[18px] w-[30px] shrink-0 items-start justify-center text-[#243344] after:absolute after:left-0 after:right-0 after:top-[14px] after:z-[-1] after:h-[6px] after:bg-[#f4d682] after:content-[''] max-[760px]:h-auto max-[760px]:min-h-[42px] max-[760px]:w-full max-[760px]:items-center max-[760px]:justify-start max-[760px]:border-b max-[760px]:border-[#edf0f2] max-[760px]:after:hidden"
          href="#home"
          aria-label="Home"
          onClick={closeAll}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M12 2.5 1.8 11.2a.8.8 0 0 0 .5 1.4H4V21a1 1 0 0 0 1 1h5v-6h4v6h5a1 1 0 0 0 1-1v-8.4h1.7a.8.8 0 0 0 .5-1.4L12 2.5z" />
          </svg>
        </a>

        <a className={navTextLink} href="#about" onClick={closeAll}>About</a>
        <a className={navTextLink} href="#services" onClick={closeAll}>Services</a>
        <a className={navTextLink} href="#faq" onClick={closeAll}>FAQ</a>
        <a className={navTextLink} href="#blog" onClick={closeAll}>Blog</a>

        <div
          className="relative max-[760px]:w-full"
          onMouseEnter={() => setMoreOpen(true)}
          onMouseLeave={() => setMoreOpen(false)}
        >
          <button
            type="button"
            aria-label="More pages"
            aria-haspopup="true"
            aria-expanded={moreOpen}
            onClick={() => setMoreOpen((o) => !o)}
            className={`${navLink} relative isolate -mx-[10px] cursor-pointer border-0 bg-transparent px-[18px] text-[#243344] after:absolute after:left-0 after:right-0 after:top-[calc(50%+6px)] after:z-[-1] after:h-[6px] after:bg-[#f4d682] after:transition-opacity after:duration-300 after:content-[''] max-[760px]:mx-0 max-[760px]:w-full max-[760px]:px-0 max-[760px]:after:hidden ${moreOpen ? "after:opacity-100" : "after:opacity-0"}`}
          >
            <MoreHorizontal aria-hidden="true" className="h-[22px] w-[22px] stroke-[3]" />
          </button>

          <div
            className={`absolute left-1/2 top-full z-10 -ml-[60px] w-[260px] pt-[14px] transition-all duration-300 ease-out max-[760px]:static max-[760px]:ml-0 max-[760px]:w-full max-[760px]:pt-0 ${
              moreOpen
                ? "visible translate-y-0 opacity-100 max-[760px]:block"
                : "pointer-events-none invisible translate-y-3 opacity-0 max-[760px]:hidden"
            }`}
          >
            <ul className="m-0 list-none bg-[#243344] px-[48px] py-[18px] text-[15px] font-normal text-white shadow-[0_8px_25px_rgb(0_0_0_/_15%)] max-[760px]:px-[18px] max-[760px]:py-3 max-[760px]:text-base">
              <li>
                <a className="flex items-center justify-between py-[5px] transition-colors duration-200 hover:text-[#f4c03b]" href="#pages" onClick={closeAll}>
                  Pages <ChevronRight aria-hidden="true" className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a className="flex items-center py-[10px] transition-colors duration-200 hover:text-[#f4c03b]" href="#contact" onClick={closeAll}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <a className={navLink} href="#search" aria-label="Search">
          <Search aria-hidden="true" className="h-[25px] w-[25px] stroke-[3]" />
        </a>

<a
  className="flex h-[70px] w-[230px] items-center justify-center bg-white text-[18px] font-bold text-[#243344] transition-colors duration-300 hover:bg-[#243344] hover:text-[#f4c03b] max-[1400px]:h-[63px] max-[1400px]:w-[207px] max-[1400px]:text-[16px] max-[1050px]:h-14 max-[1050px]:w-[170px] max-[1050px]:text-[15px] max-[760px]:mt-3 max-[760px]:h-[52px] max-[760px]:w-full max-[760px]:text-base"
  href="#contact"
  onClick={closeAll}
>
  Free Consultation
</a>
      </nav>
    </header>
  );
}