import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>

                    {/* COL 1: BRAND */}
                    <div className={styles.logoCol}>
                        <Link href="/" className={styles.logo}>
                            BELGRADE <span className={styles.highlight}>E-BIKES</span>
                        </Link>
                        <p className={styles.tagline}>
                            Premium e-bike rentals and guided tours.
                            Experience Belgrade in a new light.
                        </p>
                    </div>

                    {/* COL 2: EXPLORE */}
                    <div className={styles.navCol}>
                        <h4 className={styles.colTitle}>EXPLORE</h4>
                        <Link href="/routes" className={styles.link}>Our Route</Link>
                        <Link href="/video-tour" className={styles.link}>Video Tour</Link>
                        <Link href="/prices" className={styles.link}>Prices</Link>
                    </div>

                    {/* COL 3: COMPANY */}
                    <div className={styles.navCol}>
                        <h4 className={styles.colTitle}>COMPANY</h4>
                        <Link href="/about" className={styles.link}>About Us</Link>
                        <Link href="/general-terms-and-conditions" className={styles.link}>Terms & Conditions</Link>
                        <Link href="/locations" className={styles.link}>Locations</Link>
                    </div>

                    {/* COL 4: CONTACT */}
                    <div className={styles.navCol}>
                        <h4 className={styles.colTitle}>CONTACT</h4>
                        <div className={styles.contactInfo}>
                            <p>Belgrade, Serbia</p>
                            <p><a href="mailto:belgrade.ebikes2019@gmail.com">belgrade.ebikes2019@gmail.com</a></p>
                            <p><a href="tel:+381659782432">+381 65 9782 432</a></p>
                        </div>
                    </div>

                    {/* COL 5: FOLLOW US */}
                    <div className={styles.navCol}>
                        <h4 className={styles.colTitle}>FOLLOW US</h4>
                        <a
                            href="https://www.tripadvisor.com/UserReviewEdit-g294472-d17448323-Belgrade_E_Bike_Tour_Power_Glide-Belgrade.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            TripAdvisor Review
                        </a>

                        <div className={styles.socialIcons}>
                            <a
                                href="https://www.facebook.com/belgrade.ebikes.3/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.iconLink}
                                aria-label="Facebook"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/belgrade_e_bikes/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.iconLink}
                                aria-label="Instagram"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>

                <div className={styles.divider}></div>

                <div className={styles.bottomSection}>
                    <p className={styles.copyright}>
                        © {currentYear} BELGRADE E-BIKES. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
