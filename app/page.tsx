"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  return (
    <main className={styles.page}>
      {/* NAVIGATION */}
      <nav className={styles.nav}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandMark}>S</span>
          SoloPadi
        </Link>

        <div className={styles.navLinks}>
          <a href="#how-it-works">How it works</a>
          <a href="#ai">SoloPadi AI</a>
          <a href="#early-access">Early access</a>

          <a href="#early-access" className={styles.navCta}>
            Join early access
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Early Merchant Programme
            </div>

            <h1 className={styles.heroTitle}>
              You made the sale.
              <span className={styles.heroTitleAccent}>
                We handle what comes next.
              </span>
            </h1>

            <p className={styles.heroDescription}>
              Turn confirmed WhatsApp and social-media orders into organized,
              trackable deliveries — with the tools you need to manage the
              journey from customer details to final confirmation.
            </p>

            <div className={styles.heroActions}>
              <a href="#early-access" className={styles.primaryButton}>
                Join the Early Merchant Programme
                <span>→</span>
              </a>

              <a href="#how-it-works" className={styles.secondaryButton}>
                See how it works
              </a>
            </div>

            <p className={styles.heroNote}>
              Free early access · Limited first cohort · Built for Nigerian
              merchants
            </p>
          </div>

         
         {/* PRODUCT VISUAL */}
<div className={styles.heroVisual}>
  <div className={styles.visualGlow} />

  <div className={`${styles.heroOrb} ${styles.orbOne}`} />
  <div className={`${styles.heroOrb} ${styles.orbTwo}`} />

  <div className={`${styles.floatingCard} ${styles.cardOne}`}>
    <div className={styles.floatingTop}>
      <div className={styles.floatingIcon}>✓</div>

      <div className={styles.floatingLabel}>
        Order confirmed
      </div>
    </div>

    <div className={styles.floatingTitle}>
      Customer details received
    </div>

    <div className={styles.floatingSub}>
      Your order is ready to be managed.
    </div>
  </div>

  <div className={`${styles.floatingCard} ${styles.cardTwo}`}>
    <div className={styles.floatingTop}>
      <div className={styles.floatingIcon}>↗</div>

      <div className={styles.floatingLabel}>
        Delivery
      </div>
    </div>

    <div className={styles.floatingTitle}>
      Customer can track the order
    </div>

    <div className={styles.floatingSub}>
      A simple tracking experience keeps everyone informed.
    </div>
  </div>

  {/* REAL SOLOPADI DASHBOARD */}
  <div className={styles.dashboardFrame}>
    <div className={styles.dashboardBrowserBar}>
      <div className={styles.browserDots}>
        <span />
        <span />
        <span />
      </div>

      <div className={styles.browserAddress}>
        app.solopadi.com
      </div>
    </div>

    <div className={styles.dashboardImageWrap}>
      <img
        src="/screenshots/dashboard.png"
        alt="SoloPadi vendor dashboard"
        className={styles.dashboardImage}
      />
    </div>
  </div>
</div>
</div>
</section>

{/* SOCIAL COMMERCE CONTEXT */}
<section className={styles.contextStrip}>
  <div className={styles.contextInner}>
    <p className={styles.contextText}>
      Keep selling where your customers already are.
    </p>

    <div className={styles.channels}>
      <span className={styles.channel}>WhatsApp</span>
      <span className={styles.channel}>Instagram</span>
      <span className={styles.channel}>TikTok</span>
      <span className={styles.channel}>Facebook</span>
    </div>
  </div>
</section>




      {/* PROBLEM */}
      <section className={styles.darkSection}>
        <div className={styles.darkInner}>
          <div className={styles.sectionKicker}>
            The part nobody sees
          </div>

          <h2 className={styles.darkTitle}>
            The sale is only the beginning.
            <span> Then the real work starts.</span>
          </h2>

          <div className={styles.problemGrid}>
            <article className={styles.problemCard}>
              <div className={styles.problemNumber}>01</div>

              <h3>Customer details</h3>

              <p>
                Orders are agreed in conversations, but the information
                needed to fulfill them can become scattered across messages.
              </p>
            </article>

            <article className={styles.problemCard}>
              <div className={styles.problemNumber}>02</div>

              <h3>Fulfillment</h3>

              <p>
                Once payment and the sale are settled, someone still has to
                organize the order and get it moving.
              </p>
            </article>

            <article className={styles.problemCard}>
              <div className={styles.problemNumber}>03</div>

              <h3>Delivery</h3>

              <p>
                Customers want visibility, merchants want control, and
                everyone wants the order to arrive successfully.
              </p>
            </article>
          </div>
        </div>
            </section>

      {/* HOW IT WORKS */}
      <section
  id="how-it-works"
  className={styles.journeySection}
