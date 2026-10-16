import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/XtraTheme",
    Icon: FaFacebookF,
    hoverBg: "hover:bg-[#3b5998]",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/Xtra_Theme",
    Icon: FaXTwitter,
    hoverBg: "hover:bg-[#1DA1F2]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/XtraTheme/",
    Icon: FaInstagram,
    hoverBg:
      "hover:bg-[linear-gradient(to_bottom,#515bd4_0%,#8134af_25%,#dd2a7b_50%,#f58529_80%,#feda77_100%)]",
  },
  {
    label: "LinkedIn",
    href: "#",
    Icon: FaLinkedinIn,
    hoverBg: "hover:bg-[#0A66C2]",
  },
];

export default function SocialIcons() {
  return (
    <div className="flex items-center self-center" aria-label="Social media">
      {socials.map(({ label, href, Icon, hoverBg }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={label}
          className={`group relative grid h-[60px] w-[42px] shrink-0 place-items-center text-[#f6f7f9] transition-colors duration-300 hover:text-white max-[760px]:h-[48px] max-[760px]:w-[34px] ${hoverBg}`}
        >
          <Icon
            stroke="currentColor"
            strokeWidth={14}
            className="text-[14px] group-hover:animate-[spin360_0.7s_ease-in-out] max-[760px]:text-[16px]"
          />

          <span className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap bg-[#233446] px-6 py-3 text-[10px] font-medium text-[#f5b82e] opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 max-[760px]:hidden">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
}