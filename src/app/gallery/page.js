"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Gallery.module.css";

const gallerySections = [
    { title: "Tour photos", start: 1, count: 3 },
    { title: "Historical landmarks", start: 4, count: 3 },
    { title: "Brutalism", start: 7, count: 3 },
    { title: "Churches", start: 10, count: 3 },
    { title: "Panoramas and bridges", start: 13, count: 3 },
    { title: "Architecture", start: 16, count: 9 }, // Remaining 9 images
];

export default function Gallery() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
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
        // We'll target all image wrappers and stagger them
        tl.fromTo(`.${styles.imageWrapper}`,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.05,
                ease: "power2.out"
            },
            "-=0.5"
        );

    }, { scope: containerRef });

    // Flatten all images into a single array for easy navigation
    const allImages = gallerySections.flatMap(section =>
        Array.from({ length: section.count }).map((_, i) => ({
            src: `/Assets/g${section.start + i}.jpg`,
            alt: `${section.title} - Image ${section.start + i}`,
            originalIndex: section.start + i
        }))
    );

    // Get the global index for a specific image in a section
    const getGlobalIndex = (start, offset) => {
        const targetNum = start + offset;
        return allImages.findIndex(img => img.originalIndex === targetNum);
    };

    const openLightbox = (globalIndex) => {
        setSelectedImageIndex(globalIndex);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
        document.body.style.overflow = 'unset';
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev + 1) % allImages.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

    // Keyboard support
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImageIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage(e);
            if (e.key === 'ArrowLeft') prevImage(e);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex]);

    return (
        <div ref={containerRef} className={styles.galleryPage}>
            <div className={styles.ambientGlow} />

            <div className={styles.container}>
                {/* HEADER */}
                <div className={styles.headerSection}>
                    <h1 className={styles.pageTitle}>
                        OUR <br />
                        <span className={styles.hollowText}>GALLERY</span>
                    </h1>
                    <div className={styles.headerLine} />
                </div>

                {/* GALLERIES */}
                <div className={styles.galleryContent}>
                    {gallerySections.map((section, sectionIndex) => (
                        <div key={section.title} className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                {String(sectionIndex + 1).padStart(2, '0')} / {section.title.toUpperCase()}
                            </h2>

                            <div className={styles.imageGrid}>
                                {Array.from({ length: section.count }).map((_, i) => {
                                    const imageNum = section.start + i;
                                    const globalIndex = getGlobalIndex(section.start, i);

                                    return (
                                        <div
                                            key={imageNum}
                                            className={styles.imageWrapper}
                                            onClick={() => openLightbox(globalIndex)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <Image
                                                src={`/Assets/g${imageNum}.jpg`}
                                                alt={`${section.title} - Image ${imageNum}`}
                                                fill
                                                className={styles.galleryImage}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            <div className={styles.imageOverlay} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* LIGHTBOX */}
            {selectedImageIndex !== null && (
                <div className={styles.lightboxOverlay} onClick={closeLightbox}>
                    <button className={styles.closeBtn} onClick={closeLightbox}>
                        <span></span>
                        <span></span>
                    </button>

                    <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevImage}>
                        ←
                    </button>

                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.lightboxImageWrapper}>
                            <Image
                                src={allImages[selectedImageIndex].src}
                                alt={allImages[selectedImageIndex].alt}
                                fill
                                className={styles.lightboxImage}
                                sizes="90vw"
                                priority
                            />
                        </div>
                    </div>

                    <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextImage}>
                        →
                    </button>
                </div>
            )}
        </div>
    );
}