>
        <div className={styles.journeyInner}>
          <div className={styles.journeyIntro}>
            <div className={styles.journeyKicker}>
              HOW SOLOPADI WORKS
            </div>

            <h2 className={styles.journeyTitle}>
              From conversation
              <span> to confirmation.</span>
            </h2>

            <p className={styles.journeyDescription}>
              Keep selling wherever your customers already find you.
              SoloPadi takes over the operational journey once the sale is
              confirmed.
            </p>
          </div>

          <div className={styles.journeyFlow}>
            <div className={styles.journeyLine} />

            <article className={styles.journeyStep}>
              <div className={styles.journeyMarker}>
                01
              </div>

              <div className={styles.journeyContent}>
                <div className={styles.journeyLabel}>
                  SALE CONFIRMED
                </div>

                <h3>
                  Close the sale where you already sell.
                </h3>

                <p>
                  Continue using WhatsApp, Instagram, TikTok or your
                  preferred social channel to communicate with your
                  customers and finalize the order.
                </p>
              </div>

              <div className={styles.journeyVisual}>
                <div className={styles.chatMock}>
                  <div className={styles.chatHeader}>
                    Customer conversation
                  </div>

                  <div className={styles.chatBubble}>
                    Order confirmed ✓
                  </div>

                  <div className={styles.chatBubbleSmall}>
                    Thank you!
                  </div>
                </div>
              </div>
            </article>

            <article className={styles.journeyStep}>
              <div className={styles.journeyMarker}>
                02
              </div>

              <div className={styles.journeyContent}>
                <div className={styles.journeyLabel}>
                  ORDER DETAILS
                </div>

                <h3>
                  Send your SoloPadi link.
                </h3>

                <p>
                  Give the customer a simple SoloPadi link to provide the
                  information needed to fulfill the order and arrange
                  delivery.
                </p>
              </div>

              <div className={styles.journeyVisual}>
                <div className={styles.linkMock}>
                  <div className={styles.linkIcon}>
                    ↗
                  </div>

                  <div>
                    <small>SOLOPADI ORDER LINK</small>
                    <strong>Complete your order details</strong>
                  </div>
                </div>
              </div>
            </article>

            <article className={styles.journeyStep}>
              <div className={styles.journeyMarker}>
                03
              </div>

              <div className={styles.journeyContent}>
                <div className={styles.journeyLabel}>
                  MANAGE
                </div>

                <h3>
                  Everything arrives organized.
                </h3>

                <p>
                  See the order information in one place and move it through
                  your fulfillment workflow instead of searching through
                  conversations.
                </p>
              </div>

              <div className={styles.journeyVisual}>
                <div className={styles.orderMock}>
                  <div className={styles.orderMockTop}>
                    <span>ORDER</span>
                    <b>#SP-1048</b>
                  </div>

                  <div className={styles.orderMockRow}>
                    <span>Customer</span>
                    <strong>New order</strong>
                  </div>

                  <div className={styles.orderMockRow}>
                    <span>Status</span>
                    <strong className={styles.greenText}>
                      Processing
                    </strong>
                  </div>
                </div>
              </div>
            </article>

            <article className={styles.journeyStep}>
              <div className={styles.journeyMarker}>
                04
              </div>

              <div className={styles.journeyContent}>
                <div className={styles.journeyLabel}>
                  DELIVERY
                </div>

                <h3>
                  Move the order toward your customer.
                </h3>

                <p>
                  Manage fulfillment and coordinate delivery so every order
                  has a clear next step.
                </p>
              </div>

              <div className={styles.journeyVisual}>
                <div className={styles.deliveryMock}>
                  <div className={styles.deliveryTrack}>
                    <span className={styles.activeDot} />
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className={styles.deliveryLabels}>
                    <span>Prepared</span>
                    <span>Rider</span>
                    <span>On the way</span>
                    <span>Delivered</span>
                  </div>
                </div>
              </div>
            </article>

            <article className={styles.journeyStep}>
              <div className={styles.journeyMarker}>
                05
              </div>

              <div className={styles.journeyContent}>
                <div className={styles.journeyLabel}>
                  CUSTOMER TRACKING
                </div>

                <h3>
                  Keep the customer in the loop.
                </h3>

                <p>
                  Share a tracking link so customers can see the progress of
                  their order without needing to ask for an update every
                  time.
                </p>
              </div>

              <div className={styles.journeyVisual}>
                <div className={styles.trackingMock}>
                  <div className={styles.trackingHeader}>
                    <span>SoloPadi</span>
                    <span>Tracking</span>
                  </div>

                  <div className={styles.trackingStatus}>
                    Out for delivery
                  </div>

                  <div className={styles.trackingSub}>
                    Your order is on the way.
                  </div>

                  <div className={styles.trackingProgress}>
                    <span />
                    <span />
                    <span />
                    <span className={styles.progressActive} />
                  </div>
                </div>
              </div>
            </article>

            <article className={styles.journeyStep}>
              <div className={styles.journeyMarker}>
                06
              </div>

              <div className={styles.journeyContent}>
                <div className={styles.journeyLabel}>
                  DELIVERY CONFIRMED
                </div>

                <h3>
                  Close the loop.
                </h3>

                <p>
                  Once the order reaches the customer, the delivery journey
                  is completed with a simple confirmation.
                </p>
              </div>

              <div className={styles.journeyVisual}>
                <div className={styles.completeMock}>
                  <div className={styles.completeIcon}>
                    ✓
                  </div>

                  <strong>Delivered</strong>

                  <span>
                    Order successfully completed
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>



      
      {/* PRODUCT REVEAL */}
