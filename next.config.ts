import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 如果您的网站不是部署在域名根目录，需要设置 basePath
  // basePath: '/your-base-path',
  
  // 如果您使用的是自定义域名，可能需要设置 assetPrefix
  // assetPrefix: 'https://your-domain.com',
};

export default nextConfig;
