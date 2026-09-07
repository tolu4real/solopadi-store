"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.solopadi.vendor";

function BrowserFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`${styles.browserFrame} ${className}`}>
      <div className={styles.browserTopBar}>
        <div className={styles.browserDots}>
          <span />
          <span />
          <span />
        </div>

        <div className={styles.browserAddress}>
          <span className={styles.lockIcon}>⌁</span>
          solopadi.com.ng
        </div>

        <div className={styles.browserMenu}>•••</div>
      </div>

      <div className={styles.browserContent}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 800px) 94vw, 900px"
          className={styles.browserImage}
        />
      </div>
    </div>
  );
}

function PhoneFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`${styles.showcasePhone} ${styles.reveal} ${className}`}>
      <div className={styles.showcasePhoneSpeaker} />

      <div className={styles.showcasePhoneScreen}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 800px) 70vw, 360px"
          className={styles.showcasePhoneImage}
        />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className={styles.page}>
      {/* =========================================================
          NAVIGATION
      ========================================================= */}
      <header className={styles.nav}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.brand}>
            <Image
              src="/screenshots/solopadi_logo.png"
              alt="SoloPadi"
              width={42}
              height={42}
              className={styles.brandLogo}
              priority
            />

            <span className={styles.brandName}>SoloPadi</span>
          </Link>

          <nav className={styles.navLinks}>
            <a href="#how-it-works">How it works</a>
            <a href="#features">Features</a>
            <a href="#ai-business">AI Business</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navCta}
          >
            Get SoloPadi
            <span>↗</span>
          </a>
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              BUILT FOR MODERN SELLERS
            </div>

            <h1>
              You make the sale.
              <br />
              <span>SoloPadi handles everything after payment.</span>
            </h1>

            <p className={styles.heroDescription}>
              Keep selling through WhatsApp, Instagram, TikTok, or wherever
              your customers are. Once payment is settled, SoloPadi helps you
              manage the order, organize delivery, keep customers informed,
              and understand your business.
            </p>

            <div className={styles.heroActions}>
              

            
<a
  href={GOOGLE_PLAY_URL}
  target="_blank"
  rel="noopener noreferrer"
  className={styles.primaryButton}
>
  <Image
    src="/screenshots/playstore-icon.png"
    alt=""
    width={24}
    height={24}
    className={styles.playStoreIcon}
  />

  <span>Download SoloPadi</span>

  <span className={styles.buttonArrow}>↗</span>
