import Image from "next/image";

export default function HeroStripes() {
  return (
    <>
      {/* 1. Light stripes (BEHIND the man) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        {/* Stripe 1 - lightest */}
        <div
          className="absolute inset-0 bg-[#faf0cf] animate-[stripeIn_0.8s_cubic-bezier(0.22,1,0.36,1)_0s_both]"
          style={{ clipPath: "polygon(88% 0, 130% 0, 130% 100%, 41% 100%)" }}
        />
        {/* Stripe 2 - medium */}
        <div
          className="absolute inset-0 bg-[#f7e2a0] animate-[stripeIn_0.8s_cubic-bezier(0.22,1,0.36,1)_0.3s_both]"
          style={{ clipPath: "polygon(98% 0, 130% 0, 130% 100%, 52% 100%)" }}
        />
      </div>

      {/* 2. Man image (middle layer) - taller, so the helmet sits higher */}
<Image
  className="absolute bottom-0 right-[12%] z-[1] h-[108%] w-auto max-w-[60vw] object-contain object-bottom animate-[manIn_0.9s_ease-out_1.4s_both] max-[760px]:right-[-10%] max-[760px]:h-[62%] max-[760px]:max-w-[90vw]"
  src="/images/man-model.png"
  alt=""
  width={900}
  height={830}
  priority
  sizes="60vw"
/>

      {/* 3. Solid yellow stripe (IN FRONT of the man) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
      >
        <div
          className="absolute inset-0 bg-[#f4c03b] animate-[stripeIn_0.8s_cubic-bezier(0.22,1,0.36,1)_0.6s_both]"
          style={{ clipPath: "polygon(110% 0, 130% 0, 130% 100%, 64% 100%)" }}
        />
      </div>
    </>
  );
}