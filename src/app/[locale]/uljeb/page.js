import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import ClientPage from './ClientPage';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const messages = await getMessages({ locale });
    return {
        title: messages.Uljeb.seo.title,
        description: messages.Uljeb.seo.description,
    };
}

export default async function Page({ params }) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <ClientPage locale={locale} />
        </NextIntlClientProvider>
    );
}
