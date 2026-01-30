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
