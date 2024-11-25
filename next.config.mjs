// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false }; // json-serverに関連する設定
    return config;
  },
};

export default nextConfig; // ESモジュール形式ではこれを使用

