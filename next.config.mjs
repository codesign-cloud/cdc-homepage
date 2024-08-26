/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export', // 'standalone'/'export'/undefined
    basePath: '',
    reactStrictMode: false,
    trailingSlash: false,
    assetPrefix: undefined,
    compress: true,
    generateEtags: true,
    poweredByHeader: false,
    productionBrowserSourceMaps: false,
    distDir: '.next',
    crossOrigin: 'anonymous',
    swcMinify: true,

    env: {
        customKey: 'my-value', // Accessible via {process.env.customKey}
        NEXT_PUBLIC_SAMPLE: 'my-value-2', // NEXT_PUBLIC_* = Available at client-side
    },

    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],

    experimental: {
        //appDir: true, // Not needed beyond Next.js 13.4
        //serverComponentsExternalPackages: [],
        //typedRoutes: true,
        //webpackBuildWorker: true,
    },

    compiler: {
        // Enables the styled-components SWC transform
        // Warning: Prop `className` did not match. Server: "mantine-xxx mantine-Switch-track" Client: "mantine-yyy mantine-Switch-track"
        styledComponents: true,
    },

    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },

    devIndicators: {
        buildActivity: true,
        buildActivityPosition: 'bottom-left',
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },

    /* Rewrites * /
    async rewrites() {
        return [
            //{ source: '/user', destination: '/users' },
        ];
    },
    /* */

    /* * /
    i18n: {
        localeDetection: false,
        locales: ['en-US'],
        defaultLocale: 'en-US',
    },
    /* */

};

export default nextConfig;
