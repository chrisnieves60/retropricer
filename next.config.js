// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      AWS_REGION: process.env.AWS_REGION,
      AWS_COGNITO_IDENTITY_POOL_ID: process.env.AWS_COGNITO_IDENTITY_POOL_ID,
    },
    // ... any other config options you have
  };
  
  module.exports = nextConfig;
  