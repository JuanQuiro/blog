import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import IconDiscord from "@/assets/icons/IconDiscord.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dreyz/",
    linkTitle: `${SITE.title} en LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/JuanQuiro",
    linkTitle: `${SITE.title} en GitHub`,
    icon: IconGitHub,
  },
  {
    name: "Mail",
    href: "mailto:juanquirozsana@gmail.com",
    linkTitle: `Enviar un correo a ${SITE.title}`,
    icon: IconMail,
  },
  {
    name: "Discord",
    href: "https://discord.com/users/dreyz4970",
    linkTitle: `${SITE.title} en Discord`,
    icon: IconDiscord,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Compartir este post vía WhatsApp`,
    icon: IconWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Compartir este post en Facebook`,
    icon: IconFacebook,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Compartir este post en X`,
    icon: IconBrandX,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Compartir este post vía Telegram`,
    icon: IconTelegram,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: `Compartir este post en Pinterest`,
    icon: IconPinterest,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Compartir este post vía correo`,
    icon: IconMail,
  },
] as const;