</a>


              <a href="#how-it-works" className={styles.secondaryButton}>
                See how it works
                <span>↓</span>
              </a>
            </div>

            <div className={styles.heroTrust}>
              <div className={styles.playBadge}>
                <span className={styles.playIcon}>▶</span>

                <div>
                  <small>AVAILABLE ON</small>
                  <strong>Google Play</strong>
                </div>
              </div>

              <div className={styles.trustDivider} />

              <span className={styles.trustText}>
                Made for Nigerian businesses
              </span>
            </div>
          </div>

          <div className={styles.heroProduct}>
            <div className={styles.productGlow} />

            <div className={styles.floatingCardTop}>
              <div className={styles.floatingIcon}>✓</div>

              <div>
                <span>ORDER STATUS</span>
                <strong>Everything under control</strong>
              </div>
            </div>

            <div className={styles.phoneFrame}>
              <div className={styles.phoneSideButton} />

              <div className={styles.phoneTop}>
                <div className={styles.phoneSpeaker} />
              </div>

              <div className={styles.phoneScreen}>
                <Image
                  src="/screenshots/dashboard.png"
                  alt="SoloPadi business dashboard"
                  fill
                  priority
                  sizes="(max-width: 900px) 70vw, 420px"
                  className={styles.dashboardImage}
                />
              </div>
            </div>

            <div className={styles.floatingCardBottom}>
              <div className={styles.miniAvatar}>S</div>

              <div className={styles.floatingOrder}>
                <span>YOUR BUSINESS</span>
                <strong>Run it from one place.</strong>
              </div>

              <div className={styles.liveDot}>
                <span />
                Live
              </div>
            </div>

            <div className={styles.productShadow} />
          </div>
        </div>

        <div className={styles.heroBottom}>
          <span>SELL WHERE YOUR CUSTOMERS ARE</span>

          <div className={styles.channelList}>
            <span>WhatsApp</span>
            <span>Instagram</span>
            <span>TikTok</span>
            <span>Phone</span>
            <span>Social commerce</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          WORKFLOW INTRO
      ========================================================= */}
      <section id="how-it-works" className={styles.workflowIntro}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionEyebrow}>
            <span />
            THE SOLOPADI WORKFLOW
          </div>

          <h2>
            Your sale happens
            <br />
            <em>wherever you sell.</em>
          </h2>

          <p className={styles.sectionLead}>
            WhatsApp. Instagram. TikTok. Phone calls. Your customers already
            know where to find you. SoloPadi doesn't ask you to change that.
          </p>

          <div className={styles.workflowStatement}>
            <div className={styles.statementLine} />

            <div>
              <span>THEN SOLOPADI TAKES OVER</span>
              <strong>
                Everything after payment,
                <br />
                in one place.
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STEP 01 — CAPTURE THE ORDER
      ========================================================= */}
      <section className={styles.workflowSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.workflowGrid}>
            <div className={styles.workflowCopy}>
              <div className={styles.stepNumber}>01</div>

              <div className={styles.stepTag}>CAPTURE THE ORDER</div>

              <h3>
                Turn a confirmed sale
                <br />
                into an organized order.
              </h3>

              <p>
                Once you've made the sale and payment is settled, use SoloPadi
                to collect the information needed to fulfil the order. No more
                digging through conversations for delivery details.
              </p>

              <div className={styles.featurePoints}>
                <div>
                  <span>✓</span>
                  Customer details
                </div>

                <div>
                  <span>✓</span>
                  Delivery information
                </div>

                <div>
                  <span>✓</span>
                  Order details
                </div>
              </div>
            </div>

            <div className={styles.workflowVisual}>
              <BrowserFrame
                src="/screenshots/store-order-form.PNG"
                alt="SoloPadi customer order form"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STEP 02 — ORDERS
      ========================================================= */}
      <section className={`${styles.workflowSection} ${styles.softSection}`}>
        <div className={styles.sectionContainer}>
          <div className={`${styles.workflowGrid} ${styles.reverseGrid}`}>
            <div className={styles.workflowVisual}>
              <div className={styles.phoneCluster}>
                <PhoneFrame
                  src="/screenshots/orders.png"
                  alt="SoloPadi orders screen"
                />

                <div className={styles.clusterCard}>
                  <span>YOUR ORDERS</span>
                  <strong>Everything visible.</strong>
                </div>
              </div>
            </div>

            <div className={styles.workflowCopy}>
              <div className={styles.stepNumber}>02</div>

              <div className={styles.stepTag}>SEE EVERY ORDER</div>

              <h3>
                Stop searching
                <br />
                through conversations.
              </h3>

              <p>
                Your orders have a home. See what needs attention, what's
                moving, and what has already been delivered from a single
                business dashboard.
              </p>

              <div className={styles.featurePoints}>
                <div>
                  <span>✓</span>
                  Centralized orders
                </div>

                <div>
                  <span>✓</span>
                  Order status
                </div>

                <div>
                  <span>✓</span>
                  Faster follow-up
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STEP 03 — ORDER DETAILS
      ========================================================= */}
      <section className={styles.workflowSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.workflowGrid}>
            <div className={styles.workflowCopy}>
              <div className={styles.stepNumber}>03</div>

              <div className={styles.stepTag}>MANAGE THE DETAILS</div>

              <h3>
                Every important detail
                <br />
                stays with the order.
              </h3>

              <p>
                Keep the customer's information, products, delivery details,
                notes, and order status together. Your team spends less time
                remembering and more time fulfilling.
              </p>

              <div className={styles.featurePoints}>
                <div>
                  <span>✓</span>
                  Customer information
                </div>

                <div>
                  <span>✓</span>
                  Product details
                </div>

                <div>
                  <span>✓</span>
                  Order updates
                </div>
              </div>
            </div>

            <div className={styles.workflowVisual}>
              <div className={styles.singlePhoneStage}>
                <PhoneFrame
                  src="/screenshots/order-details.png"
                  alt="SoloPadi order details"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STEP 04 — RIDER
      ========================================================= */}
      <section className={`${styles.workflowSection} ${styles.darkSection}`}>
        <div className={styles.sectionContainer}>
          <div className={styles.workflowGrid}>
            <div className={styles.workflowCopy}>
              <div className={`${styles.stepNumber} ${styles.lightText}`}>
                04
              </div>

              <div className={`${styles.stepTag} ${styles.greenText}`}>
                ASSIGN DELIVERY
              </div>

              <h3 className={styles.whiteHeading}>
                From your order
                <br />
                to the doorstep.
              </h3>

              <p className={styles.darkParagraph}>
                Keep delivery connected to the order. Assign a rider and keep
                the delivery workflow visible instead of managing everything
                through separate calls and messages.
              </p>

              <div className={styles.featurePoints}>
                <div className={styles.lightPoint}>
                  <span>✓</span>
                  Rider assignment
                </div>

                <div className={styles.lightPoint}>
                  <span>✓</span>
                  Delivery progress
                </div>

                <div className={styles.lightPoint}>
                  <span>✓</span>
                  One connected workflow
                </div>
              </div>
            </div>

            <div className={styles.workflowVisual}>
              <div className={styles.darkPhoneStage}>
                <PhoneFrame
                  src="/screenshots/rider-assignment.png"
                  alt="SoloPadi rider assignment"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STEP 05 — CUSTOMER TRACKING
      ========================================================= */}
      <section className={styles.trackingSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.centerHeading}>
            <div className={styles.sectionEyebrow}>
              <span />
              CUSTOMER EXPERIENCE
            </div>

            <h2>
              No more
              <br />
              <em>“Where is my order?”</em>
            </h2>

            <p>
              Give customers a simple way to follow their order without
              repeatedly messaging you for updates.
            </p>
          </div>

          <div className={styles.trackingVisual}>
            <BrowserFrame
              src="/screenshots/tracking.PNG"
              alt="SoloPadi customer order tracking"
            />

            <div className={styles.trackingBadge}>
              <div className={styles.trackingBadgeIcon}>✓</div>

              <div>
                <span>CUSTOMER VIEW</span>
                <strong>Clear. Simple. Reassuring.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STEP 06 — ORDER CONFIRMATION
      ========================================================= */}
      <section className={`${styles.workflowSection} ${styles.softSection}`}>
        <div className={styles.sectionContainer}>
          <div className={styles.workflowGrid}>
            <div className={styles.workflowCopy}>
              <div className={styles.stepNumber}>06</div>

              <div className={styles.stepTag}>CLOSE THE LOOP</div>

              <h3>
                A better experience
                <br />
                from start to finish.
              </h3>

              <p>
                Keep the customer journey clear after the sale, from order
                confirmation through fulfilment and delivery.
              </p>

              <div className={styles.featurePoints}>
                <div>
                  <span>✓</span>
                  Order confirmation
                </div>

                <div>
                  <span>✓</span>
                  Customer confidence
                </div>

                <div>
                  <span>✓</span>
                  Professional experience
                </div>
              </div>
            </div>

            <div className={styles.workflowVisual}>
              <BrowserFrame
                src="/screenshots/order-confirmation.PNG"
                alt="SoloPadi order confirmation"
              />
            </div>
          </div>
        </div>
      </section>

    
      {/* =========================================================
          AI BUSINESS
      ========================================================= */}
      <section id="ai-business" className={styles.aiSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.aiGrid}>
            <div className={styles.aiCopy}>
              <div className={`${styles.sectionEyebrow} ${styles.greenEyebrow}`}>
                <span />
                AI BUSINESS
              </div>

              <h2>
                Your business gets
                <br />
                <em>a smarter second brain.</em>
              </h2>

              <p>
                SoloPadi AI helps you make sense of your business activity and
                turn it into practical next steps. Ask questions about your
                orders, customers, products, and performance instead of
                guessing what to do next.
              </p>

              <div className={styles.aiQuestions}>
                <div>How did my business perform this week?</div>
                <div>Which products are getting the most orders?</div>
                <div>What should I focus on this week?</div>
                <div>Why did my orders change?</div>
              </div>
            </div>

            <div className={styles.aiVisual}>
              <div className={styles.aiGlow} />

              <PhoneFrame
                src="/screenshots/ai-business.png"
                alt="SoloPadi AI Business assistant"
                className={styles.aiPhone}
              />

              <div className={styles.aiFloatingCard}>
                <div className={styles.aiPulse} />
                <div>
                  <span>BUSINESS INTELLIGENCE</span>
                  <strong>Ask. Understand. Act.</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          FEATURES
      ========================================================= */}
      <section id="features" className={styles.featuresSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.featuresHeader}>
            <div>
              <div className={styles.sectionEyebrow}>
                <span />
                ONE SYSTEM
              </div>

              <h2>
                Everything you need
                <br />
                <em>after the sale.</em>
              </h2>
            </div>

            <p>
              SoloPadi brings the operational side of your business together
              without asking you to abandon the platforms where you already
              sell.
            </p>
          </div>

          <div className={styles.featureGrid}>
            <div className={`${styles.featureCard} ${styles.featureCardLarge}`}>
              <div className={styles.featureIndex}>01</div>

              <div className={styles.featureIcon}>↗</div>

              <h3>Order Management</h3>

              <p>
                Keep every order organized from the moment it is captured to
                the moment it is delivered.
              </p>

              <div className={styles.featureMiniVisual}>
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIndex}>02</div>
              <div className={styles.featureIcon}>◎</div>

              <h3>Customer Information</h3>

              <p>
                Keep important customer and delivery details connected to the
                order.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIndex}>03</div>
              <div className={styles.featureIcon}>⌁</div>

              <h3>Delivery Management</h3>

              <p>
                Assign riders and keep delivery progress connected to the
                original order.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIndex}>04</div>
              <div className={styles.featureIcon}>◌</div>

              <h3>Customer Tracking</h3>

              <p>
                Give customers a clear view of their order without constant
                “where is my order?” messages.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIndex}>05</div>
              <div className={styles.featureIcon}>✓</div>

              <h3>Order Confirmation</h3>

              <p>
                Create a cleaner, more professional customer experience after
                the sale.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIndex}>06</div>
              <div className={styles.featureIcon}>▦</div>

              <h3>Business Dashboard</h3>

              <p>
                Get a clearer view of what's happening across your orders and
                operations.
              </p>
            </div>

            <div className={`${styles.featureCard} ${styles.featureCardGreen}`}>
              <div className={styles.featureIndex}>07</div>
              <div className={styles.featureIcon}>✦</div>

              <h3>AI Business</h3>

              <p>
                Turn your business activity into useful insights and practical
                decisions.
              </p>

              <div className={styles.aiCardOrb}>
                <span>AI</span>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIndex}>08</div>
              <div className={styles.featureIcon}>S</div>

              <h3>Vendor Profile</h3>

              <p>
                Build a recognizable business presence and keep your business
                information organized.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          SALES CHANNELS
      ========================================================= */}
      <section className={styles.channelsSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.channelsLayout}>
            <div className={styles.channelsCopy}>
              <div className={styles.sectionEyebrow}>
                <span />
                YOUR SALES CHANNELS
              </div>

              <h2>
                Keep selling
                <br />
                <em>where your customers are.</em>
              </h2>

              <p>
                SoloPadi doesn't replace WhatsApp, Instagram, TikTok, or your
                existing sales process. It gives you a better system for
                everything that happens after payment.
              </p>

              <div className={styles.channelPills}>
                <span>WhatsApp</span>
                <span>Instagram</span>
                <span>TikTok</span>
                <span>Phone</span>
                <span>Social commerce</span>
              </div>
            </div>

            <div className={styles.channelVisual}>
              <div className={styles.channelOrbit}>
                <div className={styles.orbitCenter}>
                  <Image
                    src="/screenshots/solopadi_logo.png"
                    alt="SoloPadi"
                    width={62}
                    height={62}
                  />
                </div>

                <div className={`${styles.orbitItem} ${styles.orbitOne}`}>
                  WhatsApp
                </div>

                <div className={`${styles.orbitItem} ${styles.orbitTwo}`}>
                  Instagram
                </div>

                <div className={`${styles.orbitItem} ${styles.orbitThree}`}>
                  TikTok
                </div>

                <div className={`${styles.orbitItem} ${styles.orbitFour}`}>
                  Phone
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          PAYMENT CLARIFICATION
      ========================================================= */}
      <section className={styles.paymentSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.paymentCard}>
            <div className={styles.paymentBadge}>
              <span>✓</span>
              YOUR PAYMENT STAYS YOURS
            </div>

            <div className={styles.paymentGrid}>
              <div>
                <h2>
                  SoloPadi doesn't
                  <br />
                  <em>hold your money.</em>
                </h2>
              </div>

              <div className={styles.paymentCopy}>
                <p>
                  You and your customer continue using your existing payment
                  method. SoloPadi does not process, collect, or hold customer
                  payments.
                </p>

                <p>
                  Once payment is settled, SoloPadi takes over the workflow
                  that comes next — order details, delivery, tracking,
                  confirmation, and business management.
                </p>

                <div className={styles.paymentFlow}>
                  <span>Customer</span>
                  <b>→</b>
                  <span>Your payment method</span>
                  <b>→</b>
                  <strong>SoloPadi workflow</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          WHO IT'S FOR
      ========================================================= */}
      <section className={styles.industrySection}>
        <div className={styles.sectionContainer}>
          <div className={styles.centerHeading}>
            <div className={styles.sectionEyebrow}>
              <span />
              BUILT FOR BUSINESSES THAT SELL
            </div>

            <h2>
              If you sell online,
              <br />
              <em>SoloPadi fits your workflow.</em>
            </h2>

            <p>
              Whether you are running a growing social-commerce business or
              managing orders every day, SoloPadi helps bring structure to the
              work behind the sale.
            </p>
          </div>

          <div className={styles.industryGrid}>
            <div>Fashion</div>
            <div>Beauty</div>
            <div>Food</div>
            <div>Accessories</div>
            <div>Electronics</div>
            <div>Home & lifestyle</div>
            <div>Small retail</div>
            <div>Social commerce</div>
          </div>
        </div>
      </section>


      {/* =========================================================
          FAQ
      ========================================================= */}
      <section id="faq" className={styles.faqSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.faqGrid}>
            <div className={styles.faqHeading}>
              <div className={styles.sectionEyebrow}>
                <span />
                QUESTIONS
              </div>

              <h2>
                Good questions.
                <br />
                <em>Clear answers.</em>
              </h2>

              <p>
                Everything you need to know before getting started with
                SoloPadi.
              </p>
            </div>

            <div className={styles.faqList}>
              <details open>
                <summary>
                  What is SoloPadi?
                  <span>+</span>
                </summary>

                <p>
                  SoloPadi is a business management app for sellers who take
                  orders through social media, messaging, phone calls, and
                  other existing sales channels. It helps manage what happens
                  after a customer has paid.
                </p>
              </details>

              <details>
                <summary>
                  Does SoloPadi process payments?
                  <span>+</span>
                </summary>

                <p>
                  No. SoloPadi does not process, collect, or hold customer
                  payments. You continue using your existing payment method.
                </p>
              </details>

              <details>
                <summary>
                  Do I need to stop using WhatsApp?
                  <span>+</span>
                </summary>

                <p>
                  No. Keep selling wherever your customers are. SoloPadi is
                  designed to organize the workflow that comes after payment.
                </p>
              </details>

              <details>
                <summary>
                  Does my customer need the SoloPadi app?
                  <span>+</span>
                </summary>

                <p>
                  Customers can use the web links you share with them for
                  order information, confirmation, and tracking. They do not
                  need to manage your business from the merchant app.
                </p>
              </details>

              <details>
                <summary>
                  Can customers track their orders?
                  <span>+</span>
                </summary>

                <p>
                  Yes. SoloPadi provides a customer-facing tracking experience
                  so customers can see the progress of their order.
                </p>
              </details>

              <details>
                <summary>
                  Can I manage riders?
                  <span>+</span>
                </summary>

                <p>
                  Yes. SoloPadi includes delivery workflow features that help
                  you assign riders and keep delivery progress connected to
                  orders.
                </p>
              </details>

              <details>
                <summary>
                  What does SoloPadi AI do?
                  <span>+</span>
                </summary>

                <p>
                  AI Business helps you understand your business activity and
                  answer practical questions about orders, performance,
                  products, and areas that may need attention.
                </p>
              </details>

              <details>
                <summary>
                  Where can I download SoloPadi?
                  <span>+</span>
                </summary>

                <p>
                  SoloPadi is available on Google Play for Android devices.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className={styles.finalCta}>
        <div className={styles.finalGlow} />

        <div className={styles.finalContent}>
          <div className={styles.finalLogo}>
            <Image
              src="/screenshots/solopadi_logo.png"
              alt="SoloPadi"
              width={60}
              height={60}
            />
          </div>

          <div className={styles.finalEyebrow}>
            SOLOPADI
          </div>

          <h2>
            You already have customers.
            <br />
            <span>You already have orders.</span>
          </h2>

          <p>
            Now organize what happens next.
          </p>

          
