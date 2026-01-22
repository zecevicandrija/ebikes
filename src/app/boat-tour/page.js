import Image from "next/image";
import Link from "next/link";
import styles from "./Boat.module.css";

export default function Boat() {
    return (
        <div className={styles.boatPage}>
            <div className={styles.ambientGlow} />

            <div className={styles.container}>
                {/* HEADER */}
                <div className={styles.headerSection}>
                    <h1 className={styles.pageTitle}>
                        WHEELS TO <br />
                        <span className={styles.hollowText}>WAVES</span>
                    </h1>
                    <div className={styles.headerLine} />
                </div>

                {/* CONTENT GRID */}
                <div className={styles.gridContainer}>

                    {/* Main Context - Text Block */}
                    <div className={`${styles.gridItem} ${styles.blockContext}`}>
                        <h2 className={styles.blockTitle}>01 / THE EXPERIENCE</h2>
                        <p className={styles.paragraph}>
                            Complete your Belgrade experience by exploring not only the vibrant and dynamic city streets but also by relaxing sightseeing during a sunset on Belgrade's oldest lifeforces, the rivers, Sava and Danube.
                        </p>
                        <p className={styles.paragraph}>
                            Escape the city bustle as many Belgradians do, you will surely meet them along the river on our tour, riding their boats, fishing, relaxing, hanging out with their families or even a little bit of partying.
                        </p>
                    </div>

                    {/* Hero Image */}
                    <div className={`${styles.gridItem} ${styles.blockHeroImage}`}>
                        <div className={styles.imageInner}>
                            <Image
                                src="/Assets/boat1.jpg"
                                alt="Belgrade Boat Tour Sunset"
                                fill
                                className={styles.boatImage}
                                priority
                            />
                        </div>
                    </div>

                    {/* Secondary Text */}
                    <div className={`${styles.gridItem} ${styles.blockDetail}`}>
                        <p className={styles.paragraph}>
                            You will see a whole other Belgrade ecosystem on the water. See sights that are rarely viewed by a common tourist, the lesser known symbols of Belgrade, the rafts or rather weekend houses on the rafts that have been decorating the shores for the past four decades.
                        </p>
                        <div className={styles.divider} />
                        <p className={styles.highlightText}>
                            Pass under Belgrade's many bridges, see the confluence of the two rivers and the "Great War Island".
                        </p>
                    </div>

                    {/* Image Grid Mix */}
                    <div className={`${styles.gridItem} ${styles.blockGallery}`}>
                        <div className={styles.miniGrid}>
                            {[2, 3, 4, 5].map((num) => (
                                <div key={num} className={styles.miniImageWrapper}>
                                    <Image
                                        src={`/Assets/boat${num}.jpg`}
                                        alt={`Boat scene ${num}`}
                                        fill
                                        className={styles.boatImage}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Closing Text */}
                    <div className={`${styles.gridItem} ${styles.blockClosing}`}>
                        <p className={styles.paragraph}>
                            Go around Ada Medjica, a hidden resort filled with rafts where locals take refugee from the heat. Experience the Belgrade fortress Kalemegdan in its full scale from the confluence.
                        </p>
                        <p className={styles.paragraph}>
                            Most importantly relax and enjoy the flow of the river, have a glass of wine or a shot of rakija, eat some snacks from Serbian cuisine.
                        </p>

                        <Link href="/book" className={styles.bookBtn}>
                            Book Your Cruise
                        </Link>
                    </div>

                    {/* Final Large Image Pair */}
                    <div className={`${styles.gridItem} ${styles.blockFinalImages}`}>
                        <div className={styles.dualImage}>
                            <div className={styles.imageInner}>
                                <Image src="/Assets/boat6.jpg" alt="Belgrade River Life" fill className={styles.boatImage} />
                            </div>
                            <div className={styles.imageInner}>
                                <Image src="/Assets/boat7.jpg" alt="Relaxing on Boat" fill className={styles.boatImage} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
