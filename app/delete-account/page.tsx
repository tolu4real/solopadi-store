import styles from "./page.module.css";

export const metadata = {
  title: "Delete Your SoloPadi Account",
  description:
    "Instructions for requesting deletion of your SoloPadi account and associated personal data.",
};

export default function DeleteAccountPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.topBar}>
            <a href="/" className={styles.brand}>
              <span className={styles.brandMark}>S</span>
              SoloPadi
            </a>

            <a href="/" className={styles.backLink}>
              ← Back to SoloPadi
            </a>
          </div>

          <div className={styles.icon}>🗑️</div>

          <h1>Delete Your SoloPadi Account</h1>

          <p className={styles.subtitle}>
            SoloPadi account and data deletion information
          </p>
        </header>

        {/* Main content */}
        <article className={styles.card}>
          <div className={styles.content}>

            {/* Introduction */}
            <section className={`${styles.section} ${styles.intro}`}>
              <h2>Request account deletion</h2>

              <p>
                SoloPadi provides logged-in users with the ability to delete
                their account from within the SoloPadi application. Account
                deletion is intended for users who no longer want to use their
                SoloPadi account.
              </p>
            </section>

            {/* Steps */}
            <section className={styles.section}>
              <h2>How to delete your SoloPadi account</h2>

              <ol className={styles.steps}>
                {[
                  "Open the SoloPadi application.",
                  "Sign in to your SoloPadi account.",
                  "Open the Settings section of the application.",
                  "Select the Delete Account option.",
                  "Review the information presented and confirm that you want to delete your account.",
                ].map((step, index) => (
                  <li key={step} className={styles.step}>
                    <span className={styles.stepNumber}>
                      {index + 1}
                    </span>

                    <span className={styles.stepText}>
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            {/* What gets deleted */}
            <section className={`${styles.section} ${styles.infoBox}`}>
              <h2>What happens to your data</h2>

              <p>
                When an account deletion request is completed, SoloPadi will
                delete or anonymize personal information associated with the
                account where reasonably possible.
              </p>

              <ul className={styles.list}>
                <li>
                  Your SoloPadi account and associated authentication
                  information will be deleted or disabled.
                </li>

                <li>
                  Personal information associated with your account will be
                  deleted or anonymized where reasonably possible.
                </li>

                <li>
                  Information that is no longer required for legitimate
                  business or legal purposes may be removed from our systems.
                </li>

                <li>
                  Deletion may permanently remove your access to your SoloPadi
                  account and associated account features.
                </li>
              </ul>
            </section>

            {/* Data that may be retained */}
            <section className={styles.section}>
              <h2>Information that may be retained</h2>

              <p>
                Some information may need to be retained after an account
                deletion request where reasonably necessary or required by
                applicable law.
              </p>

              <ul className={styles.list}>
                <li>
                  Business or transaction records that must be retained to
                  comply with legal or regulatory obligations.
                </li>

                <li>
                  Information reasonably necessary to resolve disputes or
                  enforce agreements.
                </li>

                <li>
                  Information reasonably necessary to detect, prevent or
                  investigate fraud, abuse or security incidents.
                </li>

                <li>
                  Information required to protect the rights, safety or
                  security of SoloPadi, its users or third parties.
                </li>
              </ul>

              <p style={{ marginTop: "16px" }}>
                Where information must be retained for one of these purposes,
                it will be retained only for as long as reasonably necessary
                for that purpose and will be deleted or anonymized when it is
                no longer required, subject to applicable legal requirements.
              </p>
            </section>

            {/* Customer and order information */}
            <section className={styles.section}>
              <h2>Customer and order information</h2>

              <p>
                SoloPadi may contain customer and order information recorded by
                businesses. Deleting a vendor account does not necessarily mean
                that every historical order or business transaction record is
                immediately deleted, particularly where the information must be
                retained for legitimate business, legal, security or dispute
                resolution purposes. Where appropriate, personal information
                may be deleted or anonymized.
              </p>
            </section>

            {/* Need help */}
            <section className={`${styles.section} ${styles.contactBox}`}>
              <h2>Need help?</h2>

              <p>
                If you cannot access your SoloPadi account or cannot complete
                the deletion process from within the application, contact us
                at
              </p>

              <a
                href="mailto:admin.solopadi@gmail.com"
                className={styles.email}
              >
                admin.solopadi@gmail.com
              </a>

              <p style={{ marginTop: "14px" }}>
                Please include enough information for us to identify your
                account and process your request. We may need to verify your
                identity before processing a deletion request.
              </p>
            </section>

            {/* Privacy Policy */}
            <section className={styles.bottom}>
              <p>
                For additional information about how SoloPadi collects, uses,
                stores and protects information, please see our{" "}
                <a
                  href="/privacy-policy"
                  className={styles.bottomLink}
                >
                  Privacy Policy
                </a>
                .
              </p>

              <p className={styles.brandFooter}>
                SoloPadi
              </p>

              <p className={styles.footerDescription}>
                Business management and order management platform
              </p>
            </section>

          </div>
        </article>

      </div>
    </main>
  );
}