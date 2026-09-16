export type SiteLink = {
  label: string;
  href: string;
  external?: boolean;
  download?: string;
};

export type SiteContent = {
  name: string;
  positioning: string;
  status: string;
  links: SiteLink[];
  about: {
    paragraphs: string[];
  };
  writing: {
    moreLabel: string;
    moreHref: string;
  };
  footer: {
    email: string;
    emailHref: string;
    copyright: string;
  };
};

export const site: SiteContent = {
  name: "Chaitanya Raj",
  positioning:
    "Electrical engineer turned PM. I write the SQL myself, then argue about what it means.",
  status:
    "NIT Agartala '26, business analytics minor from IIT Mandi. Two PM internships across B2B SaaS, fintech and health-tech — 20+ discovery interviews, wireframes, UAT, and the SQL underneath. I'm most useful where the requirements are still vague. Looking for full-time APM/PM roles.",
  links: [
    {
      label: "12rajchaitanya@gmail.com",
      href: "mailto:12rajchaitanya@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chaitanya-raj-5c51",
      external: true,
    },
    {
      label: "Résumé",
      href: "/resume.pdf",
      external: true,
      download: "Chaitanya-Raj-Resume.pdf",
    },
    {
      label: "GitHub",
      href: "https://github.com/captainchaitanya",
      external: true,
    },
  ],
  about: {
    paragraphs: [
      "I studied electrical engineering at NIT Agartala and picked up a business analytics minor from IIT Mandi somewhere in the middle, which is roughly when I realised I cared more about why a product was built than how the circuit worked.",
      "What I've built since spans fraud scoring on UPI transactions, a cross-media recommendation engine, and credit underwriting for people with no CIBIL history. Different domains, same shape of problem: modelling users the existing system handles badly.",
      "I did the NextLeap PM Fellowship (Cohort 44) and two PM internships, and I'm looking for an APM or PM role where I can keep doing the analysis myself rather than waiting on someone else's dashboard.",
      "Outside of this I read fiction. Currently Assassin's Apprentice, which is the first of the sixteen Robin Hobb books I've been warned about.",
    ],
  },
  writing: {
    moreLabel: "More on Medium →",
    moreHref: "https://medium.com/@12rajchaitanya",
  },
  footer: {
    email: "12rajchaitanya@gmail.com",
    emailHref: "mailto:12rajchaitanya@gmail.com",
    copyright: "© 2026 Chaitanya Raj",
  },
};
