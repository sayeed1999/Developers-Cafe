/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_APP_API_KEY: process.env.NEXT_APP_API_KEY,
    NEXT_APP_AUTH_DOMAIN: process.env.NEXT_APP_AUTH_DOMAIN,
    NEXT_APP_DATABASE_URL: process.env.NEXT_APP_DATABASE_URL,
    NEXT_APP_PROJECT_ID: process.env.NEXT_APP_PROJECT_ID,
    NEXT_APP_STORAGE_BUCKET: process.env.NEXT_APP_STORAGE_BUCKET,
    NEXT_APP_MESSAGING_SENDER_ID: process.env.NEXT_APP_MESSAGING_SENDER_ID,
    NEXT_APP_APP_ID: process.env.NEXT_APP_APP_ID,
    NEXT_APP_MEASUREMENT_ID: process.env.NEXT_APP_MEASUREMENT_ID,
  },
};

module.exports = nextConfig;
