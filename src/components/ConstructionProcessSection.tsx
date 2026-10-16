import Image from "next/image";

export default function ConstructionProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Agency / Bidding",
      description: "Ensure design documents are reviewed and permitted",
    },
    {
      number: "02",
      title: "Construction",
      description: "Helps to coordinate furnishings and move-in process",
    },
    {
      number: "03",
      title: "Project Execution",
      description: "Client directs move in of equipment, operations & staff",
    },
  ];

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-white py-[75px] max-[1050px]:py-[60px] max-[760px]:py-[45px]"
    >
      <div className="mx-auto grid w-[min(1704px,calc(100%-64px))] grid-cols-2 items-stretch gap-[45px] max-[1050px]:w-[calc(100%-48px)] max-[1050px]:gap-8 max-[760px]:w-[calc(100%-36px)] max-[760px]:grid-cols-1 max-[760px]:gap-[35px]">

        {/* LEFT CONTENT */}
        <div className="relative z-[1]">
          <div className="relative mb-[18px]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-[-12px] text-[85px] font-extrabold leading-none tracking-[-3px] text-[#f4c03b] opacity-[0.10] max-[1050px]:text-[65px] max-[760px]:text-[55px]"
            >
              HOW?
            </span>

            <h3 className="relative z-10 m-0 text-[23px] font-normal leading-[1.4] text-[#f4c03b] max-[760px]:text-[18px]">
              PROCESS OF CONSTRUCTION
            </h3>
          </div>

          <h2 className="mb-[30px] mt-0 text-[clamp(44px,4.5vw,68px)] font-bold leading-[1.2] tracking-[-1.8px] text-black max-[1050px]:text-[44px] max-[760px]:mb-[22px] max-[760px]:text-[34px] max-[760px]:tracking-[-1px]">
            How it works
            <br />
            in construction?
          </h2>

          <p className="mb-[50px] mt-0 max-w-[680px] text-[clamp(18px,1.5vw,26px)] leading-[1.8] text-[#8b8b8b] max-[1050px]:mb-[35px] max-[760px]:mb-[25px] max-[760px]:text-[16px]">
            Slogan creation for your construction company is crucial for the
            overall branding.
          </p>

          {/* IMAGE WITH YELLOW BACKGROUND */}
{/* IMAGE WITH YELLOW BACKGROUND */}
{/* IMAGE WITH YELLOW BACKGROUND */}
<div className="relative ml-[15px] mr-[30px] mb-[20px] max-[1050px]:ml-[15px] max-[1050px]:mr-[20px] max-[760px]:ml-[10px] max-[760px]:mr-[10px] max-[760px]:mb-[15px]">

  {/* Yellow background box */}
  <span
    aria-hidden="true"
    className="absolute left-[-20px] right-[8%] top-[40px] bottom-[-20px] bg-[#f4c03b] max-[1050px]:left-[-15px] max-[1050px]:top-[30px] max-[1050px]:bottom-[-15px] max-[760px]:left-[-10px] max-[760px]:top-[20px] max-[760px]:bottom-[-15px]"
  />

  {/* Construction image */}
  <Image
    src="/images/process.jpg"
    alt="Construction workers carrying out a project"
    width={620}
    height={390}
    className="relative z-[1] block h-auto w-full object-cover"
    sizes="(max-width: 760px) 100vw, 50vw"
  />

</div>
        </div>

        {/* RIGHT SIDE - DARK BACKGROUND */}
        <div className="process-steps relative z-0 flex flex-col justify-center py-[50px] max-[1050px]:py-[35px] max-[760px]:py-[25px]">

          {/* Navy background */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[115px] right-[-100vw] top-0 z-[-1] bg-[#243344] max-[1050px]:left-[65px] max-[760px]:left-[-100vw]"
          />

          {/* PROCESS STEPS */}
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative flex min-h-[230px] items-center transition-transform duration-500 ease-out max-[1050px]:min-h-[170px] max-[760px]:min-h-[130px] max-[760px]:gap-4"
            >

              {/* NUMBER TILE */}
              <div
                className="process-step-number relative z-[1] ml-[28px] grid h-[140px] w-[140px] shrink-0 place-items-center bg-[#f4c03b] text-[66px] font-light leading-none text-white transition-all duration-500 ease-out group-hover:z-20 group-hover:-translate-x-3 group-hover:bg-white group-hover:text-[#243344] group-hover:shadow-[0_10px_40px_rgb(36_51_68_/_20%)] max-[1050px]:ml-4 max-[1050px]:h-[130px] max-[1050px]:w-[130px] max-[1050px]:text-[52px] max-[760px]:ml-0 max-[760px]:h-[85px] max-[760px]:w-[85px] max-[760px]:text-[34px]"
              >
                {step.number}
              </div>

              {/* TITLE AND DESCRIPTION */}
              <div
                className="process-step-content min-w-0 pl-[50px] pr-[15px] transition-transform duration-500 ease-out group-hover:-translate-x-3 max-[1050px]:pl-8 max-[760px]:pl-0 max-[760px]:pr-0"
              >

                {/* Title */}
                <h3
                  className="mb-[10px] mt-0 text-[clamp(26px,2.5vw,42px)] font-bold leading-[1.2] text-white transition-all duration-500 ease-out group-hover:text-[#f4c03b] max-[1050px]:text-[30px] max-[760px]:text-[19px]"
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="m-0 max-w-[500px] text-[clamp(17px,1.4vw,24px)] leading-[1.7] text-[#aaaaaa] transition-all duration-500 ease-out group-hover:text-white max-[1050px]:text-[19px] max-[760px]:text-[14px]"
                >
                  {step.description}
                </p>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}