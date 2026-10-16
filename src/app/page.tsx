"use client";

import Image from "next/image";
import { type FormEvent, useEffect, useState } from "react";
import {
  ArrowRight,
  BookText,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  HardHat,
  Heart,
  
  Instagram,
  Menu,
  MessageCircle,
  MoreHorizontal,
  PhoneCall,
  House,
  Search,
  SlidersHorizontal,
  Video,
  Wrench,
  X,
  ChevronUp,
} from "lucide-react";
import SocialIcons from "../components/icons";
import Header from "../components/header";
import AboutImage from "../components/AboutImage";
import ConstructionProcessSection from "../components/ConstructionProcessSection";
import ConstructionQuoteSection from "../components/ConstructionQuoteSection";
import TestimonialsSection from "../components/TestimonialsSection";
import PortfolioSection from "../components/PortfolioSection";
import FooterSection from "../components/FooterSection";
import CookieNotice from "../components/CookieNotice";
import ScrollToTopButton from "../components/ScrollToTopButton";
import HeroStripes from "../components/HeroStripes";

const services = [
  {
    title: "Building",
    description: "A building, or edifice, is a structure with a roof and walls standing.",
    icon: "/images/s1.png",
  },
  {
    title: "Road Construction",
    description:
      "Road construction involves the use of asphalt, liquid asphalt, concrete, soil stabilization, rebar, paving and pavement recycling machines, and other road repair materials.",
    icon: "/images/s2.png",
  },
  {
    title: "Maintenance",
    description: "All are assigned responsibilities relate to the maintenance mode.",
    icon: "/images/s3.png",
  },
];
const navLink = "inline-flex min-h-[38px] items-center max-[760px]:min-h-[42px] max-[760px]:border-b max-[760px]:border-[#edf0f2]";
const previewTools = [
  { label: "Theme options", icon: SlidersHorizontal, accent: true },
  { label: "Demo home", icon: House },
  { label: "Documentation", icon: BookText },
  { label: "Video tutorials", icon: Video },
  { label: "Support", icon: MessageCircle },
  { label: "Favorites", icon: Heart },
  { label: "Accessibility options", icon: Wrench },
];

