"use client";

import styles from "./Terms.module.css";

export default function TermsAndConditions() {
    return (
        <div className={styles.termsPage}>
            <div className={styles.ambientGlow} />

            <div className={styles.container}>
                {/* HEADER */}
                <div className={styles.headerSection}>
                    <h1 className={styles.pageTitle}>
                        GENERAL <br />
                        <span className={styles.hollowText}>TERMS & CONDITIONS</span>
                    </h1>
                    <div className={styles.headerLine} />
                </div>

                {/* CONTENT */}
                <div className={styles.contentWrapper}>

                    {/* ARTICLE 1 */}
                    <div className={styles.articleBlock}>
                        <h2 className={styles.articleTitle}>Article 1 - Bike Rental Price</h2>
                        <ul className={styles.clauseList}>
                            <li className={styles.clause}>
                                <span className={styles.clauseText}>
                                    The bike rental price is determined by the rates mentioned on the Belgrade e-bikes website at the time of the booking; or as subsequently agreed.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* ARTICLE 2 */}
                    <div className={styles.articleBlock}>
                        <h2 className={styles.articleTitle}>Article 2 - Payment</h2>
                        <ul className={styles.clauseList}>
                            <li className={styles.clause}>
                                <span className={styles.clauseLabel}>a.</span>
                                <span className={styles.clauseText}>
                                    The rental price and any other due sums regarding the rental agreement must be paid before the bike is handed over to you.
                                </span>
                            </li>
                            <li className={styles.clause}>
                                <span className={styles.clauseLabel}>b.</span>
                                <span className={styles.clauseText}>
                                    If, for whatever reason, you cannot make use of the bike(s) you have rented, Belgrade e-bikes will not be held responsible for any resulting expenses or damage.
                                </span>
                            </li>
                            <li className={styles.clause}>
                                <span className={styles.clauseLabel}>c.</span>
                                <span className={styles.clauseText}>
                                    In the case of the article 2b, the client remains obliged to pay the full rental price and any other amounts mentioned in the invoice, in accordance with our General Terms and Conditions, unless the client can prove that his not being able to use the bike was the consequence of a defect that was already present at the beginning of the rental period.
                                </span>
                            </li>
                            <li className={styles.clause}>
                                <span className={styles.clauseLabel}>e.</span>
                                <span className={styles.clauseText}>
                                    If the bike(s) is /are not returned by the return time stated in the booking confirmation, we will continue to charge you rent until such time as the bike(s) is/are returned to us or is/are received by us. In the event of late return, the rates as mentioned in article Belgrade e-bikes will continue to apply a fine of €5 per hour. We also reserve the right to demand payment for any costs and/or damages suffered by us due to late return of our rental bike(s).
                                </span>
                            </li>
                            <li className={styles.clause}>
                                <span className={styles.clauseLabel}>f.</span>
                                <span className={styles.clauseText}>
                                    Notwithstanding the preceding paragraph, in the event of late return of our rental bikes, we reserve the right to dissolve the rental agreement without judicial intervention and immediately claim back our bicycles where ever they may be and from whomever has them. Belgrade e-bikes also holds this right in the event that the client does not comply with any of the other conditions stated in this rental agreement.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* ARTICLE 4 */}
                    <div className={styles.articleBlock}>
                        <h2 className={styles.articleTitle}>Article 4 - Improper Use</h2>
                        <ul className={styles.clauseList}>
                            <li className={styles.clause}>
                                <span className={styles.clauseLabel}>a.</span>
                                <span className={styles.clauseText}>
                                    The bicycle(s) may only be used for its/their intended purpose and only by the cyclists listed in the rental agreement.
                                </span>
                            </li>
                            <li className={styles.clause}>
                                <span className={styles.clauseLabel}>b.</span>
                                <span className={styles.clauseText}>
                                    The bike(s) must be returned to us in the same (clean!) state in which you received it/them.
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}
