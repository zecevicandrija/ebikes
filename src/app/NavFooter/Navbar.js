"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Navbar.module.css";

const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Prices", href: "/prices" },
    { label: "Book Now", href: "/book" },
    { label: "Gallery", href: "/gallery" },
    { label: "Boat Tour", href: "/boat-tour" },
    { label: "E-Bike Adventure", href: "/e-bike-adventure" },
    { label: "Locations", href: "/locations" },
    { label: "Routes", href: "/routes" },
    { label: "Video of the Tour", href: "/video-tour" },
    { label: "General Terms", href: "/general-terms-and-conditions" },
    { label: "Uljeb", href: "/uljeb" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef(null);
    const menuRef = useRef(null);
    const linksRef = useRef([]);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useGSAP(() => {
        if (!menuRef.current) return;

        if (isOpen) {
            const tl = gsap.timeline();

            tl.to(menuRef.current, {
                y: 0,
                duration: 0.8,
                ease: "power3.inOut",
            });

            tl.fromTo(
                linksRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: "power2.out",
                },
                "-=0.4"
            );
        } else {
            gsap.to(menuRef.current, {
                y: "-100%",
                duration: 0.8,
                ease: "power3.inOut",
            });
        }
    }, { dependencies: [isOpen, mounted] });

    const toggleMenu = () => setIsOpen(!isOpen);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent background scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            document.documentElement.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
            document.documentElement.style.overflow = "unset";
        };
    }, [isOpen]);

    const addToRefs = (el) => {
        if (el && !linksRef.current.includes(el)) {
            linksRef.current.push(el);
        }
    };

    // Clear refs on re-render to avoid duplicates
    linksRef.current = [];

    // Split items for desktop layout
    const midPoint = Math.ceil(menuItems.length / 2);
    const leftColumnItems = menuItems.slice(0, midPoint);
    const rightColumnItems = menuItems.slice(midPoint);

    const MenuContent = (
        <div ref={menuRef} className={styles.fullscreenMenu}>
            <div className={styles.menuContent}>
                <div className={styles.menuGrid}>
                    <div className={styles.menuLinksContainer}>
                        <div className={styles.menuColumn}>
                            {leftColumnItems.map((item, index) => (
                                <div key={item.href} className={styles.linkWrapper}>
                                    <Link
                                        href={item.href}
                                        className={styles.menuLink}
                                        ref={addToRefs}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className={styles.linkNumber}>
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        {item.label}
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div className={styles.menuColumn}>
                            {rightColumnItems.map((item, index) => (
                                <div key={item.href} className={styles.linkWrapper}>
                                    <Link
                                        href={item.href}
                                        className={styles.menuLink}
                                        ref={addToRefs}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className={styles.linkNumber}>
                                            {String(midPoint + index + 1).padStart(2, "0")}
                                        </span>
                                        {item.label}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.menuInfo}>
                        <div className={styles.infoBlock}>
                            <h3>Contact</h3>
                            <p>+381 65 9782 432</p>
                            <p>belgrade.ebikes2019@gmail.com</p>
                        </div>
                        <div className={styles.infoBlock}>
                            <h3>Address</h3>
                            <p>Belgrade Waterfront</p>
                            <p>Serbia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <nav
            ref={containerRef}
            className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} ${isOpen ? styles.open : ""
                }`}
        >
            <div className={styles.navContainer}>
                <div className={styles.logoWrapper}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/Assets/logo.png"
                            alt="Belgrade E-Bikes Logo"
                            width={200}
                            height={80}
                            className={styles.logoImage}
                            priority
                        />
                    </Link>
                </div>

                <div className={styles.navActions}>
                    <Link href="/book" className={styles.bookBtn}>
                        Book Now
                    </Link>
                    <button
                        className={`${styles.menuBtn} ${isOpen ? styles.active : ""}`}
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        <span className={styles.burgerLine}></span>
                        <span className={styles.burgerLine}></span>
                    </button>
                </div>
            </div>

            {mounted && createPortal(MenuContent, document.body)}
        </nav>
    );
}
