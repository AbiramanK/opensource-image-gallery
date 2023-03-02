const APP_DISPLAY_NAME = process.env.REACT_APP_DISPLAY_NAME ?? "Image Gallery";

const API = process.env.REACT_APP_API ?? "https://api.unsplash.com";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? "";
const RESULT_PER_PAGE = process.env.REACT_APP_RESULT_PER_PAGE ?? 12;

export { APP_DISPLAY_NAME, API, CLIENT_ID, RESULT_PER_PAGE };
