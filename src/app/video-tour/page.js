"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Video.module.css";

export default function VideoTour() {
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

        // Content Animation
        tl.fromTo(`.${styles.gridItem}`,
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
        <div ref={containerRef} className={styles.videoPage}>
            <div className={styles.ambientGlow} />

            <div className={styles.container}>
                {/* HEADER */}
                <div className={styles.headerSection}>
                    <h1 className={styles.pageTitle}>
                        VIDEO <br />
                        <span className={styles.hollowText}>TOUR</span>
                    </h1>
                    <div className={styles.headerLine} />
                    <h2 className={styles.subHeader}>CAPTURE YOUR MEMORIES</h2>
                </div>

                {/* CONTENT GRID */}
                <div className={styles.gridContainer}>

                    {/* Description Text */}
                    <div className={`${styles.gridItem} ${styles.blockText}`}>
                        <h3 className={styles.blockLabel}>01 / THE SERVICE</h3>
                        <p className={styles.paragraph}>
                            <strong style={{ color: '#d4af37' }}>Get your tour filmed with a 360 Action Camera.</strong>
                        </p>
                        <p className={styles.paragraph}>
                            We offer an option to have your tour filmed and edited into a mini movie. The 360 captures the surroundings as well as the group; it can be easily rigged on a person, bike, backpack or held in a hand. However the guests choose, they are free to film themselves.
                        </p>
                        <div className={styles.divider} />
                        <p className={styles.highlightText}>
                            You easily capture Belgrade landmark buildings, bridges, parks, riversides, details of everyday life, houses, local shops, food or cafes and of course the locals themselves, while also capturing the moments between the guests or capturing a fragment of vast Belgrade history that you get to hear from our guides.
                        </p>

                        <p className={styles.paragraph} style={{ marginTop: '1.5rem', fontStyle: 'italic' }}>
                            If interested contact us!
                        </p>

                        <Link href="/book" className={styles.contactBtn}>
                            Contact Us
                        </Link>
                    </div>

                    {/* YouTube Video Embed */}
                    <div className={`${styles.gridItem} ${styles.blockVideo}`}>
                        <div className={styles.videoWrapper}>
                            <iframe
                                className={styles.videoFrame}
                                src="https://www.youtube.com/embed/GT0SfrwZ3gU?si=GenericParameter"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
