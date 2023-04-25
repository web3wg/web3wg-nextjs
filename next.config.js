/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["127.0.0.1"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/_next/public/fonts/",
            outputPath: "public/fonts/",
            name: "[name].[ext]",
            esModule: false,
          },
        },
      });
    }
    return config;
  },
};

module.exports = nextConfig;
