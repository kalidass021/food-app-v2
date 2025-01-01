const APP_ENV = import.meta.env.VITE_APP_ENV;
const BASE_API_URL =
  APP_ENV === 'production'
    ? import.meta.env.VITE_API_URL_PROD
    : import.meta.env.VITE_API_URL_DEV;
export const BASE_URL = BASE_API_URL;
export const CDN_URL = import.meta.env.VITE_CDN_URL;
export const DEFAULT_LATITUDE = import.meta.env.VITE_DEFAULT_LATITUDE;
export const DEFAULT_LONGITUDE = import.meta.env.VITE_DEFAULT_LONGITUDE;

