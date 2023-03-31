import { intl } from "../utils";
import { INTL } from "./intl";
import phone from "../images/phone.svg";
import whatsapp from "../images/whatsapp.svg";
import telegram from "../images/telegram.svg";

export const navLinks = [
  { href: "#services", title: intl(INTL.HEADER.SERVICES) },
  { href: "#widgets", title: intl(INTL.HEADER.WIDGETS) },
  { href: "#integrations", title: intl(INTL.HEADER.INTEGRATIONS) },
  { href: "#cases", title: intl(INTL.HEADER.CASES) },
  { href: "#certificates", title: intl(INTL.HEADER.CERTIFICATES) },
];
export const socialLinks = [
  { href: "/telegram", title: "Telegram", icon: telegram },
  { href: "/whatsapp", title: "Whatsapp", icon: whatsapp },
  { href: "/phone", title: "Телефон", icon: phone },
];
export const companyLinks = [
  { href: "/partner", title: intl(INTL.ABOUT.PARTNER) },
  { href: "/vacancy", title: intl(INTL.ABOUT.VACANCY) },
];
export const menuLinksFirstPart = [
  { href: "/costs", title: intl(INTL.MENU.COSTS) },
  { href: "/services", title: intl(INTL.MENU.SERVICES) },
  { href: "/widgets", title: intl(INTL.MENU.WIDGETS) },
  { href: "/integrations", title: intl(INTL.MENU.INTEGRATIONS) },
  { href: "/clients", title: intl(INTL.MENU.CLIENTS) },
];
export const menuLinksSecondPart = [
  { href: "/cases", title: intl(INTL.MENU.CASES) },
  { href: "/letters", title: intl(INTL.MENU.LETTERS) },
  { href: "/cert", title: intl(INTL.MENU.CERTIFICATES) },
  { href: "/youtube", title: intl(INTL.MENU.YOUTUBE) },
  { href: "/qa", title: intl(INTL.MENU.Q_A) },
];
export const contactsLinks = [
  { href: "/phone", title: intl(INTL.CONTACTS.PHONE) },
];

export const footerLinks = [
  { href: "#main", title: intl(INTL.COPYRIGHT.COMPANY) },
  { href: "/politics", title: intl(INTL.COPYRIGHT.POLITICS) },
];
