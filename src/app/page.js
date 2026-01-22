"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./page.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const bookingRef = useRef(null);
  const formRef = useRef(null);
  const inputRefs = useRef([]);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Parallax & Reveal
      const tlHero = gsap.timeline();

      tlHero.fromTo(titleRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          delay: 0.2
        }
      )
        .fromTo(".stat-item",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
          }, "-=1");

      // 2. Scroll Animations
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Video Scale & Blur
      mainTl.to(videoRef.current, {
        scale: 1.1,
        filter: "blur(8px)",
        duration: 1,
        ease: "none"
      }, 0);

      // Hero Content Exit
      mainTl.to(heroRef.current, {
        y: -150,
        opacity: 0,
        duration: 0.8,
        ease: "power2.in"
      }, 0);

      // Dark Overlay Intensify
      mainTl.to(`.${styles.videoOverlay}`, {
        backgroundColor: "rgba(10,10,15, 0.9)",
        duration: 1
      }, 0);

      // Booking Section Reveal (Explosive Entry)
      mainTl.fromTo(bookingRef.current,
        {
          y: 200,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out"
        },
        0.3
      );

      // Form Elements Stagger
      mainTl.fromTo(inputRefs.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out"
        },
        0.8
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !inputRefs.current.includes(el)) {
      inputRefs.current.push(el);
    }
  };

  return (
    <div className={styles.page}>
      <div ref={containerRef} className={styles.mainContainer}>
        {/* Cinematic Background */}
        <div className={styles.videoWrapper}>
          <video
            ref={videoRef}
            className={styles.backgroundVideo}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/Assets/bike3601.mp4" type="video/mp4" />
          </video>
          <div className={styles.grainOverlay}></div>
          <div className={styles.videoOverlay}></div>
        </div>

        {/* Hero Section */}
        <div ref={heroRef} className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.topTag}>
              <span className={styles.tagLine}></span>
              <span>PREMIUM BELGRADE EXPERIENCE</span>
            </div>

            <h1 ref={titleRef} className={styles.heroTitle}>
              <span className={styles.titleOutline}>E-Bikes</span>
              <span className={styles.titleSuffix}>and tours</span>
              <br />
              <span className={styles.titleFilled}>BOOK NOW</span>
            </h1>

            <div ref={statsRef} className={styles.statsBar}>
              <div className={`stat-item ${styles.statItem}`}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Premium E-Bikes</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={`stat-item ${styles.statItem}`}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Support</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={`stat-item ${styles.statItem}`}>
                <span className={styles.statNumber}>4.9</span>
                <span className={styles.statLabel}>User Rating</span>
              </div>
            </div>
          </div>

          <div className={styles.scrollHint}>
            <div className={styles.scrollText}>SCROLL TO BOOK</div>
            <div className={styles.scrollProgress}></div>
          </div>
        </div>

        {/* Booking Interface */}
        <div ref={bookingRef} className={styles.bookingContainer}>
          <div className={styles.bookingWrapper}>
            <div className={styles.bookingHeader}>
              <h2 className={styles.formTitle}>
                START YOUR <span className={styles.goldText}>JOURNEY</span>
              </h2>
              <p className={styles.formSubtitle}>
                Reserve your premium e-bike today. Secure, fast, and exclusive.
              </p>
            </div>

            <form ref={formRef} className={styles.bookingForm}>
              <div className={styles.gridRow}>
                <div ref={addToRefs} className={styles.inputGroup}>
                  <input type="text" placeholder="First Name" className={styles.cleanInput} />
                  <div className={styles.inputHighlight}></div>
                </div>
                <div ref={addToRefs} className={styles.inputGroup}>
                  <input type="text" placeholder="Last Name" className={styles.cleanInput} />
                  <div className={styles.inputHighlight}></div>
                </div>
              </div>

              <div className={styles.gridRow}>
                <div ref={addToRefs} className={styles.inputGroup}>
                  <input type="email" placeholder="Email Address" className={styles.cleanInput} />
                  <div className={styles.inputHighlight}></div>
                </div>
                <div ref={addToRefs} className={styles.inputGroup}>
                  <input type="tel" placeholder="Phone Number" className={styles.cleanInput} />
                  <div className={styles.inputHighlight}></div>
                </div>
              </div>

              <div ref={addToRefs} className={styles.inputGroup}>
                <textarea
                  placeholder="Tell us about your trip..."
                  className={`${styles.cleanInput} ${styles.cleanTextarea}`}
                  rows="1"
                ></textarea>
                <div className={styles.inputHighlight}></div>
              </div>

              <div ref={addToRefs} className={styles.actionRow}>
                <div className={styles.contactLink}>
                  <span className={styles.phoneIcon}>or call</span>
                  <a href="tel:+381659782432">+381 65 9782 432</a>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  <span>CONFIRM BOOKING</span>
                  <div className={styles.btnFill}></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
