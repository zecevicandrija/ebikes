"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Routes.module.css";

export default function Routes() {
    const [isHovering, setIsHovering] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const cursorRef = useRef(null);
    const containerRef = useRef(null);
    const modalRef = useRef(null);
    const handleMouseMove = (e) => {
        if (!cursorRef.current) return;
        // Fast follow
        gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: "power2.out",
            overwrite: "auto"
        });
    };

    const handleMouseEnter = (e) => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    // Animate Modal Open
    useGSAP(() => {
        if (modalOpen && modalRef.current) {
            gsap.fromTo(modalRef.current,
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
            );
        }
    }, { dependencies: [modalOpen] });

    // Handle ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") setModalOpen(false);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <div className={styles.routesPage} ref={containerRef}>
            <div className={styles.ambientGlow} />

            {/* CUSTOM CURSOR LOADER */}
            <div
                ref={cursorRef}
                className={`${styles.cursorLoader} ${isHovering ? styles.visible : ''}`}
            >
                <div className={styles.cursorCircle}></div>
                <span className={styles.loaderText}>CLICK</span>
            </div>

            {/* FULLSCREEN MODAL */}
            {modalOpen && (
                <div
                    ref={modalRef}
                    className={styles.modalOverlay}
                    onClick={() => setModalOpen(false)}
                >
                    <div className={styles.modalContent}>
                        <div className={styles.closeHint}>CLICK TO CLOSE</div>
                        <Image
                            src="/Assets/ruta.png"
                            alt="Full Route Map"
                            fill
                            className={styles.modalImage}
                            quality={100}
                        />
                    </div>
                </div>
            )}

            <div className={styles.container}>
                {/* HEADER */}
                <div className={styles.headerSection}>
                    <h1 className={styles.pageTitle}>
                        OUR <br />
                        <span className={styles.hollowText}>ROUTE</span>
                    </h1>
                    <div className={styles.headerLine} />
                    <h2 className={styles.subHeader}>SAFE & SCENIC EXPLORATION</h2>
                </div>

                {/* CONTENT GRID */}
                <div className={styles.gridContainer}>

                    {/* Intro Text */}
                    <div className={`${styles.gridItem} ${styles.blockIntro}`}>
                        <h3 className={styles.blockLabel}>01 / THE CONCEPT</h3>
                        <p className={styles.paragraph}>
                            Our preferred route allows you to safely explore different aspects of Belgrade utilizing the only designated bike lane that Belgrade has, making it the safest way to explore.
                        </p>
                        <div className={styles.divider} />
                        <p className={styles.highlightText}>
                            Experience different periods of Belgrade's history and get the full impression of the diversity and uniqueness of this vibrant city.
                        </p>
                    </div>

                    {/* Map Image (INTERACTIVE) */}
                    <div
                        className={`${styles.gridItem} ${styles.blockMap}`}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => setModalOpen(true)}
                    >
                        <div className={styles.imageInner}>
                            <Image
                                src="/Assets/ruta.png"
                                alt="Belgrade Bike Route Map"
                                fill
                                className={styles.mapImage}
                                priority
                            />

                            {/* Overlay Hint */}
                            <div className={`${styles.mapOverlay} ${isHovering ? styles.hidden : ''}`}>
                                <span className={styles.overlayIcon}>⤢</span>
                                <span className={styles.overlayText}>CLICK TO EXPAND</span>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Description */}
                    <div className={`${styles.gridItem} ${styles.blockDetails}`}>
                        <h3 className={styles.blockLabel}>02 / THE JOURNEY</h3>
                        <div className={styles.journeySteps}>
                            <div className={styles.step}>
                                <span className={styles.stepNum}>A</span>
                                <p>Start from the old town and the city center, cross one of Belgrade's seven bridges and go to the other side where you can see the panorama of Belgrade.</p>
                            </div>
                            <div className={styles.step}>
                                <span className={styles.stepNum}>B</span>
                                <p>Continue exploring the brutalist Yugoslavian apartment blocks, return back to the old city side by the newest bridge and see the Belgrade lake and weekend houses on river rafts.</p>
                            </div>
                            <div className={styles.step}>
                                <span className={styles.stepNum}>C</span>
                                <p>Enter the newest elite neighborhood in Belgrade built in the past decade then return back to the start through old narrow Belgrade streets.</p>
                            </div>
                        </div>
                    </div>

                    {/* Customization Note */}
                    <div className={`${styles.gridItem} ${styles.blockNote}`}>
                        <h3 className={styles.noteTitle}>CUSTOMIZE YOUR TRIP</h3>
                        <p className={styles.noteText}>
                            The route doesn't capture everything that Belgrade has to offer of course because that trip would be so vast.
                            If there are any specific sights that you wish to visit that are not on the route, express your wishes at the start of the tour and everything could be arranged.
                        </p>
                    </div>

                </div>

                {/* GALLERY SECTION */}
                <div className={styles.gallerySection}>
                    <div className={styles.galleryHeader}>
                        <h2 className={styles.galleryTitle}>SIGHTS YOU'LL SEE</h2>
                        <div className={styles.galleryLine} />
                    </div>

                    <div className={styles.galleryGrid}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                            <div key={num} className={styles.galleryItem}>
                                <Image
                                    src={`/Assets/ruta${num}.jpg`}
                                    alt={`Route Sight ${num}`}
                                    fill
                                    className={styles.galleryImage}
                                />
                                <div className={styles.galleryOverlay} />
                            </div>
                        ))}
                    </div>

                    <div className={styles.ctaWrapper}>
                        <Link href="/book" className={styles.bookBtn}>
                            Book This Route
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
