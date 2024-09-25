/** @type {import('next').NextConfig} */
const nextConfig = {
  // compiler: {
  //   removeConsole:
  //     process.env.NODE_ENV === "production"
  //       ? { exclude: ["warn", "error"] }
  //       : false,
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mpsujvpacrgeyhjxywwo.supabase.co',
        port: '',
        pathname: '/storage/**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