<section className={styles.productSection}>
  <div className={styles.productInner}>

    <div className={styles.productHeading}>
      <div className={styles.productKicker}>
        ONE ORDER. ONE CLEAR JOURNEY.
      </div>

      <h2 className={styles.productTitle}>
        Your customers
        <span> shouldn’t live inside your inbox.</span>
      </h2>

      <p className={styles.productDescription}>
        Once a customer has ordered and payment has been handled,
        SoloPadi gives you a structured way to collect the remaining
        details, manage the order, coordinate delivery and keep the
        customer informed.
      </p>
    </div>

   {/* REAL PRODUCT SCREENSHOTS */}
<div className={styles.productShowcase}>

  <div className={styles.productGlow} />

  <div className={styles.productScreensGrid}>

    {/* ORDERS */}
    <div className={styles.productPhoneFrame}>
      <div className={styles.productPhoneScreen}>
        <img
          src="/screenshots/orders.png"
          alt="SoloPadi orders management screen"
          className={styles.productPhoneImage}
        />
      </div>
    </div>

    {/* RIDER ASSIGNMENT */}
    <div className={styles.productPhoneFrame}>
      <div className={styles.productPhoneScreen}>
        <img
          src="/screenshots/rider-assignment.png"
          alt="SoloPadi rider assignment screen"
          className={styles.productPhoneImage}
        />
      </div>
    </div>

    {/* TRACKING */}
    <div className={styles.productPhoneFrame}>
      <div className={styles.productPhoneScreen}>
        <img
          src="/screenshots/tracking.png"
          alt="SoloPadi order tracking screen"
          className={styles.productPhoneImage}
        />
      </div>
    </div>

  </div>

</div>




    <div className={styles.productFootnote}>
      <span>01</span>

      <p>
        Built around the way social sellers already work — not around
        forcing them into a completely new way of selling.
      </p>
    </div>

  </div>
</section>


            {/* AI BUSINESS INTELLIGENCE */}
      {/* AI BUSINESS INTELLIGENCE */}
