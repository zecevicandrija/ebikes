"use client";

import { useRef, useActionState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Book.module.css";
import { submitBooking } from "../actions";

export default function Book() {
    const containerRef = useRef(null);
    const [state, formAction, isPending] = useActionState(submitBooking, { success: false, message: '' });

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
        <div ref={containerRef} className={styles.bookPage}>
            <div className={styles.ambientGlow} />

            <div className={styles.container}>
                {/* HEADER */}
                <div className={styles.headerSection}>
                    <h1 className={styles.pageTitle}>
                        BOOK <br />
                        <span className={styles.hollowText}>NOW</span>
                    </h1>
                    <div className={styles.headerLine} />
                </div>

                {/* CONTENT GRID */}
                <div className={styles.gridContainer}>

                    {/* INFO BLOCK (Left) */}
                    <div className={`${styles.gridItem} ${styles.blockInfo}`}>
                        <h2 className={styles.blockTitle}>01 / INFO</h2>
                        <div className={styles.textContent}>
                            <p className={styles.paragraph}>
                                The easiest way to book your e-bike tour is to fill out our online booking form.
                                But feel free to use e-mail or phone if you prefer.
                            </p>
                            <div className={styles.separator} />
                            <p className={styles.paragraph}>
                                The booking will be definitive and irrevocable as soon as the booking confirmation has been sent to you.
                                Please also read our <Link href="/conditions" className={styles.link}>Conditions</Link>.
                            </p>
                        </div>

                        <div className={styles.contactDetails}>
                            <p className={styles.brandName}>Belgrade e-bikes</p>
                            <a href="tel:+381659782432" className={styles.phoneNum}>+381 65 9782 432</a>
                        </div>
                    </div>

                    {/* FORM BLOCK (Right) */}
                    <div className={`${styles.gridItem} ${styles.blockForm}`}>
                        <h2 className={styles.blockTitle}>02 / RESERVATION</h2>

                        <form className={styles.form} action={formAction}>
                            {state.message && (
                                <p style={{ color: state.success ? 'green' : 'red', marginBottom: '1rem' }}>
                                    {state.message}
                                </p>
                            )}
                            <div className={styles.row}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="firstName" className={styles.label}>First Name</label>
                                    <input type="text" id="firstName" name="firstName" className={styles.input} placeholder="John" required />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="lastName" className={styles.label}>Last Name</label>
                                    <input type="text" id="lastName" name="lastName" className={styles.input} placeholder="Doe" required />
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="email" className={styles.label}>Email</label>
                                <input type="email" id="email" name="email" className={styles.input} placeholder="john@example.com" required />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="phone" className={styles.label}>Phone</label>
                                <input type="tel" id="phone" name="phone" className={styles.input} placeholder="+381..." />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="message" className={styles.label}>Message</label>
                                <textarea id="message" name="message" rows="4" className={`${styles.input} ${styles.textarea}`} placeholder="Tell us about your trip..."></textarea>
                            </div>

                            <button type="submit" className={styles.submitBtn} disabled={isPending}>
                                <span>{isPending ? 'SENDING...' : 'CONFIRM BOOKING'}</span>
                                <div className={styles.btnFill}></div>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
