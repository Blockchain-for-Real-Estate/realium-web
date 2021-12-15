module.exports = {
  images: {
    domains: ["images.unsplash.com", "realium-public.s3.us-east-2.amazonaws.com"],
  },
  async redirects() {
    return [
      {
        source: "/account",
        destination: "/account/dashboard",
        permanent: true,
      },
    ];
  },
};
