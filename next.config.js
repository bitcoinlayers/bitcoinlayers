/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl({
    webpack: (config) => {
        config.module.rules.push({
            test: /\.json$/,
            type: "json",
        });
        return config;
    },
});
