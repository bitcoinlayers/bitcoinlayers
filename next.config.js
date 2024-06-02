/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.json$/,
            type: "json",
        });
        return config;
    },
};
