const baseApiUrl = process.env.BIZ_APP_BASE_URL;
const baseApiUrlPublic = process.env.NEXT_PUBLIC_BIZ_APP_BASE_URL;

const endpoints = {
  //------------Backend------------
  server: {
    baseApiUrl,
    siteConfig: `${baseApiUrl}/api/site-config`,
    browse: `${baseApiUrl}/api/browse`,
  },

  //------------Frontend-----------
  baseApiUrlPublic,
  browse: `${baseApiUrlPublic}/api/browse`,
};

export default endpoints;
