/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        // Redirect old checkout URLs to new format
        source: "/checkout",
        has: [
          {
            type: "query",
            key: "item_id",
          },
        ],
        destination: "/checkout/:item_id",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
