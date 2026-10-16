import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Riverview Green Building",
    category: "Building, Road Construction",
    image: "/images/personal_gift-1-600x600.jpg",
  },
  {
    name: "The Langham Hotel",
    category: "Building, Construction",
    image: "/images/tick_tock-1-1-600x600.jpg",
  },
  {
    name: "Villa Rustica Renovation",
    category: "Construction, Road Construction",
    image: "/images/portfolio7-1-600x600.jpg",
  },
  {
    name: "Land Rustica Renovation",
    category: "Building, Maintenance",
    image: "/images/portfolio10-1-600x600.jpg",
  },
  {
    name: "Kitchen And Living Room",
    category: "Architecture, Building",
    image: "/images/portfolio3-1-600x600.jpg",
  },
  {
    name: "House Under The Palms",
    category: "Construction, Road Construction",
    image: "/images/portfolio6-1-600x600.jpg",
  },
  {
    name: "Green House",
    category: "Construction, Road Construction",
    image: "/images/portfolio9-1-600x600.jpg",
  },
  {
    name: "Inside renovation",
    category: "Construction, Road Construction",
    image: "/images/portfolio2-1-600x600.jpg",
  },
];

export default function PortfolioSection() {
  return (
    <section
      className="min-h-[1149px] bg-white py-[112px] max-[1050px]:min-h-0 max-[1050px]:py-[88px] max-[760px]:py-[76px]"
      id="blog"
    >
      <div className="mx-auto w-[min(1540px,calc(100%-64px))] max-[760px]:w-[calc(100%-36px)]">
        <div className="relative mb-[8px] flex h-[350px] flex-col items-center text-center max-[1050px]:mb-[52px] max-[1050px]:h-[315px] max-[760px]:mb-[35px] max-[760px]:h-[230px]">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap text-[clamp(100px,10vw,190px)] font-extrabold leading-none tracking-[-7px] text-[#f4c03b] opacity-[0.09] max-[760px]:top-2 max-[760px]:text-[clamp(68px,18vw,115px)] max-[760px]:tracking-[-4px]"
          >
            SERVICES
          </span>
          <span className="relative z-[1] mt-[62px] text-[clamp(22px,1.8vw,32px)] font-normal uppercase leading-[1.3] text-[#f4b92a] max-[760px]:mt-[43px] max-[760px]:text-[18px]">
            WE ARE PROFESSIONAL
          </span>
          <h2 className="relative z-[1] mt-[73px] text-[clamp(42px,4.2vw,72px)] font-bold leading-[1.2] tracking-[-2px] text-black max-[760px]:mt-10 max-[760px]:text-[36px] max-[760px]:tracking-[-1px]">
            Our latest projects
          </h2>
        </div>
        <div
          className="grid grid-cols-4 gap-[40px] max-[1050px]:grid-cols-3 max-[1050px]:gap-5 max-[760px]:grid-cols-2 max-[760px]:gap-[10px] max-[430px]:grid-cols-2 pl-[35px] pr-[35px]"
          id="projects"
        >
          {projects.map((project) => (
            <a
              className="group relative block min-h-[280px] overflow-hidden bg-[#e6e6e6] max-[760px]:min-h-[220px] max-[430px]:min-h-[180px]"
              href="#contact"
              key={project.name}
            >
              <Image
                className="object-cover transition-transform duration-[450ms] group-hover:scale-[1.04]"
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 760px) 50vw, (max-width: 1100px) 33vw, 25vw"
              />
              <span className="absolute inset-[16px] flex flex-col items-center justify-center bg-[#f4c03b]/85 px-4 text-center text-[#243344] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 max-[760px]:inset-[8px] max-[760px]:px-2 max-[760px]:opacity-100">
                <span className="mb-5 grid h-[100px] w-[100px] shrink-0 place-items-center bg-[#243344] text-[#f4c03b] max-[760px]:mb-4 max-[760px]:h-[62px] max-[760px]:w-[62px]">
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-10 w-10 max-[760px]:h-7 max-[760px]:w-7"
                    strokeWidth={2.5}
                  />
                </span>
                <strong className="max-w-full text-[23px] font-bold leading-[1.3] max-[760px]:text-[15px]">
                  {project.name}
                </strong>
                <span className="mt-2 text-[13px] leading-[1.5] max-[760px]:mt-2 max-[760px]:text-[9px]">
                  {project.category}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
