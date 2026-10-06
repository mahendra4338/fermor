const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = isGithubPages
  ? { output: "export", basePath: "/fermor", trailingSlash: true, images: { unoptimized: true } }
  : {};

export default nextConfig;
