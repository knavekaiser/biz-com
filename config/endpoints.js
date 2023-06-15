const baseApiUrl = process.env.BIZ_APP_BASE_URL;
const baseApiUrlPublic = process.env.NEXT_PUBLIC_BIZ_APP_BASE_URL;

const endpoints = {
  //------------Backend------------
  server: {
    baseApiUrl,
    siteConfig: `${baseApiUrl}/api/site-config`,
    browse: `${baseApiUrl}/api/browse`,
    getDynamicPageFiles: `${baseApiUrl}/api/dynamic-page-files`,
    sitemapUrls: `${baseApiUrl}/api/sitemap-urls`,
  },

  //------------Frontend-----------
  baseApiUrlPublic,
  browse: `${baseApiUrlPublic}/api/browse`,
  relatedItems: `${baseApiUrlPublic}/api/browse/related`,
  elements: `${baseApiUrlPublic}/api/elements`,
  landingPageShelves: `${baseApiUrlPublic}/api/browse/landing-page-shelves`,
  validateAccount: `${baseApiUrlPublic}/api/customers/validate-account`,
  signup: `${baseApiUrlPublic}/api/customers/signup`,
  login: `${baseApiUrlPublic}/api/customers/login`,
  logout: `${baseApiUrlPublic}/api/customers/logout`,
  profile: `${baseApiUrlPublic}/api/customers/profile`,
  reviews: `${baseApiUrlPublic}/api/reviews`,
  cart: `${baseApiUrlPublic}/api/cart`,
  orders: `${baseApiUrlPublic}/api/customers/orders`,
  placeOrder: `${baseApiUrlPublic}/api/place-order`,
  categories: `${baseApiUrlPublic}/api/categories`,

  comifyChat: `${baseApiUrlPublic}/assets/sdk/comify-chat-sdk-v0.9.0.js`,
};

export default endpoints;
