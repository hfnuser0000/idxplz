const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    swcMinify: true,
    images: {
        deviceSizes: [
            240, 320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840,
        ],
        domains: ["cms.indexplz.com"],
    },
    experimental: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
    webpack(config, { dev, isServer }) {
        // ${previousConfig...}
        // Replace React with Preact only in client production build
        if (!dev && !isServer) {
            Object.assign(config.resolve.alias, {
                react: "preact/compat",
                "react-dom/test-utils": "preact/test-utils",
                "react-dom": "preact/compat",
            });
        }
        return config;
    }
});
