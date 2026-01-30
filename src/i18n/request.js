import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
    // This typically works for [locale] segments
    let locale = await requestLocale;

    if (!locale || !['en', 'sr'].includes(locale)) {
        locale = 'en';
    }

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});
