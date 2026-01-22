import Image from "next/image";
import Link from "next/link";
import styles from "./Adv.module.css";

export default function Adventure() {
    return (
        <div className={styles.advPage}>
            <div className={styles.ambientGlow} />

            <div className={styles.container}>
                {/* HEADER */}
                <div className={styles.headerSection}>
                    <h1 className={styles.pageTitle}>
                        INTO THE <br />
                        <span className={styles.hollowText}>WILD</span>
                    </h1>
                    <div className={styles.headerLine} />
                    <h2 className={styles.subHeader}>KUPINOVO AND OBEDSKA BARA</h2>
                </div>

                {/* CONTENT GRID */}
                <div className={styles.gridContainer}>

                    {/* Intro Block */}
                    <div className={`${styles.gridItem} ${styles.blockIntro}`}>
                        <h3 className={styles.blockLabel}>01 / ESCAPE</h3>
                        <p className={styles.paragraph}>
                            Escape the city and dive into the wild beauty of Serbia — on two wheels and full of charm!
                            Our e-bike tour to Kupinovo and Obedska Bara is the perfect mix of nature, culture, and authentic local experience.
                        </p>
                        <p className={styles.paragraph}>
                            Ride through scenic countryside, lush forests, and peaceful villages — all with the ease and fun of an electric bike.
                        </p>
                    </div>

                    {/* Hero Image */}
                    <div className={`${styles.gridItem} ${styles.blockHeroImage}`}>
                        <div className={styles.imageInner}>
                            <Image src="/Assets/adv1.jpg" alt="Nature Ride" fill className={styles.advImage} priority />
                        </div>
                    </div>

                    {/* Feature List */}
                    <div className={`${styles.gridItem} ${styles.blockFeatures}`}>
                        <h3 className={styles.blockLabel}>02 / WHAT TO EXPECT</h3>
                        <ul className={styles.featureList}>
                            <li className={styles.featureItem}>
                                <span className={styles.icon}>🚴‍♂️</span>
                                <p>A smooth and relaxing ride through the plains of southern Belgrade — no sweat, just pure enjoyment.</p>
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.icon}>🌿</span>
                                <p>A visit to the Obedska Bara Special Nature Reserve, home to hundreds of bird species, rare plants, and stunning wetland landscapes.</p>
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.icon}>🏡</span>
                                <p>A warm welcome in Kupinovo village, where a local host awaits with homemade food, refreshing drinks, and stories you won’t find in any travel guide.</p>
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.icon}>🏖</span>
                                <p>A stop at the legendary Tarzan beach — a hidden swimming spot loved by locals, perfect for a summer splash.</p>
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.icon}>📷</span>
                                <p>Breathtaking views and photo opportunities along the way.</p>
                            </li>
                        </ul>
                    </div>

                    {/* Gallery Grid (Images 2-5) */}
                    <div className={`${styles.gridItem} ${styles.blockGallery1}`}>
                        <div className={styles.quadGrid}>
                            {[2, 3, 4, 5].map((n) => (
                                <div key={n} className={styles.smallImageWrapper}>
                                    <Image src={`/Assets/adv${n}.jpg`} alt={`Adventure ${n}`} fill className={styles.advImage} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Closing Block */}
                    <div className={`${styles.gridItem} ${styles.blockClosing}`}>
                        <h3 className={styles.blockLabel}>03 / JOIN US</h3>
                        <p className={styles.paragraph}>
                            Whether you're an adventurer or just looking for a unique day outside the city, this tour is made for you.
                            Our guides will take care of everything — your only job is to enjoy the ride.
                        </p>
                        <p className={styles.highlightText}>
                            Ready for the ride of a lifetime? Let’s e-bike into the wild side of Serbia!
                        </p>
                        <Link href="/book" className={styles.bookBtn}>
                            Book Adventure
                        </Link>
                    </div>

                    {/* Final Gallery (Images 6-9) */}
                    <div className={`${styles.gridItem} ${styles.blockGallery2}`}>
                        <div className={styles.quadGrid}>
                            {[6, 7, 8, 9].map((n) => (
                                <div key={n} className={styles.smallImageWrapper}>
                                    <Image src={`/Assets/adv${n}.jpg`} alt={`Adventure ${n}`} fill className={styles.advImage} />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
