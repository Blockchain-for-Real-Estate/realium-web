module.exports = {
  images: {
    domains: ["images.unsplash.com"],
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
