"use client";

import { useState } from "react";
import { Cookie } from "lucide-react";

export default function CookieNotice() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
<aside
  className="fixed bottom-5 left-5 z-[60] flex w-[min(710px,calc(100vw-40px))] items-center gap-3 rounded-[14px] bg-white p-3 text-[#737373] shadow-[0_3px_20px_rgb(0_0_0_/_20%)] max-[760px]:bottom-4 max-[760px]:left-3 max-[760px]:w-[calc(100vw-24px)] max-[430px]:gap-2 max-[430px]:p-[10px]"
  aria-label="Cookie notice"
>
      <Cookie
        aria-hidden="true"
        className="h-7 w-7 shrink-0 stroke-[1.6] text-[#243344] max-[430px]:h-6 max-[430px]:w-6"
      />
      <p className="m-0 min-w-0 flex-1 text-[16px] leading-[1.35] max-[430px]:text-[12px]">
        This website uses cookies to improve user experience.
      </p>
      <button
        type="button"
        onClick={() => setVisible(false)}
        className="shrink-0 rounded-[20px] border-0 bg-[#243344] px-4 py-[10px] text-[15px] font-semibold leading-none text-white transition-colors hover:bg-[#f4c03b] hover:text-[#243344] max-[430px]:px-3 max-[430px]:py-[9px] max-[430px]:text-[11px]"
      >
        Accept and close
      </button>
    </aside>
  );
}
