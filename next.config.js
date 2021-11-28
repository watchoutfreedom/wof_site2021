module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/1',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com","www.dropbox.com","www.libros.com"],
  }
}
