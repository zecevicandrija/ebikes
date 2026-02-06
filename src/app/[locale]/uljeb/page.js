import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import ClientPage from './ClientPage';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const messages = await getMessages({ locale });

    // "Brutal" SEO Keywords list
    const keywords = [
        "udruženje električnih bicikala",
        "ebikes srbija",
        "električni bicikli beograd",
        "solarne punionice za bicikle",
        "održiva mobilnost srbija",
        "subvencije za električne bicikle",
        "uljeb",
        "biciklističko udruženje",
        "zelena energija",
        "pametni gradovi",
        "smart city serbia",
        "iznajmljivanje električnih bicikala",
        "e-bike tura srbija",
        "servis električnih bicikala"
    ];

    const title = messages.Uljeb.seo.title;
    const description = messages.Uljeb.seo.description;
    const specificUrl = `https://www.belgrade-ebikes.com/${locale}/uljeb`;
    const sitename = "Belgrade E-Bikes";

    return {
        title: title,
        description: description,
        keywords: keywords.join(", "),
        metadataBase: new URL("https://www.belgrade-ebikes.com"),
        alternates: {
            canonical: specificUrl,
            languages: {
                'en': 'https://www.belgrade-ebikes.com/en/uljeb',
                'sr': 'https://www.belgrade-ebikes.com/sr/uljeb',
            },
        },
        openGraph: {
            title: title,
            description: description,
            url: specificUrl,
            siteName: sitename,
            images: [
                {
                    url: '/Assets/Vizija.jpg', // High impact image we just set
                    width: 1200,
                    height: 630,
                    alt: 'ULJEB - Vizija održive budućnosti',
                },
            ],
            locale: locale === 'sr' ? 'sr_RS' : 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
            images: ['/Assets/Vizija.jpg'],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

export default async function Page({ params }) {
    const { locale } = await params;
    const messages = await getMessages();

    // JSON-LD Structured Data for Organization
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ULJEB - Udruženje ljubitelja električnih bicikala',
        url: `https://www.belgrade-ebikes.com/${locale}/uljeb`,
        logo: 'https://www.belgrade-ebikes.com/Assets/logouljeb.png',
        description: messages.Uljeb.seo.description,
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+381 65 9782 432', // Replace with actual number if known
            contactType: 'customer service',
            areaServed: 'RS',
            availableLanguage: ['Serbian', 'English']
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Beograd',
            addressCountry: 'RS'
        },
        sameAs: [
            "https://www.facebook.com/belgrade.ebikes.3/",
            "https://www.instagram.com/belgrade_e_bikes/"
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <NextIntlClientProvider locale={locale} messages={messages}>
                <ClientPage locale={locale} />
            </NextIntlClientProvider>
        </>
    );
}