function SectionHeading({
  eyebrow,
  title,
  light = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`mb-[52px] text-center ${className}`}>
      <span className="block text-[14px] font-semibold uppercase tracking-[1.8px] text-[#f4c03b]">{eyebrow}</span>
      <h2 className={`mt-[17px] text-[clamp(32px,3vw,46px)] font-bold leading-[1.2] tracking-[-1.2px] ${light ? "text-white" : "text-[#243344]"}`}>{title}</h2>
    </div>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  // Start on slide 0 (yellow stripes + man image)
  const [heroSlide, setHeroSlide] = useState(0);

  // Auto-switch every 10s. Re-runs after every change (auto or click),
  // so a click restarts the 10 second countdown.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const slideTimer = window.setTimeout(() => {
      setHeroSlide((current) => (current === 1 ? 0 : 1));
    }, 10000);

    return () => window.clearTimeout(slideTimer);
  }, [heroSlide]);

  function changeSlide() {
    setHeroSlide((current) => (current === 1 ? 0 : 1));
  }

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormSubmitted(true);
  }

  return (
    <div className="min-w-0 overflow-x-clip bg-white">
      <div className="fixed inset-x-0 top-0 z-[50] flex h-[55px] items-center justify-between bg-[#242424] px-[16px] text-[#f5f5f5] shadow-[0_2px_8px_rgb(0_0_0_/_12%)] max-[1050px]:h-[54px] max-[1050px]:px-5 max-[760px]:h-14 max-[760px]:px-[14px]">
<a
  className="flex h-[50px] w-[214px] shrink-0 items-center text-[#f7f7f7] max-[1050px]:w-auto max-[760px]:w-[214px] max-[760px]:flex-[0_1_214px]"
  href="https://1.envato.market/xtra"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Envato Market"
>
  <Image
    src="/images/envato-market.svg"
    alt="XTRA WordPress Theme on Envato Market"
    width={158}
    height={20}
    className="block h-[25px] w-[158px]"
    priority
  />
</a>

<strong className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-['Poppins'] text-[16px] font-medium text-[#e0e0e0]">
  Limited time offer, Buy XTRA WordPress theme only{" "}
  <strong className="font-bold">$39</strong>
</strong>



<a
  href="https://1.envato.market/xtra"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-auto mt-[-2px] rounded-[4px] bg-[#82b440] px-5 py-[5px] text-[14px] font-medium leading-[1.5] text-[#262626] shadow-[0_2px_0_#6f9a37]"
>
  Download XTRA Theme
</a>


      </div>
      <div aria-hidden="true" className="h-[55px] max-[1050px]:h-[54px] max-[760px]:h-14" />
      <div className="flex h-[51px] items-center justify-between bg-[#243344] px-[4.5%] text-white max-[1050px]:h-[62px] max-[760px]:h-[51px] max-[760px]:px-4">
<div className="flex items-center gap-[10px] whitespace-nowrap max-[760px]:gap-2">
  <span className="text-[13px] leading-none text-[#a0a0a0]">
    Have any questions? call us
  </span>


<PhoneCall
  aria-hidden="true"
  className="h-[18px] w-[24px] shrink-0 fill-[#f5c23c] text-[#f5c23c] stroke-[#243344] stroke-[0] max-[760px]:h-[15px] max-[760px]:w-[15px]"
/>

<a
  className="ml-[-6px] text-[14px] font-bold leading-none text-white max-[760px]:text-[12px]"
  href="tel:+18182345678"
>
  +1 (818) 23 45 678
</a>

</div>

<SocialIcons/>

      </div>

      <main id="home">
        <section
          className={`relative min-h-[902px] overflow-hidden max-[1050px]:min-h-[820px] max-[760px]:min-h-[680px] ${heroSlide === 0 ? "bg-white" : "bg-[#eee8de]"}`}
          aria-label="XTRA Construction"
        >
          <Image
            className={`z-0 object-cover object-center max-[760px]:object-[58%_center] ${
              heroSlide === 0 ? "opacity-0" : "animate-[fadeIn_0.8s_ease-out_both]"
            }`}
            src="/images/construction-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
          />

{heroSlide === 0 && <HeroStripes />}

<Header/>
{heroSlide === 1 ? (
  <>
   <>
 <div className="absolute left-[9.3%] top-[370px] z-[1] w-[80.4%] animate-[fadeIn_0.8s_ease-out_0.3s_both] max-[1050px]:left-[5%] max-[1050px]:w-[90%] max-[760px]:left-4 max-[760px]:top-[430px] max-[760px]:w-[calc(100%-32px)]">

    {/* Navy box */}
    <div className="flex min-h-[130px] items-center justify-center bg-[#243344] px-[1%] py-[3px] max-[1050px]:min-h-[210px] max-[760px]:min-h-[140px] max-[760px]:px-3">
      <h1 className="m-0 whitespace-nowrap text-center font-['Roboto',Arial,sans-serif] text-[clamp(20px,3.5vw,48px)] font-semibold leading-[1.12] tracking-[-1.5px] text-[#f4c03b] max-[760px]:text-[clamp(16px,3.5vw,28px)] max-[760px]:tracking-[-0.5px]">
        Committed to superior quality and results
      </h1>
    </div>

    {/* Yellow box */}
    <div className="absolute left-1/2 top-[110px] flex min-h-[100px] w-[73.8%] -translate-x-1/2 items-center justify-center bg-[#f4c03b] px-[3%] py-[10px] max-[1050px]:top-[155px] max-[1050px]:min-h-[90px] max-[760px]:top-[110px] max-[760px]:min-h-[75px] max-[760px]:w-[88%] max-[760px]:px-3">
      <p className="m-0 whitespace-nowrap text-center font-['Roboto',Arial,sans-serif] text-[clamp(20px,3.4vw,46px)] font-bold leading-[1.2] tracking-[-1px] text-[#243344] max-[1050px]:text-[clamp(18px,3.6vw,42px)] max-[760px]:whitespace-normal max-[760px]:text-[clamp(16px,4.5vw,26px)] max-[760px]:tracking-[-0.5px]">
        We&apos;ll get it done, like us there are none
      </p>
    </div>

  </div>
</>
  </>
) : (
<div className="absolute left-[3px] top-[280px] z-[1] max-w-[760px] text-[#243344] animate-[fadeIn_0.8s_ease-out_0.3s_both] max-[1050px]:top-[250px] max-[760px]:top-[210px] max-[760px]:w-full">

  {/* START NEW PROJECTS */}
<span className="block pt-[10px] font-['Poppins',Arial,sans-serif] text-[clamp(54px,6vw,110px)] font-bold uppercase leading-[0.85] tracking-[-1px] max-[760px]:text-[clamp(44px,12vw,64px)]">
  <span className="block text-[#243344]">Start</span>
  <span className="block text-[#243344]">New</span>
  <span className="block text-[#f4c03b]">Projects</span>
</span>

  {/* Paragraph */}
<h1 className="mb-0 mt-[45px] font-['Roboto',Arial,sans-serif] text-[clamp(24px,2.3vw,38px)] font-normal leading-[1.45] tracking-normal text-[#243344] max-[760px]:mt-[28px] max-[760px]:text-[clamp(20px,5.5vw,26px)]">
  Don&apos;t get framed by the competition,
  <br className="hidden min-[761px]:block" />
  <span className="min-[761px]:hidden"> </span>
  trust our solid reputation.
</h1>

  {/* Play button + Watch video */}
  <a
    href="#about"
    className="group mt-[70px] inline-flex items-center gap-[48px] max-[760px]:mt-[40px] max-[760px]:gap-6"
  >
    {/* Grey ring that transitions to yellow on hover */}
    <span className="grid h-[104px] w-[104px] shrink-0 place-items-center rounded-full bg-[#e9eaeb] transition-all duration-300  group-hover:scale-105 max-[760px]:h-[80px] max-[760px]:w-[80px]">
<span className="grid h-[88px] w-[88px] place-items-center rounded-full bg-[#363f45] transition-colors duration-300 group-hover:bg-[#f4c03b] max-[760px]:h-[66px] max-[760px]:w-[66px]">
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="ml-[4px] h-[26px] w-[26px] fill-[#f4b92a] transition-colors duration-300 group-hover:fill-[#363f45] max-[760px]:h-[20px] max-[760px]:w-[20px]"
  >
    <path
      d="M6 3.8c0-1 1.1-1.6 2-1.1l12.4 8.2c.8.5.8 1.7 0 2.2L8 21.3c-.9.5-2-.1-2-1.1V3.8Z"
      strokeLinejoin="round"
    />
  </svg>
</span>
    </span>

    <span className="flex flex-col">
      <span className="font-['Roboto',Arial,sans-serif] text-[20px] font-normal text-[#6b7f99] max-[760px]:text-[16px]">
        Watch video
      </span>

      <span className="mt-1 font-['Roboto',Arial,sans-serif] text-[26px] font-bold text-[#243344] transition-colors duration-300 max-[760px]:text-[20px]">
        Why choose us?
      </span>
    </span>
  </a>
</div>
)}
          {/* Slider arrows */}
          <div className="absolute bottom-[120px] right-[50px] z-[3] flex items-center gap-6 max-[760px]:bottom-6 max-[760px]:right-4 max-[760px]:gap-3">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={changeSlide}
              className="grid h-12 w-12 cursor-pointer place-items-center border-0 bg-transparent text-white transition-transform duration-200 hover:-translate-x-1"
            >
              <ChevronLeft aria-hidden="true" className="h-12 w-12 drop-shadow-md" strokeWidth={1.4} />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={changeSlide}
              className="grid h-12 w-12 cursor-pointer place-items-center border-0 bg-transparent text-white transition-transform duration-200 hover:translate-x-1"
            >
              <ChevronRight aria-hidden="true" className="h-12 w-12 drop-shadow-md" strokeWidth={1.4} />
            </button>
          </div>
        </section>


<section
  id="features"
  className="relative overflow-hidden bg-[#243344] pt-[110px] pb-0 text-white max-[760px]:pt-[76px]"
>
  {/* Background image */}
<Image
  src="/images/features-bg.jpg"
  alt=""
  fill
  sizes="100vw"
  quality={100}
  className="z-0 object-cover object-center"
/>

  {/* Dark overlay */}
  <div
    aria-hidden="true"
    className="absolute inset-0 z-0 bg-[#243344]/60"
  />

  <div className="relative z-[1] mx-auto w-[min(1704px,calc(100%-64px))] max-[760px]:w-[calc(100%-36px)]">

    {/* Heading */}
    <div className="flex flex-col items-center text-center">
      <Image
        src="/images/safety-icon.png"
        alt="Safety icon"
        width={80}
        height={67}
        className="block h-[67px] w-[80px] object-contain"
      />

      <span className="mt-[38px] font-['Poppins',Arial,sans-serif] text-[clamp(22px,2vw,32px)] font-normal uppercase tracking-[0.5px] text-[#f4c03b]">
        FEATURES AT A GLANCE
      </span>

      <h2 className="mb-0 mt-[38px] font-['Poppins',Arial,sans-serif] text-[clamp(34px,4.3vw,72px)] font-bold leading-[1.15] tracking-[-2px] text-white max-[760px]:tracking-[-1px]">
        We know what your needs are
      </h2>
    </div>

    {/* Three flip cards */}
    <div className="mt-[100px] grid grid-cols-3 gap-[55px] max-[1400px]:gap-8 max-[1050px]:grid-cols-1 max-[1050px]:gap-5">

      {[
        {
          title: "Building Engineering",
          text: "A Building Engineer is recognised as being expert in the use of technology for the design, construction, assessment and maintenance of the built environment.",
          image: "/images/service-1.jpg",
          weight: "font-medium",
        },
        {
          title: "Safety First",
          text: "Safety First explores the challenges at the heart of needlestick and sharps safety and highlights promising efforts to ensure patient and health care worker safety in hospitals.",
          image: "/images/service-2.jpg",
          weight: "font-normal",
        },
        {
          title: "Road Construction",
          text: "The construction of a new road whether from asphalt or concrete requires the production of an bonded pavement structure, beginning with a stable base.",
          image: "/images/service-3.jpg",
          weight: "font-medium",
        },
      ].map((item) => (
        <article
          key={item.title}
          className="group relative h-[585px] overflow-hidden [perspective:1400px] max-[1400px]:h-[520px] max-[1050px]:h-[480px] max-[760px]:h-[360px]"
        >
          {/* Card wrapper */}
          <div className="absolute inset-0 [transform-style:preserve-3d]">

            {/* Front side */}
            <div className="absolute inset-0 overflow-hidden [transform:rotateX(0deg)] [transform-origin:bottom] [backface-visibility:hidden] [transition:all_700ms_cubic-bezier(0.25,0.1,0.25,1)] group-hover:[transform:rotateX(105deg)] group-focus-within:[transform:rotateX(105deg)] group-hover:opacity-0 group-focus-within:opacity-0 motion-reduce:transition-none">

              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 1050px) 100vw, 33vw"
                className="object-cover"
              />

              {/* Front title */}
              <div className="absolute inset-x-[14px] bottom-[14px] z-[1] flex min-h-[144px] items-center justify-between bg-[#243344]/70 px-[55px] py-7 max-[1400px]:min-h-[120px] max-[1400px]:px-8 max-[1050px]:inset-x-0 max-[1050px]:bottom-0 max-[1050px]:min-h-[100px] max-[1050px]:px-5 max-[1050px]:py-5 max-[760px]:min-h-[82px] max-[760px]:px-4">

                <h3
                  className={`m-0 font-['Poppins',Arial,sans-serif] text-[32px] leading-[1.3] text-white max-[1400px]:text-[26px] max-[1050px]:text-[22px] max-[760px]:text-[18px] ${item.weight}`}
                >
                  {item.title}
                </h3>

                <ChevronUp
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-white"
                />
              </div>
            </div>

            {/* Back side */}
            <div className="invisible absolute inset-0 flex flex-col items-start bg-[#f4c03b] px-[40px] py-[30px] text-[#243344] opacity-0 [transform:rotateX(-105deg)] [transform-origin:bottom] [backface-visibility:hidden] [transition:all_700ms_cubic-bezier(0.25,0.1,0.25,1)] group-hover:visible group-hover:opacity-100 group-hover:[transform:rotateX(0deg)] group-focus-within:visible group-focus-within:opacity-100 group-focus-within:[transform:rotateX(0deg)] motion-reduce:transition-none max-[760px]:px-5 max-[760px]:py-6">

              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 1050px) 100vw, 33vw"
                className="z-0 object-cover opacity-[0.12]"
              />

              {/* Yellow overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 z-0 bg-[#f4c03b]/90"
              />

              {/* Back content */}
              <div className="relative z-[1] flex h-full w-full flex-col items-start">

                <h4 className="m-0 font-['Poppins',Arial,sans-serif] text-[28px] font-bold leading-[1.3] max-[760px]:text-[23px]">
                  {item.title}
                </h4>

                <p className="my-5 text-[17px] leading-[1.7] max-[760px]:text-[15px]">
                  {item.text}
                </p>

                <a
                  href="#services"
                  className="mt-auto inline-flex min-h-[64px] w-[255px] max-w-full items-center justify-center bg-white px-6 text-[17px] font-semibold text-[#243344] transition-colors hover:bg-[#243344] hover:text-white focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[#243344] max-[760px]:min-h-[54px]"
                >
                  Learn More ...
                </a>

              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

<section
  id="about"
  className="overflow-hidden py-[100px] max-[1050px]:py-[80px] max-[760px]:py-[60px]"
>
  <div className="mx-auto grid w-[min(1280px,calc(100%-64px))] grid-cols-2 items-center gap-[70px] max-[1050px]:gap-10 max-[760px]:w-[calc(100%-36px)] max-[760px]:grid-cols-1 max-[760px]:gap-[35px]">

    {/* Left image with yellow background block */}
{/* Left image with hover animation */}
<AboutImage/>
    {/* Right content */}
    <div className="relative text-[#243344]">

      {/* Large background ABOUT text */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[-90px] top-[-100px] z-0 select-none text-[clamp(100px,12vw,200px)] font-extrabold leading-none tracking-[-8px] text-[#fdf8e9] max-[1050px]:left-[-30px] max-[760px]:left-0 max-[760px]:top-[-50px] max-[760px]:text-[100px]"
      >
        ABOUT
      </span>

      {/* Foreground content */}
      <div className="relative z-10 pr-[100px] max-[1050px]:pr-[50px] max-[760px]:pr-[20px]">

        <span className="mb-[79px] block text-[32px] font-medium leading-none text-[#f4c03b] max-[1050px]:mb-[55px] max-[760px]:mb-[30px] max-[760px]:text-[24px]">
          ABOUT OUR COMPANY
        </span>

        <h2 className="mb-[80px] text-[clamp(36px,4vw,74px)] font-bold leading-[1.25] tracking-[-2px] text-black max-[1050px]:mb-[45px] max-[760px]:mb-[25px] max-[760px]:text-[36px] max-[760px]:tracking-[-1px]">
          Always dedicated
          <br />
          and devoted
        </h2>

<p className="mb-[28px] text-[clamp(16px,1.5vw,18px)] leading-[1.8] text-[#8b8b8b] max-[760px]:text-[14px]">
  Slogan creation for your construction company is crucial for the
  overall branding. And branding in today&apos;s world can&apos;t be
  ignored, We hope that the above Construction Slogans. Don&apos;t
  forget to share it on social media and related building communities.
</p>




<ul className="mb-[30px] grid list-none grid-cols-2 gap-x-[20px] gap-y-[22px] p-0 max-[760px]:grid-cols-1 max-[760px]:gap-y-[18px]">
  {[
    "Excellent engineering",
    "Modern & up to date",
    "Grade #1 materials",
    "Structures with long life",
  ].map((item) => (
    <li
      key={item}
      className="group flex items-center gap-[12px] text-[15px] font-normal text-[#243344]"
    >
      {/* Yellow rectangle and check icon */}
      <span
        className="check-box flex h-[40px] w-[40px] shrink-0
        items-center justify-center bg-transparent
        transition-colors duration-300
        group-hover:bg-[#f4c03b]"
      >
        <Check
          aria-hidden="true"
          className="check-icon h-[19px] w-[19px]
          text-[#f4c03b] stroke-[3]
          transition-colors duration-300
          group-hover:text-[#243344]"
        />
      </span>

      {/* Normal-weight label */}
           <span className="font-bold transition-colors duration-300 group-hover:text-[#f4c03b]">
        {item}
      </span>
    </li>
  ))}
</ul>


      </div>
    </div>
  </div>
</section>



        <section className="bg-[#f1f1f1] pt-[112px] pb-[120px] max-[1050px]:py-[88px] max-[760px]:py-[76px]" id="services">
          <div className="mx-auto w-[min(1800px,calc(100%-40px))] max-[760px]:w-[calc(100%-36px)]">
            <SectionHeading eyebrow="WHAT WE CAN DO FOR YOU" title="Our construction services" />
            <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)_minmax(0,1fr)] items-start gap-7 max-[1050px]:grid-cols-1 max-[1050px]:gap-5">
              {services.map((service) => (
                <article className="service-card group mb-[50px] flex flex-col items-center bg-white px-[40px] pt-5 text-center text-[#243344] shadow-[0_10px_50px_0_rgb(36_51_68_/_20%)] transition-colors duration-300 hover:bg-[#f4c03b] focus-within:bg-[#f4c03b] max-[760px]:mb-7 max-[760px]:px-6" key={service.title}>
                  <div className="mb-[25px] grid h-[125px] w-[180px] shrink-0 place-items-center">
                    <Image className="service-card-icon block h-full w-full object-contain" src={service.icon} alt="" width={180} height={125} />
                  </div>
                  <h3 className="mb-5 mt-0 inline-block border-b-4 border-[#f4c03b] pb-[15px] text-[32px] font-bold leading-[1.3] transition-colors duration-300 group-hover:border-white group-hover:text-white group-focus-within:border-white group-focus-within:text-white max-[760px]:text-[27px]">
                    {service.title}
                  </h3>
                  <p className="m-0 text-[18px] leading-[1.8] text-[#8b8b8b] transition-colors duration-300 group-hover:text-white group-focus-within:text-white max-[760px]:text-base">
                    {service.description}
                  </p>
                  <a className="mt-[75px] mb-[-45px] flex h-[94px] w-[250px] max-w-full items-center justify-center gap-3 bg-[#243344] px-5 text-[18px] font-semibold text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#243344] group-focus-within:bg-white group-focus-within:text-[#243344] max-[760px]:mt-[55px] max-[760px]:h-[72px]" href="#contact">
                    Read More <ArrowRight aria-hidden="true" className="h-[17px] w-[17px] transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

<section className="bg-[#f1f1f1] py-[55px] text-[#243344] max-[760px]:py-[35px]">
  <div className="mx-auto flex w-[min(1800px,calc(100%-40px))] items-center gap-[45px] max-[1050px]:gap-7 max-[760px]:w-[calc(100%-36px)] max-[760px]:flex-wrap max-[760px]:gap-5">

    <HardHat
      aria-hidden="true"
      className="h-[112px] w-[112px] shrink-0 text-[#f4c03b] stroke-[1.3] max-[760px]:h-[72px] max-[760px]:w-[72px]"
    />

    <div className="min-w-0 flex-1">
      <h2 className="m-0 whitespace-nowrap text-[clamp(22px,2.5vw,36px)] font-bold leading-[1.25] max-[1050px]:text-[25px] max-[760px]:whitespace-normal max-[760px]:text-[27px]">
        <span className="text-[#f4c03b]">Building a dream</span>{" "}
        shouldn&apos;t be a nightmare!
      </h2>

      <p className="mt-[10px] text-[clamp(17px,1.7vw,25px)] leading-[1.5] text-[#8b8b8b] max-[760px]:mt-2 max-[760px]:text-base">
        We have transforming the ideas and visions into winning projects.
      </p>
    </div>

    <a
      className="group inline-flex h-[100px] w-[280px] shrink-0 items-center justify-center gap-[14px] bg-white px-7 text-[24px] font-semibold text-[#243344] shadow-[0_10px_50px_0_rgb(36_51_68_/_12%)] transition-colors hover:bg-[#243344] hover:text-white max-[1050px]:h-[82px] max-[1050px]:w-[280px] max-[1050px]:text-[22px] max-[760px]:h-[68px] max-[760px]:w-full max-[760px]:text-[19px]"
      href="#contact"
    >
      Free Consultation
      <ArrowRight
        aria-hidden="true"
        className="h-[21px] w-[21px] transition-transform duration-200 group-hover:translate-x-1"
      />
    </a>

  </div>
</section>




<ConstructionProcessSection/>




        <PortfolioSection />

<ConstructionQuoteSection/>

        <TestimonialsSection />

      </main>

      <FooterSection />

      <aside className="fixed right-0 top-[50vh] z-[4] flex w-[50px] flex-col items-center rounded-l-[5px] bg-white py-3 shadow-[0_1px_8px_rgb(0_0_0_/_12%)] max-[760px]:hidden" aria-label="Theme preview tools">
        {previewTools.map(({ label, icon: Icon, accent }) => (
          <span className={`grid h-10 w-full place-items-center text-[#898989] ${accent ? "text-[#7fd342]" : ""}`} key={label} title={label}>
            <Icon aria-hidden="true" className={`h-[21px] w-[21px] stroke-[1.9] ${accent ? "h-[23px] w-[23px] fill-[#7fd342] text-[#7fd342] stroke-[2.2]" : ""}`} />
          </span>
        ))}
      </aside>

      <ScrollToTopButton />
      <CookieNotice />
    </div>
  );
}