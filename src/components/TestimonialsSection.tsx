"use client";

import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const PULL_DISTANCE = 120; // px you must pull the card to swap
const EXIT_TIME = 350; // ms the card takes to fly off the edge

// "|" marks a forced line break on desktop (> 1050px).
// On smaller screens it becomes a normal space and the text wraps naturally.
const testimonials = [
  {
    name: "Michael Anderson",
    image: "/images/team3.jpg",
    quote:
      '"Greiner has been a critical partner to us|on the redevelopment of West End|Center Office Park. The team of project|managers, supervisors, and their support|teams can\'t be rivaled by any other|contractor I have worked with over the|past 15 years."',
  },
  {
    name: "Richard Dowson",
    image: "/images/team1.jpg",
    quote:
      '"Great Experience!! Michael has made|the whole process easy from the|planning stage to the final plant going in.|Steve & his crew did a great job. I felt like|Lavish Gardens really listened to what I|wanted, gave me ideas, and helped me|decide how to make my backyard a|place to relax and enjoy the view."',
  },
  {
    name: "Lisa Jordan",
    image: "/images/team2.jpg",
    quote:
      "“I just wanted to say thank you to all of|you for being so fun to work with and|being rock stars with the best attitudes|EVER on this 16th floor build for SPS. It|means a great deal to me that you all|come to the table every week with smiles|on your faces and ready to solve|whatever issue.”",
  },
];

function renderQuote(text: string) {
  const lines = text.split("|");
  return lines.map((line, i) => (
    <Fragment key={i}>
      {line}
      {i < lines.length - 1 && (
        <>
          <span className="min-[1051px]:hidden"> </span>
          <br className="hidden min-[1051px]:inline" />
        </>
      )}
    </Fragment>
  ));
}