<section className={styles.aiSection} id="ai">
  <div className={styles.aiInner}>

    {/* INTRO */}
    <div className={styles.aiIntro}>
      <div className={styles.aiKicker}>
        SOLOPADI INTELLIGENCE
      </div>

      <h2 className={styles.aiTitle}>
        Ask your business.
        <span> Get useful answers.</span>
      </h2>

      <p className={styles.aiDescription}>
        SoloPadi AI helps you understand your business through the orders
        and activity already inside SoloPadi. Ask about orders, customers,
        products, sales or delivery — and get practical answers without
        digging through your records yourself.
      </p>
    </div>


    {/* AI PRODUCT + CONVERSATION */}
    <div className={styles.aiGrid}>

      {/* =====================================================
          REAL SOLOPADI AI SCREENSHOT
          ===================================================== */}
      <div className={styles.aiProductShowcase}>

        <div className={styles.aiProductGlow} />

        <div className={styles.aiScreenshotFrame}>

          {/* Browser-style top bar */}
          <div className={styles.aiScreenshotTopbar}>

            <div className={styles.browserDots}>
              <span />
              <span />
              <span />
            </div>

            <div className={styles.aiBrowserAddress}>
              app.solopadi.com
            </div>

          </div>


          {/* Real product screenshot */}
          <div className={styles.aiScreenshotImageWrap}>

            <img
              src="/screenshots/ai-business.png"
              alt="SoloPadi AI business assistant"
              className={styles.aiScreenshotImage}
            />

          </div>

        </div>


        {/* Floating capability card */}
        <div className={styles.aiFloatingCard}>

          <div className={styles.aiFloatingIcon}>
            ✦
          </div>

          <div>
            <small>
              ASK SOLOPADI
            </small>

            <strong>
              Your business, one conversation away.
            </strong>

            <span>
              Ask about orders, customers, sales or delivery.
            </span>
          </div>

        </div>

      </div>


      {/* =====================================================
          AI CONVERSATION
          ===================================================== */}
      <div className={styles.aiConversationCard}>

        {/* Header */}
        <div className={styles.aiCardHeader}>

          <div>
            <small>
              SOLOPADI AI
            </small>

            <strong>
              Business Assistant
            </strong>
          </div>

          <div className={styles.aiSpark}>
            ✦
          </div>

        </div>


        {/* Conversation */}
        <div className={styles.aiChatArea}>

          {/* QUESTION 1 */}
          <div className={styles.aiUserMessage}>
            Which of my orders are still pending delivery?
          </div>


          {/* ANSWER 1 */}
          <div className={styles.aiResponse}>

            <div className={styles.aiResponseMark}>
              S
            </div>

            <div>

              <strong>
                Here’s what I found.
              </strong>

              <p>
                You currently have
                <b> 4 orders still awaiting delivery.</b>
                Two were placed today and two are from yesterday.
              </p>


              <div className={styles.aiMiniInsight}>

                <span>
                  Needs attention
                </span>

                <strong>
                  2 orders
                </strong>

                <em>
                  From yesterday
                </em>

              </div>


              <div className={styles.aiMiniInsight}>

                <span>
                  Out for delivery
                </span>

                <strong>
                  2 orders
                </strong>

                <em>
                  On the way
                </em>

              </div>

            </div>

          </div>


          {/* QUESTION 2 */}
          <div className={styles.aiUserMessage}>
            How can I improve my sales?
          </div>


          {/* ANSWER 2 */}
          <div className={styles.aiResponse}>

            <div className={styles.aiResponseMark}>
              S
            </div>

            <div>

              <strong>
                Based on your recent activity:
              </strong>

              <p>
                Your strongest products are generating most of your
                completed orders. Consider promoting those products more
                consistently and following up with customers who haven't
                completed their orders.
              </p>

            </div>

          </div>


          {/* SUGGESTED QUESTIONS */}
          <div className={styles.aiSuggestion}>
            ✦ Ask about orders, customers, sales or delivery
          </div>

        </div>

      </div>

    </div>


    {/* BOTTOM CAPABILITY STATEMENT */}
    <div className={styles.aiFootnote}>

      <span>
        04
      </span>

      <p>
        From finding an order to understanding your sales performance,
        SoloPadi AI helps turn your business activity into answers you
        can actually use.
      </p>

    </div>

  </div>
</section>

      