<a 
  href={GOOGLE_PLAY_URL} 
  target="_blank" 
  rel="noopener noreferrer" 
  className={styles.finalButton} 
>
  <Image
    src="/screenshots/playstore-icon.png"
    alt=""
    width={28}
    height={28}
    className={styles.playStoreIcon}
  />

  <span>Download SoloPadi</span>
  <b>↗</b>
</a>


          <div className={styles.finalAvailable}>
            Available now on Google Play
          </div>
        </div>
      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <div className={styles.footerBrandTop}>
              <Image
                src="/screenshots/solopadi_logo.png"
                alt="SoloPadi"
                width={38}
                height={38}
              />

              <strong>SoloPadi</strong>
            </div>

            <p>
              Sell where your customers are.
              <br />
              Manage everything after payment.
            </p>

            <a href="mailto:admin@solopadi.com.ng">
              admin@solopadi.com.ng
            </a>
          </div>

          <div className={styles.footerLinks}>
            <div>
              <span>PRODUCT</span>
              <a href="#how-it-works">How it works</a>
              <a href="#features">Features</a>
              <a href="#ai-business">AI Business</a>
              <a href="#faq">FAQ</a>
            </div>

            <div>
              <span>LEGAL</span>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/delete-account">Delete Account</Link>
            </div>

            
<div>
  <span>GET SOLOPADI</span>
  <a 
    href={GOOGLE_PLAY_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.footerPlayLink}
  >
    <Image
      src="/screenshots/playstore-icon.png"
      alt=""
      width={20}
      height={20}
      className={styles.playStoreIconSmall}
    />
    Google Play ↗
  </a>
</div>

          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© 2026 SoloPadi. All rights reserved.</span>
          <span>Built for modern sellers.</span>
        </div>
      </footer>


    </main>
  );
}
