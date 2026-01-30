import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'sr'],

    // Used when no locale matches
    defaultLocale: 'en',

    // Don't prefix the default locale (en)
    // /uljeb -> English
    // /sr/uljeb -> Serbian
    localePrefix: 'as-needed'
});

export const config = {
    // Match only internationalized pathnames
    // We strictly match /uljeb and /sr/uljeb to avoid interfering with other pages
    matcher: [
        '/uljeb',
        '/uljeb/(.*)',
        '/sr',
        '/sr/(.*)'
    ]
};
