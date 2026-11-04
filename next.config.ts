import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/mikveh-for-women",
        destination: "/mikveh-beach-club",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