{/* CUSTOMER EXPERIENCE */}
<section className={styles.customerSection} id="customer-tracking">
  <div className={styles.customerInner}>

    <div className={styles.customerIntro}>
      <div className={styles.customerKicker}>
        THE CUSTOMER EXPERIENCE
      </div>

      <h2 className={styles.customerTitle}>
        Less
        <span> “where is my order?”</span>
        <br />
        More confidence.
      </h2>

      <p className={styles.customerDescription}>
        Your customer doesn't need the SoloPadi app. They simply open
        their tracking link to see what is happening with their order,
        from confirmation to delivery.
      </p>
    </div>

    {/* REAL CUSTOMER TRACKING SCREENSHOT */}
    <div className={styles.customerShowcase}>

      <div className={styles.customerGlow} />

      <div className={styles.customerScreenshotFrame}>

        <div className={styles.customerBrowserBar}>

          <div className={styles.customerBrowserDots}>
            <span />
            <span />
            <span />
          </div>

          <div className={styles.customerBrowserAddress}>
            solopadi.com/track/your-order
          </div>

        </div>

        <div className={styles.customerScreenshotWrap}>
          <img
            src="/screenshots/tracking.PNG"
            alt="SoloPadi customer order tracking page"
            className={styles.customerScreenshot}
          />
        </div>

      </div>

      {/* FLOATING CUSTOMER MESSAGE */}
      <div className={styles.customerFloatingCard}>

        <div className={styles.customerFloatingIcon}>
          ✓
        </div>

        <div>
          <small>CUSTOMER EXPERIENCE</small>

          <strong>
            No app. No account. Just tracking.
          </strong>
        </div>

      </div>

    </div>

    {/* CUSTOMER BENEFITS */}
    <div className={styles.customerBottom}>

      <div className={styles.customerStatement}>

        <span>03</span>

        <div>
          <small>FOR YOUR CUSTOMERS</small>

          <h3>
            A better experience
            <br />
            without another app.
          </h3>

          <p>
            Customers don't need to sign up, download anything or
            learn a new platform. Their order link does the work.
          </p>
        </div>

      </div>

      <div className={styles.customerBenefits}>

        <div>
          <strong>01</strong>
          <span>
            Shareable tracking link
          </span>
        </div>

        <div>
          <strong>02</strong>
          <span>
            Clear delivery status
          </span>
        </div>

        <div>
          <strong>03</strong>
          <span>
            Simple order confirmation
          </span>
        </div>

      </div>

    </div>

  </div>
</section>
           
            {/* EARLY MERCHANT PROGRAMME */}
      <section className={styles.earlySection} id="early-access">
        <div className={styles.earlyGlow} />

        <div className={styles.earlyInner}>

          <div className={styles.earlyTop}>

            <div className={styles.earlyKicker}>
              FOUNDING MERCHANT PROGRAMME
            </div>

            <div className={styles.earlyNumber}>
              30
            </div>

          </div>

          <div className={styles.earlyMain}>

            <div className={styles.earlyCopy}>

              <h2 className={styles.earlyTitle}>
                Be one of the
                <br />
                <span>first 30.</span>
              </h2>

              <p className={styles.earlyDescription}>
                SoloPadi is currently inviting a small group of Nigerian
                online merchants to experience the platform before public
                launch.
              </p>

              <p className={styles.earlyDescriptionSecondary}>
                You'll get early access, help getting started and a direct
                opportunity to influence what SoloPadi becomes.
              </p>

            </div>

            <div className={styles.earlyCard}>

              <div className={styles.earlyCardTop}>
                <div>
                  <small>SOLOPADI</small>
                  <strong>Early Merchant Programme</strong>
                </div>

                <div className={styles.earlyBadge}>
                  EARLY ACCESS
                </div>
              </div>

              <div className={styles.earlyDivider} />

              <div className={styles.earlyBenefits}>

                <div>
                  <span>01</span>
                  <p>
                    Early access to SoloPadi
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <p>
                    Personal onboarding support
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <p>
                    Help shape future features
                  </p>
                </div>

                <div>
                  <span>04</span>
                  <p>
                    Direct feedback channel with the team
                  </p>
                </div>

              </div>

              <a
                href="#apply"
                className={styles.earlyButton}
              >
                Apply for early access
                <span>↗</span>
              </a>

              <div className={styles.earlyNote}>
                <span className={styles.earlyDot} />
                Applications are reviewed individually.
              </div>

            </div>

          </div>

          <div className={styles.earlyBottom}>

            <div>
              <span>01</span>
              <p>
                Apply
              </p>
            </div>

            <div>
              <span>02</span>
              <p>
                Get reviewed
              </p>
            </div>

            <div>
              <span>03</span>
              <p>
                Get onboarded
              </p>
            </div>

            <div>
              <span>04</span>
              <p>
                Start managing orders
              </p>
            </div>

          </div>

        </div>
      </section>
            {/* MERCHANT APPLICATION */}
      <section
        className={styles.applicationSection}
        id="apply"
      >
        <div className={styles.applicationInner}>

          <div className={styles.applicationHeader}>
            <div className={styles.applicationKicker}>
              EARLY MERCHANT APPLICATION
            </div>

            <h2 className={styles.applicationTitle}>
              Tell us about
              <br />
              <span>your business.</span>
            </h2>

            <p className={styles.applicationDescription}>
              A few details help us understand your business and how
              SoloPadi could fit into the way you already sell.
            </p>
          </div>


