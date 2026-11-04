import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/mikveh-for-women",
        destination: "/mikveh-beach-club",
        permanent: true,
      },
      {
        source: "/challah",
        destination: "/",
        permanent: true,
      },
      {
        source: "/nerot",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
