"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./About.module.css";

export default function About() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Header Animation
        tl.fromTo(`.${styles.heroTitle}`,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        )
            .fromTo(`.${styles.heroLine}`,
                { scaleX: 0, opacity: 0 },
                { scaleX: 1, opacity: 1, duration: 1, ease: "power3.out" },
                "-=0.5"
            );

        // Sections & Images
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
        <div ref={containerRef} className={styles.aboutPage}>
            {/* Background Ambience */}
            <div className={styles.ambientGlow} />

            <div className={styles.container}>
                {/* HERO SECTION */}
                <div className={styles.heroSection}>
                    <h1 className={styles.heroTitle}>
                        OUR <br />
                        <span className={styles.hollowText}>STORY</span>
                    </h1>
                    <div className={styles.heroLine} />
                    <div className={styles.scrolldown}>
                        <span>EST. 2019</span>
                    </div>
                </div>

                {/* COMPLEX GRID LAYOUT */}
                <div className={styles.gridContainer}>

                    {/* BLOCK 1: SUSTAINABILITY (Large Text) */}
                    <div className={`${styles.gridItem} ${styles.blockSustainability}`}>
                        <h2 className={styles.sectionLabel}>01 / VISION</h2>
                        <p className={styles.bigText}>
                            Belgrade E-bikes is strongly committed to a <span className={styles.goldHighlight}>sustainable</span> way of living.
                        </p>
                    </div>

                    {/* BLOCK 2: IMAGE (Tall) */}
                    <div className={`${styles.gridItem} ${styles.blockImage}`}>
                        <div className={styles.imageInner}>
                            <Image
                                src="/Assets/about.jpg"
                                alt="Belgrade E-Bike Tour"
                                fill
                                className={styles.aboutImage}
                                priority
                            />
                            <div className={styles.imgOverlay} />
                        </div>
                    </div>

                    {/* BLOCK 3: THE WHY (Context) */}
                    <div className={`${styles.gridItem} ${styles.blockContext}`}>
                        <h2 className={styles.sectionLabel}>02 / THE CONTEXT</h2>
                        <p className={styles.descText}>
                            This coincides with the fact that e-bike tour is the best way to get
                            about the city with its beautiful sights and history. This could not be
                            exercised by pedal bikes because Belgrade is relatively hilly and hard
                            to cruise.
                        </p>
                    </div>

                    {/* BLOCK 4: THE MOTTO (Featured) */}
                    <div className={`${styles.gridItem} ${styles.blockMotto}`}>
                        <div className={styles.mottoWrapper}>
                            <span className={styles.quoteIcon}>“</span>
                            <h3 className={styles.mottoText}>
                                Relax and enjoy your surroundings.
                            </h3>
                            <p className={styles.mottoSub}>
                                Knowing you’re in safe hands as you ride with our knowledgeable guides.
                            </p>
                        </div>
                    </div>

                    {/* BLOCK 5: THE EXPERIENCE (Details) */}
                    <div className={`${styles.gridItem} ${styles.blockExperience}`}>
                        <h2 className={styles.sectionLabel}>03 / EXPERIENCE</h2>
                        <div className={styles.expContent}>
                            <p className={styles.descText}>
                                This is the perfect opportunity to discover the rich history that
                                makes Belgrade so extraordinary. E-bike tours are not only fun, but
                                informative and designed for all skill levels.
                            </p>
                            <div className={styles.separator} />
                            <p className={styles.descText}>
                                The tour features our custom electric bikes with a strong pedal assist. great for riders who want direction from our e-guide software.
                            </p>
                        </div>
                    </div>

                    {/* BLOCK 6: CTA (Interactive) */}
                    <div className={`${styles.gridItem} ${styles.blockCta}`}>
                        <h2 className={styles.ctaTitle}>READY TO RIDE?</h2>
                        <Link href="/contact" className={styles.ctaButton}>
                            <span className={styles.btnText}>BOOK YOUR TOUR</span>
                            <span className={styles.btnIcon}>→</span>
                        </Link>
                        <p className={styles.rentalOption}>
                            Alternatively, opt for hourly rentals and use our bikes at your own wishes.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
