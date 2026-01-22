"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Prices.module.css";

export default function Prices() {
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
        <div ref={containerRef} className={styles.pricesPage}>
            <div className={styles.ambientGlow} />

            <div className={styles.container}>
                {/* HEADER */}
                <div className={styles.headerSection}>
                    <h1 className={styles.pageTitle}>
                        EXPLORE <br />
                        <span className={styles.hollowText}>OUR OFFER</span>
                    </h1>
                    <div className={styles.headerLine} />
                </div>

                {/* GRID LAYOUT */}
                <div className={styles.gridContainer}>

                    {/* --- RENTAL SECTION --- */}

                    {/* Block 1: Rental Info */}
                    <div className={`${styles.gridItem} ${styles.blockRentalInfo}`}>
                        <h2 className={styles.itemTitle}>01 / E-BIKE RENTAL</h2>
                        <div className={styles.priceGroup}>
                            <div className={styles.priceRow}>
                                <span className={styles.priceLabel}>Daily Rate</span>
                                <span className={styles.priceValue}>€20</span>
                            </div>
                            <div className={styles.divider} />
                            <div className={styles.priceRow}>
                                <span className={styles.priceLabel}>Hourly</span>
                                <span className={styles.priceValue}>€6</span>
                            </div>
                        </div>
                        <p className={styles.description}>
                            Freedom to explore at your own pace. Premium e-bikes ready for urban adventures.
                        </p>
                        <Link href="/book" className={styles.bookBtn}>
                            Rent Now
                        </Link>
                    </div>

                    {/* Block 2: Rental Image */}
                    <div className={`${styles.gridItem} ${styles.blockRentalImage}`}>
                        <div className={styles.imageInner}>
                            <Image
                                src="/Assets/bikerental.jpg"
                                alt="E-Bike Rental Belgrade"
                                fill
                                className={styles.pImage}
                                priority
                            />
                        </div>
                    </div>


                    {/* --- TOUR SECTION --- */}

                    {/* Block 3: Tour Image */}
                    <div className={`${styles.gridItem} ${styles.blockTourImage}`}>
                        <div className={styles.imageInner}>
                            <Image
                                src="/Assets/biketour.jpg"
                                alt="Guided E-Bike Tour"
                                fill
                                className={styles.pImage}
                            />
                        </div>
                    </div>

                    {/* Block 4: Tour Info */}
                    <div className={`${styles.gridItem} ${styles.blockTourInfo}`}>
                        <h2 className={styles.itemTitle}>02 / E-BIKE TOUR</h2>
                        <div className={styles.priceGroup}>
                            <div className={styles.priceRow}>
                                <span className={styles.priceLabel}>Guided Tour Rate</span>
                                <span className={styles.priceValue}>€35</span>
                            </div>
                        </div>
                        <p className={styles.durationInfo}>
                            <span className={styles.icon}>⏱</span> Average duration: 2.5 - 3 hr max
                        </p>
                        <p className={styles.description}>
                            Discover the city's hidden gems with our expert guides. A complete historical and cultural experience.
                        </p>
                        <Link href="/book" className={styles.bookBtn}>
                            Book Tour
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}
