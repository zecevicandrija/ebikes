"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Locations.module.css";

export default function Locations() {
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

        // Sections & Images
        tl.fromTo(`.${styles.locationCard}, .${styles.ctaSection}`,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            },
            "-=0.5"
        );

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className={styles.locationsPage}>
            <div className={styles.ambientGlow} />

            <div className={styles.container}>
                {/* HEADER */}
                <div className={styles.headerSection}>
                    <h1 className={styles.pageTitle}>
                        OUR <br />
                        <span className={styles.hollowText}>LOCATIONS</span>
                    </h1>
                    <div className={styles.headerLine} />
                    <h2 className={styles.subHeader}>TWO LOCATIONS OF OUR SHOP</h2>
                </div>

                {/* LOCATIONS GRID */}
                <div className={styles.gridContainer}>

                    {/* Location 1: City Centre */}
                    <div className={`${styles.locationCard} ${styles.cardCentre}`}>
                        <div className={styles.cardInfo}>
                            <div className={styles.cardHeader}>
                                <span className={styles.number}>01</span>
                                <h3 className={styles.locationName}>CITY CENTRE</h3>
                            </div>
                            <div className={styles.addressBlock}>
                                <p className={styles.address}>Obilićev venac 6</p>
                                <p className={styles.city}>Beograd 11000</p>
                            </div>
                            <p className={styles.description}>
                                Located in the heart of the city. Perfect starting point for urban exploration and fortress tours.
                            </p>
                        </div>

                        <div className={styles.mapContainer}>
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://maps.google.com/maps?q=Obili%C4%87ev+venac+6,+Beograd&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                className={styles.mapFrame}
                                title="City Centre Map"
                            ></iframe>
                        </div>

                        <a
                            href="https://www.google.com/maps/dir//Obili%C4%87ev+venac+6+Beograd+11000/@44.8162105,20.456898,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x475a7ab2c75987bd:0x48afdf020c93a84"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.directionBtn}
                        >
                            GET DIRECTIONS
                            <span className={styles.arrow}>↗</span>
                        </a>
                    </div>

                    {/* Location 2: Ada Lake */}
                    <div className={`${styles.locationCard} ${styles.cardAda}`}>
                        <div className={styles.cardInfo}>
                            <div className={styles.cardHeader}>
                                <span className={styles.number}>02</span>
                                <h3 className={styles.locationName}>NEAR THE ADA LAKE</h3>
                            </div>
                            <div className={styles.addressBlock}>
                                <p className={styles.address}>Požeška 31a</p>
                                <p className={styles.city}>Beograd 11000</p>
                            </div>
                            <p className={styles.description}>
                                Ideal for riverside rides and nature escapes. Direct access to Sava river bike paths.
                            </p>
                        </div>

                        <div className={styles.mapContainer}>
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://maps.google.com/maps?q=Po%C5%BEe%C5%A1ka+31a,+Beograd&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                className={styles.mapFrame}
                                title="Ada Lake Map"
                            ></iframe>
                        </div>

                        <a
                            href="https://www.google.com/maps/dir//Po%C5%BEe%C5%A1ka+31a+Beograd+11000/@44.7829436,20.4213938,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x475a6fda7674e6c7:0xde4c4fe677f80b64"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.directionBtn}
                        >
                            GET DIRECTIONS
                            <span className={styles.arrow}>↗</span>
                        </a>
                    </div>

                </div>

                {/* CTA */}
                <div className={styles.ctaSection}>
                    <p className={styles.ctaText}>Not sure which one to choose?</p>
                    <Link href="/book" className={styles.contactLink}>Contact us for advice</Link>
                </div>

            </div>
        </div>
    );
}
