/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        turbo: {
            rules: {
                "*.json": ["json"],
            },
        },
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.json$/,
            type: "json",
        });
        return config;
    },
};

module.exports = nextConfig;
