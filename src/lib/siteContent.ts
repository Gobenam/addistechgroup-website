export const brandTurquoise = "#00e0d1";

export const logoUrl = "/images/addis-tech-group-logo.jpg";

// Real URLs and photos can be swapped here without touching the components.
export const siteContact = {
  email: "customerservice@addispcb.com",
  phones: [
    {
      region: "Ethiopia",
      numbers: ["+251 928 104 489", "+251 912 225 960"],
    },
    {
      region: "USA",
      numbers: ["+1 848 482 4896"],
    },
  ],
  location: "Ayer Tena, Addis Ababa, Ethiopia",
} as const;

export const socialLinks = [
  {
    name: "LinkedIn",
    href: null,
  },
  {
    name: "Facebook",
    href: null,
  },
  {
    name: "Instagram",
    href: null,
  },
] as const;

export const serviceImages = {
  design: "/images/addis-tech-design.webp",
  fabrication: "/images/addis-tech-fabrication.webp",
  assembly: "/images/addis-tech-assembly.webp",
} as const;

export const productImages = {
  addisThings: "/images/addis-things-iot-devices.webp",
  addisMedical: "/images/addis-medical-devices.webp",
} as const;
