"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "next-intl";
import styles from "./Uljeb.module.css";

export default function ClientPage({ locale }) {
    const t = useTranslations("Uljeb");
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Header Animation
        tl.fromTo(`.${styles.pageTitle}`,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        )
            .fromTo(`.${styles.headerLine}`,
                { scaleX: 0, opacity: 0 },
                { scaleX: 1, opacity: 1, duration: 1, ease: "power3.out" },
                "-=0.5"
            );

        // Grid items animation
        tl.fromTo(`.${styles.gridItem}`,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            },
            "-=0.5"
        );

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className={styles.page}>
            {/* LANGUAGE OVERLAY */}
            <div className={styles.langOverlay}>
                <a href="/en/uljeb" className={`${styles.langBtn} ${locale === 'en' ? styles.activeLang : ''}`}>
                    EN
                </a>
                <div className={styles.langDivider} />
                <a href="/sr/uljeb" className={`${styles.langBtn} ${locale === 'sr' ? styles.activeLang : ''}`}>
                    SR
                </a>
            </div>

            <div className={styles.ambientGlow} />

            <div className={styles.container}>
                {/* HEADER */}
                <div className={styles.headerSection}>
                    <h1 className={styles.pageTitle}>
                        ULJEB <br />
                        <span className={styles.hollowText}>{t('title')}</span>
                    </h1>
                    <div className={styles.logoContainer}>
                        <Image
                            src="/Assets/logouljeb.png"
                            alt="ULJEB Logo"
                            width={120}
                            height={120}
                            className={styles.logo}
                            priority
                        />
                    </div>
                    <div className={styles.headerLine} />
                </div>

                {/* GRID LAYOUT */}
                <div className={styles.gridContainer}>

                    {/* Block 1: Vision */}
                    <div className={`${styles.gridItem} ${styles.blockVision}`}>
                        <h2 className={styles.itemTitle}>01 / {t('vision')}</h2>
                        <p className={styles.description}>
                            {t('description')}
                        </p>
                        <br />
                        <p className={styles.description}>
                            {t('visionExtended')}
                        </p>
                    </div>

                    {/* Block 2: Image 1 */}
                    <div className={`${styles.gridItem} ${styles.blockImage1}`}>
                        <div className={styles.imageInner}>
                            <Image
                                src="/Assets/Vizija.jpg"
                                alt="Vizija - Future of Green Mobility"
                                fill
                                className={styles.pImage}
                            />
                        </div>
                    </div>

                    {/* Block 3: Image 2 */}
                    <div className={`${styles.gridItem} ${styles.blockImage2}`}>
                        <div className={styles.imageInner}>
                            <Image
                                src="/Assets/sta radimo.jpg"
                                alt="Šta radimo - Innovative Cycle Solutions"
                                fill
                                className={styles.pImage}
                            />
                        </div>
                    </div>

                    {/* Block 4: What We Do */}
                    <div className={`${styles.gridItem} ${styles.blockWhatWeDo}`}>
                        <h2 className={styles.itemTitle}>02 / {t('whatWeDoTitle')}</h2>
                        <p className={styles.description}>
                            {t('whatWeDoDesc')}
                        </p>
                        <p className={styles.descriptionBold}>
                            {t('whatWeDoListIntro')}
                        </p>
                        <ul className={styles.bulletList}>
                            {['0', '1', '2', '3'].map((i) => (
                                <li key={i}>{t(`whatWeDoList.${i}`)}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Block 5: Solar Section */}
                    <div className={`${styles.gridItem} ${styles.blockSolar}`}>
                        <h2 className={styles.itemTitle}>03 / {t('solarTitle')}</h2>
                        <p className={styles.description}>
                            {t('solarDesc')}
                        </p>
                        <br />
                        <p className={styles.description}>
                            {t('solarDesc2')}
                        </p>
                        <br />
                        <p className={styles.descriptionBold}>
                            {t('modelTitle')}
                        </p>
                        <ul className={styles.bulletList}>
                            {['0', '1', '2'].map((i) => (
                                <li key={i}>{t(`modelList.${i}`)}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Block 6: Image 3 */}
                    <div className={`${styles.gridItem} ${styles.blockImage3}`}>
                        <div className={styles.imageInner}>
                            <Image
                                src="/Assets/Design of Solar bike charger point.png"
                                alt="Solarne Punionice - Green Energy Charging"
                                fill
                                className={styles.pImage}
                            />
                        </div>
                    </div>
                    {/* Block 9: Cooperation - Full Width Premium Design */}
                    <div className={`${styles.gridItem} ${styles.blockCooperation}`}>
                        {/* Decorative elements */}
                        <div className={styles.cooperationGlow} />
                        <div className={styles.cooperationPattern} />

                        {/* Header Section */}
                        <div className={styles.cooperationHeader}>
                            <span className={styles.cooperationLabel}>04 / {t('whyTitle')}</span>
                            <h2 className={styles.cooperationTitle}>{t('whyTitle')}</h2>
                            <div className={styles.cooperationDivider}>
                                <span className={styles.dividerLine} />
                                <span className={styles.dividerIcon}>⚡</span>
                                <span className={styles.dividerLine} />
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className={styles.cooperationContent}>
                            <p className={styles.cooperationText}>{t('whyDesc')}</p>
                        </div>

                        {/* Partners Section */}
                        <div className={styles.partnersSection}>
                            <h3 className={styles.partnersTitle}>{t('cooperationTitle')}</h3>
                            <div className={styles.partnerCards}>
                                <div className={styles.partnerCard}>
                                    <div className={styles.partnerIcon}>🏛️</div>
                                    <span className={styles.partnerName}>{t('cooperationList.0')}</span>
                                </div>
                                <div className={styles.partnerCard}>
                                    <div className={styles.partnerIcon}>🏢</div>
                                    <span className={styles.partnerName}>{t('cooperationList.1')}</span>
                                </div>
                                <div className={styles.partnerCard}>
                                    <div className={styles.partnerIcon}>🤝</div>
                                    <span className={styles.partnerName}>{t('cooperationList.2')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Conclusion */}
                        <div className={styles.conclusionSection}>
                            <p className={styles.conclusionText}>{t('conclusion')}</p>
                            <div className={styles.conclusionAccent} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
