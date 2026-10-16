
"use client";

import { useState } from "react";
import { ArrowRight, Check, PhoneCall } from "lucide-react";

export default function ConstructionQuoteSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  function submitQuote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Connect your backend or email service here.
    setFormSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="
        relative mt-[150px] overflow-hidden bg-white
        py-[100px]
        max-[1050px]:mt-0
        max-[1050px]:py-[80px]
        max-[760px]:py-[60px]
        
      "
    >
      {/* LEFT NAVY BACKGROUND */}
      <div
        aria-hidden="true"
        className="
          absolute inset-y-0 left-0
          w-[50%] bg-[#243344]
          max-[760px]:w-full
        max-[760px]:h-[650px]
        max-[760px]:bottom-auto
        max-[430px]:h-[680px]
        max-[380px]:h-[720px]
        max-[760px]:rounded-b-[0px]
        max-[760px]:rounded-br-[80px]
      "
      />

      {/* MAIN CONTAINER */}
      <div
        className="
          relative mx-auto
          grid w-[min(1300px,calc(100%-80px))]
          grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]
          items-center gap-0

          max-[1050px]:w-[calc(100%-50px)]
          max-[1050px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]

          max-[760px]:w-[calc(100%-36px)]
          max-[760px]:grid-cols-1
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            relative z-10 min-w-0
            py-[60px] pr-[45px]

            max-[1050px]:py-[45px]
            max-[1050px]:pr-[25px]

            max-[760px]:py-[30px]
            max-[760px]:pr-0
          "
        >
          {/* BACKGROUND QUOTE TEXT */}
          <div className="relative mb-[35px]">

            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute
                left-[-25px] top-[-45px]
                select-none whitespace-nowrap
                text-[clamp(70px,9vw,140px)]
                font-extrabold leading-none
                tracking-[-5px]
                text-white opacity-[0.08]

                max-[1050px]:left-[-15px]
                max-[1050px]:top-[-35px]
                max-[1050px]:text-[100px]

                max-[760px]:left-[-10px]
                max-[760px]:top-[-25px]
                max-[760px]:text-[85px]
              "
            >
              QUOTE
            </span>

            {/* SECTION LABEL */}
            <h3
              className="
                relative z-10 inline-block
                max-w-full
                break-words
               
                px-[5px]
                text-[24px]
                font-normal
                leading-[1.4]
                text-[#f4c03b]

                max-[1050px]:text-[20px]
                max-[760px]:text-[18px]
              "
            >
              INTERESTED IN CONSTRUCTION?
            </h3>
          </div>

          {/* MAIN HEADING */}
          <h2
            className="
              relative z-10 mb-[30px] mt-0
              max-w-[550px]
              text-[clamp(36px,3.5vw,60px)]
              font-bold leading-[1.2]
              tracking-[-1.5px]
              text-white

              max-[1050px]:text-[clamp(34px,4vw,46px)]
              max-[760px]:text-[42px]
              max-[430px]:text-[36px]
            "
          >
            Request a free
            <br />
            and fair quote
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              relative z-10 mb-[30px]
              max-w-[500px]
              text-[20px]
              leading-[1.8]
              text-[#a0a7b0]

              max-[1050px]:text-[18px]
              max-[760px]:text-[17px]
            "
          >
            Slogan creation for your construction company is
            crucial for the overall branding. And branding
            in today&apos;s world can&apos;t be ignored.
            We hope that the above construction slogans
            help you. Don&apos;t forget to share them on
            social media.
          </p>

          {/* PHONE NUMBER */}
          <a
            className="
              group relative z-10
              inline-flex items-center gap-[13px]
              text-[18px] font-semibold
              text-[#f4c03b]

              max-[760px]:text-[16px]
            "
            href="tel:+18182345678"
          >
            <PhoneCall
              aria-hidden="true"
              className="
                h-[22px] w-[22px]
                shrink-0
                transition-transform duration-300
                group-hover:rotate-[-12deg]
              "
            />

            <span>+1 (818) 23 45 678</span>
          </a>
        </div>

        {/* RIGHT CONTACT FORM */}
        <div
          className="
            relative z-10 min-w-0
            bg-[#f4c03b]
            p-[45px]

            max-[1050px]:p-[30px]

            max-[760px]:mt-[40px]
            max-[760px]:p-[25px]

            max-[430px]:p-[20px]
          "
        >
          <form
            className="
              flex flex-col gap-5
              text-[#243344]
            "
            onSubmit={submitQuote}
          >
            {formSubmitted ? (
              /* SUCCESS MESSAGE */
              <div
                className="
                  grid min-h-[330px]
                  content-center
                  justify-items-center
                  text-center text-[#243344]
                "
                role="status"
              >
                <Check
                  aria-hidden="true"
                  className="
                    h-11 w-11
                    rounded-full
                    bg-white p-[10px]
                  "
                />

                <h3 className="mt-5 text-xl font-semibold">
                  Thank you for your message.
                </h3>

                <p className="mt-2 text-[16px]">
                  We will get back to you soon.
                </p>
              </div>
            ) : (
              <>
                {/* NAME AND EMAIL */}
                <div
                  className="
                    grid grid-cols-2
                    gap-[20px]

                    max-[430px]:grid-cols-1
                  "
                >
                  <label
                    className="
                      flex min-w-0 flex-col gap-2
                      text-[15px] font-normal
                      text-[#5b5544]
                    "
                  >
                    Your Name (required)

                    <input
                      className="
                        h-[65px] w-full min-w-0
                        border-0 bg-white
                        px-[15px]
                        text-[16px] text-[#243344]
                        outline-none
                        transition-all duration-300
                        focus:ring-2 focus:ring-[#243344]
                      "
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                    />
                  </label>

                  <label
                    className="
                      flex min-w-0 flex-col gap-2
                      text-[15px] font-normal
                      text-[#5b5544]
                    "
                  >
                    Your Email (required)

                    <input
                      className="
                        h-[65px] w-full min-w-0
                        border-0 bg-white
                        px-[15px]
                        text-[16px] text-[#243344]
                        outline-none
                        transition-all duration-300
                        focus:ring-2 focus:ring-[#243344]
                      "
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                    />
                  </label>
                </div>

                {/* SUBJECT AND DEPARTMENT */}
                <div
                  className="
                    grid grid-cols-2
                    gap-[20px]

                    max-[430px]:grid-cols-1
                  "
                >
                  <label
                    className="
                      flex min-w-0 flex-col gap-2
                      text-[15px] font-normal
                      text-[#5b5544]
                    "
                  >
                    Subject

                    <input
                      className="
                        h-[65px] w-full min-w-0
                        border-0 bg-white
                        px-[15px]
                        text-[16px] text-[#243344]
                        outline-none
                        transition-all duration-300
                        focus:ring-2 focus:ring-[#243344]
                      "
                      name="subject"
                      type="text"
                    />
                  </label>

                  <label
                    className="
                      flex min-w-0 flex-col gap-2
                      text-[15px] font-normal
                      text-[#5b5544]
                    "
                  >
                    Department

                    <select
                      className="
                        h-[65px] w-full min-w-0
                        border-0 bg-white
                        px-[15px]
                        text-[16px] text-[#243344]
                        outline-none
                        transition-all duration-300
                        focus:ring-2 focus:ring-[#243344]
                      "
                      name="department"
                      defaultValue="Business Department"
                    >
                      <option>Business Department</option>
                      <option>Personal Department</option>
                      <option>Support Department</option>
                      <option>Others</option>
                    </select>
                  </label>
                </div>

                {/* MESSAGE */}
                <label
                  className="
                    flex min-w-0 flex-col gap-2
                    text-[15px] font-normal
                    text-[#5b5544]
                  "
                >
                  Your Message

                  <textarea
                    className="
                      min-h-[180px] w-full min-w-0
                      resize-y border-0
                      bg-white px-[15px] py-[15px]
                      text-[16px] text-[#243344]
                      outline-none
                      transition-all duration-300
                      focus:ring-2 focus:ring-[#243344]
                    "
                    name="message"
                    rows={5}
                  />
                </label>

                {/* SUBMIT BUTTON */}
                <button
                  className="
                    group inline-flex
                    h-[60px] w-max min-w-[145px]
                    cursor-pointer
                    items-center justify-center
                    gap-[14px]
                    border-0 bg-[#243344]
                    px-6
                    text-[16px] font-semibold
                    text-white
                    transition-colors duration-300
                    hover:bg-white hover:text-[#243344]

                    focus-visible:outline
                    focus-visible:outline-[3px]
                    focus-visible:outline-[#243344]
                    focus-visible:outline-offset-[3px]
                  "
                  type="submit"
                >
                  Send

                  <ArrowRight
                    aria-hidden="true"
                    className="
                      h-[18px] w-[18px]
                      transition-transform duration-300
                      group-hover:translate-x-[5px]
                    "
                  />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
