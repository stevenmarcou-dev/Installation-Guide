import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/process",
        destination: "/solar-installation-process",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
