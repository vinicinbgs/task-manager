/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  defaultRouteConfig: {
    amp: 'hybrid',
    api: {
      bodyParser: false
    }
  }
}
