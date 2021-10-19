module.exports = {
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
