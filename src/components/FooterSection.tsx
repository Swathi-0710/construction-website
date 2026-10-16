"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const clientLogos = [
  "logo-4.png",
  "logo-5.png",
  "logo-3.png",
  "logo-1.png",
  "logo-2.png",
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/XtraTheme",
    Icon: FaFacebookF,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/Xtra_Theme",
    Icon: FaTwitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/XtraTheme/",
    Icon: FaInstagram,
  },
  {
    label: "YouTube",
    href: "#youtube",
    Icon: FaYoutube,
  },
];

export default function FooterSection() {
  return (
    <>
      <section
        className="bg-[#f4c03b] py-[10px] mt-[380px] max-[760px]:py-8"
        aria-label="Our clients"
      >
        <div className="relative mx-auto w-[min(1280px,calc(100%-64px))] max-[760px]:w-[calc(100%-36px)]">
          <div className="flex items-center justify-between gap-8 bg-[#f4c03b] px-[25px] py-[45px] max-[760px]:flex-wrap max-[760px]:justify-center max-[760px]:gap-x-8 max-[760px]:gap-y-6 max-[760px]:px-4 max-[760px]:py-[55px]">
            {clientLogos.map((logo, index) => (
              <div
                key={logo}
                className="group relative flex w-[min(218px,20%)] items-center justify-center [perspective:800px] max-[760px]:w-[40%]"
              >
                <Image
                  className="
                    block h-[80px] w-full origin-bottom object-contain
                    transition-transform duration-500
                    [transition-timing-function:cubic-bezier(0.25,0.1,0.25,1)]
                    group-hover:[transform:perspective(800px)_rotateX(-8deg)_translateY(-2px)]
                    max-[760px]:h-[65px]
                  "
                  src={`/images/${logo}`}
                  alt=""
                  width={218}
                  height={80}
                  sizes="(max-width: 760px) 40vw, 218px"
                />

                {/* Small tooltip on hover */}
                <span
                  className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded bg-[#243344] px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-md transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  Construction Company
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-full -translate-x-1/2 border-[5px] border-transparent border-t-[#243344]"
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#243344] text-white">
        <div className="flex flex-col items-center px-6 pb-[90px] pt-[100px] text-center max-[760px]:px-[18px] max-[760px]:pb-[65px] max-[760px]:pt-[75px]">
          <Image
            className="block h-auto w-[270px] max-w-[85vw] object-contain"
            src="/images/footer-logo-construction.png"
            alt="XTRA Construction"
            width={540}
            height={100}
            sizes="(max-width: 760px) 85vw, 270px"
          />

          <p className="mb-[50px] mt-[50px] max-w-[900px] text-[20px] leading-[1.65] text-[#c4cbd1] max-[760px]:mb-[30px] max-[760px]:mt-[30px] max-[760px]:text-[13px] max-[760px]:leading-[1.6]">
            A company is any entity that engages in business.
            <br />
            Companies can be structured in different ways.
            <br />
            For example, your company can be a sole proprietorship,
            <br className="max-[760px]:hidden" />
            {" "}a partnership, or a corporation.
          </p>

          <nav
            className="flex items-center gap-3 max-[760px]:gap-2"
            aria-label="Social media"
          >
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={label}
                className="grid h-[42px] w-[42px] place-items-center bg-[#f4c03b] text-[20px] text-[#243344] transition-colors duration-200 hover:bg-[#243344] hover:text-white max-[760px]:h-[36px] max-[760px]:w-[36px] max-[760px]:text-[16px]"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>

        <div className="bg-white text-[#8b8b8b]">
          <div className="mx-auto flex min-h-[110px] w-[min(1570px,calc(100%-64px))] items-center justify-between gap-6 text-[18px] max-[760px]:w-[calc(100%-36px)] max-[760px]:min-h-[100px] max-[760px]:flex-col max-[760px]:justify-center max-[760px]:gap-3 max-[760px]:text-[14px]">
            <span>© 2026 XTRA, Powered by WordPress</span>

            <nav
              className="flex items-center gap-6 max-[430px]:gap-3"
              aria-label="Footer links"
            >
              <a
                className="transition-colors hover:text-[#243344]"
                href="#contact"
              >
                Contact Us
              </a>

              <span aria-hidden="true" className="text-[#e5e5e5]">
                /
              </span>

              <a
                className="transition-colors hover:text-[#243344]"
                href="#about"
              >
                About
              </a>

              <span aria-hidden="true" className="text-[#e5e5e5]">
                /
              </span>

              <a
                className="transition-colors hover:text-[#243344]"
                href="#privacy"
              >
                Privacy Policy
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}