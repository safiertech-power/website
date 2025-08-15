export const siteConfig = {
  name: "Safiertech Solar",
  description:
    "Leading solar EPC company in Uttar Pradesh. End-to-end solar solutions with subsidy support, financing, and 5-year maintenance.",
  url: "https://safiertech.com",

  contact: {
    email: "info@safiertech.com",
    phone: "8745078808",
    tel: "+91 120 631 3324",
    address: {
      street: "518, Safiertech, 5 No. Bhatta Road, Rajnagar Extension",
      city: "Ghaziabad",
      state: "Uttar Pradesh",
      pincode: "201017",
      country: "India",
    },
    googleMapsUrl:
      "https://maps.google.com/?q=518,+Safiertech,+5+No.+Bhatta+Road,+Rajnagar+Extension,+Ghaziabad,+201017,+UP",
  },

  social: {
    instagram: {
      handle: "safiertech_solar",
      url: "https://www.instagram.com/safiertech_solar",
    },
  },

  branches: [
    {
      name: "Headquarters",
      city: "Ghaziabad",
      address: "518, Safiertech, 5 No. Bhatta Road, Rajnagar Extension, Ghaziabad, 201017, UP",
    },
    {
      name: "Branch Office",
      city: "Modinagar",
      address: "Modinagar, Uttar Pradesh",
    },
    {
      name: "Branch Office",
      city: "B.B. Nagar (Bulandshahr)",
      address: "B.B. Nagar (Bulandshahr), Uttar Pradesh",
    },
    {
      name: "Branch Office",
      city: "Meerut (Modipuram)",
      address: "Meerut (Modipuram), Uttar Pradesh",
    },
  ],

  products: {
    externalStoreUrl: "https://store.safiertech.com",
  },

  api: {
    quoteEndpoint: process.env.NEXT_PUBLIC_QUOTE_ENDPOINT || "https://api.safiertech.com/quote.php",
  },
} as const

export type SiteConfig = typeof siteConfig
