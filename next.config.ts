import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/spip.php',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