{submitted && (
  <div className={styles.applicationSuccess}>

    <div className={styles.successIcon}>
      ✓
    </div>

    <div>
      <small>APPLICATION RECEIVED</small>

      <h3>
        You're on the list.
      </h3>

      <p>
        Thank you for applying to the SoloPadi Early Merchant Programme.
        We'll review your application and contact you with the next steps.
      </p>
    </div>

    <button
      type="button"
      className={styles.successReset}
      onClick={() => setSubmitted(false)}
    >
      Submit another application ↗
    </button>

  </div>
)}

          {!submitted && (
  <form
    className={styles.applicationForm}
  onSubmit={async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to submit application."
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error(error);

      setSubmitError(
        "We couldn't submit your application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }}
>

            <div className={styles.formProgress}>
              <div>
                <span>01</span>
                <p>BUSINESS</p>
              </div>

              <div>
                <span>02</span>
                <p>OPERATIONS</p>
              </div>

              <div>
                <span>03</span>
                <p>CONTACT</p>
              </div>
            </div>

            <div className={styles.formSection}>

              <div className={styles.formSectionTitle}>
                <span>01</span>

                <div>
                  <small>YOUR BUSINESS</small>
                  <h3>Let's start with the basics.</h3>
                </div>
              </div>

              <div className={styles.formGrid}>

                <label className={styles.formField}>
                  <span>Full name</span>

                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Daniel Okafor"
                    required
                  />
                </label>

                <label className={styles.formField}>
                  <span>Business name</span>

                  <input
                    type="text"
                    name="businessName"
                    placeholder="e.g. Daniel's Fashion"
                    required
                  />
                </label>

                <label
                  className={`${styles.formField} ${styles.formFieldFull}`}
                >
                  <span>What do you sell?</span>

                  <select
                    name="businessType"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select your business type
                    </option>
                    <option value="fashion">
                      Fashion & clothing
                    </option>
                    <option value="beauty">
                      Beauty & cosmetics
                    </option>
                    <option value="food">
                      Food & food products
                    </option>
                    <option value="electronics">
                      Electronics & gadgets
                    </option>
                    <option value="home">
                      Home & lifestyle
                    </option>
                    <option value="services">
                      Services
                    </option>
                    <option value="other">
                      Other
                    </option>
                  </select>
                </label>

              </div>

            </div>

            <div className={styles.formSection}>

              <div className={styles.formSectionTitle}>
                <span>02</span>

                <div>
                  <small>YOUR OPERATIONS</small>
                  <h3>Help us understand your workflow.</h3>
                </div>
              </div>

              <div className={styles.formGrid}>

                <label className={styles.formField}>
                  <span>Orders per week</span>

                  <select
                    name="ordersPerWeek"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select an estimate
                    </option>
                    <option value="1-10">1 – 10</option>
                    <option value="11-30">11 – 30</option>
                    <option value="31-50">31 – 50</option>
                    <option value="51-100">51 – 100</option>
                    <option value="100+">100+</option>
                  </select>
                </label>

                <label className={styles.formField}>
                  <span>Main sales channel</span>

                  <select
                    name="salesChannel"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Where do you sell?
                    </option>
                    <option value="whatsapp">
                      WhatsApp
                    </option>
                    <option value="instagram">
                      Instagram
                    </option>
                    <option value="tiktok">
                      TikTok
                    </option>
                    <option value="facebook">
                      Facebook
                    </option>
                    <option value="multiple">
                      Multiple platforms
                    </option>
                  </select>
                </label>

                <label
                  className={`${styles.formField} ${styles.formFieldFull}`}
                >
                  <span>
                    What is the biggest challenge you face after getting an
                    order?
                  </span>

                  <textarea
                    name="challenge"
                    rows={4}
                    placeholder="Tell us what usually happens after a customer places an order..."
                    required
                  />
                </label>

              </div>

            </div>

            <div className={styles.formSection}>

              <div className={styles.formSectionTitle}>
                <span>03</span>

                <div>
                  <small>HOW WE REACH YOU</small>
                  <h3>One last thing.</h3>
                </div>
              </div>

              <div className={styles.formGrid}>

                <label className={styles.formField}>
                  <span>Email address</span>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>

                <label className={styles.formField}>
                  <span>WhatsApp / phone number</span>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+234..."
                    required
                  />
                </label>

                <label
                  className={`${styles.formField} ${styles.formFieldFull}`}
                >
                  <span>
                    Your business link
                    <em>optional</em>
                  </span>

                  <input
                    type="url"
                    name="businessLink"
                    placeholder="https://instagram.com/yourbusiness"
                  />
                </label>

              </div>

            </div>

            <div className={styles.formSubmitArea}>

              <div className={styles.formPrivacy}>
                <span>✓</span>

                <p>
                  Your information is used only to review your application
                  and contact you about the SoloPadi Early Merchant Programme.
                </p>
              </div>

              <button
  type="submit"
  className={styles.applicationButton}
  disabled={isSubmitting}
>
  {isSubmitting ? "Submitting application..." : "Submit application"}

  <span>
    {isSubmitting ? "…" : "↗"}
  </span>
</button>

{submitError && (
  <p className={styles.formError}>
    {submitError}
  </p>
)}

            </div>

          </form>
          )}

        </div>
      </section>
      {/* ==================== FOOTER ==================== */}

<footer className={styles.footer}>

  <div className={styles.footerInner}>

    {/* Top CTA */}
    <div className={styles.footerCta}>

      <div className={styles.footerCtaCopy}>
        <span className={styles.footerEyebrow}>
          EARLY MERCHANT PROGRAMME
        </span>

        <h2>
          Build the business
          <br />
          <span>behind the sale.</span>
        </h2>

        <p>
          Sell where your customers already are.
          Manage everything that happens after the sale.
        </p>
      </div>

      <a
  href="#apply"
  className={styles.footerCtaButton}
>
  <span className={styles.ctaDesktop}>
    Join the Early Merchant Programme
  </span>

  <span className={styles.ctaMobile}>
    Join Early Access
  </span>

  <span className={styles.ctaArrow}>↗</span>
</a>

    </div>


    {/* Footer navigation */}
    <div className={styles.footerMain}>

      {/* Brand */}
      <div className={styles.footerBrand}>

        <a href="/" className={styles.footerLogo}>
          <span className={styles.footerLogoMark}>
            S
          </span>

          <span>
            SoloPadi
          </span>
        </a>

        <p>
          Sell where your customers already are.
          Manage everything that happens after the sale.
        </p>

        <a
          href="mailto:admin.solopadi@gmail.com"
          className={styles.footerEmail}
        >
          admin.solopadi@gmail.com
        </a>

      </div>


      {/* Product */}
      <div className={styles.footerColumn}>

        <span className={styles.footerColumnTitle}>
          Product
        </span>

        <a href="#how-it-works">
          How it works
        </a>

        <a href="#ai">
          AI for business
        </a>

        <a href="#customer-tracking">
          Customer tracking
        </a>

        <a href="#apply">
          Early Merchant Programme
        </a>

      </div>


      {/* Company */}
      <div className={styles.footerColumn}>

        <span className={styles.footerColumnTitle}>
          Company
        </span>

        <a href="#about">
          About SoloPadi
        </a>

        <a href="mailto:admin.solopadi@gmail.com">
          Contact
        </a>

      </div>


      {/* Legal */}
      <div className={styles.footerColumn}>

        <span className={styles.footerColumnTitle}>
          Legal
        </span>

        <a href="/privacy-policy">
          Privacy Policy
        </a>

        <a href="/terms">
          Terms of Service
        </a>

        <a href="/delete-account">
          Delete Account
        </a>

      </div>

    </div>


    {/* Bottom bar */}
    <div className={styles.footerBottom}>

      <p>
        © 2026 SoloPadi. Built for modern Nigerian businesses.
      </p>

      <div className={styles.footerBottomRight}>
        <span>
          Made for commerce after the sale.
        </span>

        <span className={styles.footerStatus}>
          <i />
          Early access
        </span>
      </div>

    </div>

  </div>

</footer>
    </main>
  );
}