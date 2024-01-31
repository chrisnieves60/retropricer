// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      AWS_REGION: process.env.AWS_REGION,
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID, 
      AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,

    },
    // ... any other config options you have
  };
  
  module.exports = nextConfig;
  