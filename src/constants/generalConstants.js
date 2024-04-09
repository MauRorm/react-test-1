const BASE_URL_SERVER =
window.location.origin.indexOf('localhost') > -1 ? window.location.origin.replace('3000', '8000') : window.location.origin+window.location.port;
const CONSTANTS = {
  URL: {
    POST_LOGIN: "/api/login",
  },
  ROUTES: {
    BASE_ROUTE: "/",
    HOME_ROUTE: "/home",
    LOCATION_ROUTE: "/location",
    EPISODE_ROUTE: "/episode",
    CHARACTER_ROUTE: "/character",
  },
};

const GENERAL_CONSTANTS = {
    BASE_URL_SERVER,
    CONSTANTS,
};

export default GENERAL_CONSTANTS;