type Enter = "from-right" | "from-left" | null;

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0); // card x position while pulling / flying off
  const [dragging, setDragging] = useState(false);
  const [enter, setEnter] = useState<Enter>(null);
  const [inView, setInView] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const dragStartX = useRef<number | null>(null);
  const busy = useRef(false);

  const total = testimonials.length;
  const activeTestimonial = testimonials[activeIndex];
  const nextTestimonial = testimonials[(activeIndex + 1) % total];

  // dir = 1 -> card leaves to the left, next card comes from the right
  // dir = -1 -> card leaves to the right, previous card comes from the left
  const swap = (dir: 1 | -1, target?: number) => {
    if (busy.current) return;
    busy.current = true;
    setDragging(false);

    const edge = Math.max(window.innerWidth, 900);
    setOffset(-dir * edge);

    setTimeout(() => {
      setActiveIndex((current) =>
        target !== undefined ? target : (current + dir + total) % total
      );
      setEnter(dir === 1 ? "from-right" : "from-left");
      setOffset(0);

      setTimeout(() => {
        setEnter(null);
        busy.current = false;
      }, 600);
    }, EXIT_TIME);
  };

  const goTo = (index: number) => {
    if (index === activeIndex) return;
    swap(index > activeIndex ? 1 : -1, index);
  };

  // Reveal on scroll
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Pull the card with the mouse / finger
  const handlePointerDown = (e: React.PointerEvent<HTMLElement>) => {
    if (busy.current) return;
    dragStartX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (dragStartX.current === null) return;
    setOffset(e.clientX - dragStartX.current);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLElement>) => {
    if (dragStartX.current === null) return;

    const distance = e.clientX - dragStartX.current;
    dragStartX.current = null;

    if (distance <= -PULL_DISTANCE) swap(1);
    else if (distance >= PULL_DISTANCE) swap(-1);
    else {
      setDragging(false);
      setOffset(0); // snap back
    }
  };

  const handlePointerCancel = () => {
    dragStartX.current = null;
    setDragging(false);
    setOffset(0);
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="testimonials-title"
      className={`${poppins.className} overflow-hidden bg-[#f5f5f5] py-[70px] max-[1050px]:py-[55px] max-[760px]:py-[45px]`}
    >
      <style>{`
        @keyframes cardFromRight {
          from { opacity: 0; transform: translateX(160px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes cardFromLeft {
          from { opacity: 0; transform: translateX(-160px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .card-from-right { animation: cardFromRight 0.55s ease both; }
        .card-from-left { animation: cardFromLeft 0.55s ease both; }
        @media (prefers-reduced-motion: reduce) {
          .card-from-right, .card-from-left { animation: none; }
        }
      `}</style>

      <div
        className={`transition-all duration-700 ease-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Section Heading */}
        <div className="relative mx-auto mt-[30px] flex min-h-[190px] w-[min(1200px,calc(100%-64px))] flex-col items-center text-center max-[760px]:min-h-[150px] max-[760px]:w-[calc(100%-36px)]">
          {/* Background Heading */}
          <span
            aria-hidden="true"
          className="pointer-events-none absolute left-0 top-[-45px] w-full whitespace-nowrap text-center text-[clamp(60px,8vw,130px)] font-black leading-none tracking-[-5px] text-[#f4c03b] opacity-[0.09] max-[760px]:top-[-20px] max-[760px]:tracking-[-2px]"
          >
            TESTIMONIALS
          </span>

          {/* Small Heading */}
          <p className="relative z-[1] mb-[25px] mt-0 text-[clamp(18px,1.5vw,27px)] font-normal uppercase leading-[1.3] text-[#f4b92a] max-[760px]:mb-4">
            SEE WHAT SAYS OUR HAPPY CLIENTS
          </p>

          {/* Main Heading */}
          <h2
            id="testimonials-title"
            className="relative z-[1] m-0 text-[clamp(35px,3.2vw,58px)] font-extrabold leading-[1.2] tracking-[-1.5px] text-black max-[760px]:text-[30px] max-[760px]:tracking-[-1px]"
          >
            Our happy customers
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="relative mx-auto mt-[55px] flex min-h-[380px] w-[min(1250px,calc(100%-48px))] select-none items-center justify-center max-[1050px]:mt-[45px] max-[760px]:mt-[30px] max-[760px]:min-h-0 max-[760px]:w-[calc(100%-36px)]">
          {/* Main Testimonial Card (pull it to swap) */}
          <article
            aria-live="polite"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            style={{
              transform: `translateX(${offset}px)`,
              transition: dragging
                ? "none"
                : `transform ${EXIT_TIME}ms ease-in`,
            }}
            className={`relative z-[1] min-h-[320px] w-[min(850px,100%)] touch-pan-y bg-white px-[160px] pb-[90px] pt-[100px] text-left shadow-[0_15px_55px_rgb(36_51_68_/_10%)] min-[1051px]:min-h-[600px] max-[1050px]:min-h-[300px] max-[1050px]:w-full max-[1050px]:px-[120px] max-[1050px]:pb-[80px] max-[1050px]:pt-[65px] max-[760px]:min-h-0 max-[760px]:px-5 max-[760px]:pb-[85px] max-[760px]:pt-[165px] ${
              enter === "from-right"
                ? "card-from-right"
                : enter === "from-left"
                ? "card-from-left"
                : ""
            }`}
          >
            {/* Left Customer Image (moves together with the card) */}
            <div className="absolute left-[-100px] top-[-50px] h-[190px] w-[210px] max-[1050px]:left-[-65px] max-[1050px]:top-[-35px] max-[1050px]:h-[180px] max-[1050px]:w-[180px] max-[760px]:left-1/2 max-[760px]:top-[-25px] max-[760px]:h-[150px] max-[760px]:w-[150px] max-[760px]:-translate-x-1/2">
              {/* Left Yellow Frame */}
              <span
                aria-hidden="true"
                className="absolute bottom-[-15px] left-[-15px] right-[15px] top-[15px] bg-[#f4c03b]"
              />

              {/* Left Customer Photo */}
              <Image
                src={activeTestimonial.image}
                alt=""
                fill
                draggable={false}
                sizes="(max-width: 760px) 150px, (max-width: 1050px) 180px, 210px"
                className="relative z-[1] object-cover"
              />
            </div>

            {/* Customer Quote */}
            <p className="m-0 text-[25.6px] leading-[1.8] text-[#243344] min-[1051px]:whitespace-nowrap max-[1050px]:text-[22px] max-[760px]:text-[16px] max-[760px]:leading-[1.6]">
              {renderQuote(activeTestimonial.quote)}
            </p>

            {/* Customer Name */}
            <p className="mb-0 mt-[35px] text-[18px] italic text-[#aaaaaa] max-[760px]:mt-6 max-[760px]:text-[15px]">
              - {activeTestimonial.name}
            </p>

            {/* Decorative Quote Icon (filled round "99" mark) */}
            <svg
              aria-hidden="true"
              viewBox="0 0 96 62"
              className="pointer-events-none absolute bottom-[70px] right-[75px] h-[90px] w-auto fill-[#f4c03b] opacity-[0.22] max-[1050px]:bottom-[45px] max-[1050px]:right-8 max-[1050px]:h-[70px] max-[760px]:bottom-10 max-[760px]:right-5 max-[760px]:h-[40px]"
            >
              <path d="M40 18C40 8 32 0 22 0C12 0 4 8 4 18C4 28 12 36 22 36C24 36 26 35.6 28 35C26 44 18 50 6 52L8 60C30 56 40 40 40 18Z" />
              <path
                transform="translate(52 0)"
                d="M40 18C40 8 32 0 22 0C12 0 4 8 4 18C4 28 12 36 22 36C24 36 26 35.6 28 35C26 44 18 50 6 52L8 60C30 56 40 40 40 18Z"
              />
            </svg>
          </article>

          {/* Right Customer Preview (next person, decorative) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-75px] top-0 z-0 hidden h-[190px] w-[210px] overflow-visible opacity-30 min-[1200px]:block"
          >
            {/* Right Yellow Frame */}
            <span className="absolute bottom-[-15px] left-[-15px] right-[15px] top-[15px] bg-[#f4c03b]" />

            {/* Right Preview Image */}
            <span className="absolute inset-0 z-[1] block overflow-hidden">
              <Image
                src={nextTestimonial.image}
                alt=""
                fill
                draggable={false}
                sizes="210px"
                className="object-cover"
              />
            </span>
          </div>
        </div>

        {/* Slider Navigation Dots (below the card) */}
        <div
          className="mt-[60px] flex justify-center gap-[10px] max-[760px]:mt-10"
          role="group"
          aria-label="Testimonial slides"
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              aria-pressed={activeIndex === index}
              onClick={() => goTo(index)}
              className={`h-[7px] cursor-pointer border-0 p-0 transition-all duration-300 ${
                activeIndex === index
                  ? "w-[36px] bg-[#f4c03b]"
                  : "w-[22px] bg-[#f9e8b7]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}