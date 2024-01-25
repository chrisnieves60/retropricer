// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      AWS_REGION: process.env.AWS_REGION,
      AWS_COGNITO_IDENTITY_POOL_ID: process.env.AWS_COGNITO_IDENTITY_POOL_ID,
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,

    },
    // ... any other config options you have
  };
  
  module.exports = nextConfig;
  