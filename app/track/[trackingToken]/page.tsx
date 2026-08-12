"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "../../../lib/supabase";

type TrackingOrder = {
  order_number: number | null;
  created_at: string | null;
  order_status: string | null;
  delivery_status: string | null;
  accepted_at: string | null;
  assigned_at: string | null;
  picked_up_at: string | null;
  delivered_at: string | null;
  completed_at: string | null;
  rejected_at: string | null;
};

type TrackingResponse = {
  success: boolean;
  message?: string;
  order?: TrackingOrder;
};

type TrackingStep = {
  title: string;
  description: string;
  time: string | null;
  completed: boolean;
  current: boolean;
  rejected?: boolean;
};

export default function TrackingPage() {
  const params = useParams();

  const trackingToken = params?.trackingToken as string;

  const [order, setOrder] = useState<TrackingOrder | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (trackingToken) {
      loadTracking();
    }
  }, [trackingToken]);

  async function loadTracking() {
    setLoading(true);
    setError("");

    const { data, error } = await supabase.rpc(
      "get_order_tracking",
      {
        p_tracking_token: trackingToken,
      }
    );

    console.log("TRACKING RPC DATA:", data);
    console.log("TRACKING RPC ERROR:", error);

    if (error) {
      console.error("Tracking error:", error);
      setError(
        "We could not load your order tracking information."
      );
      setLoading(false);
      return;
    }

    const result = data as TrackingResponse;

    if (!result?.success || !result.order) {
      setError(
        result?.message ||
          "This tracking link is invalid or unavailable."
      );
      setLoading(false);
      return;
    }

    setOrder(result.order);
    setLoading(false);
  }

  const steps = order
    ? buildTrackingSteps(order)
    : [];

  if (loading) {
    return (
      <main style={styles.page}>
        <div style={styles.loadingCard}>
          <div style={styles.loadingLogo}>
            <span>S</span>
          </div>

          <div style={styles.spinner} />

          <h2 style={styles.loadingTitle}>
            Loading your order
          </h2>

          <p style={styles.loadingText}>
            Please wait while we retrieve your
            latest order status.
          </p>
        </div>
      </main>
    );
  }

  if (error || !order) {
    return (
      <main style={styles.page}>
        <div style={styles.card}>
          <div style={styles.errorCircle}>
            !
          </div>

          <h1 style={styles.title}>
            Tracking Unavailable
          </h1>

          <p style={styles.subtitle}>
            {error ||
              "We could not find this order."}
          </p>

          <div style={styles.securityBox}>
            <span style={styles.securityIcon}>
              🔒
            </span>

            <span>
              Please make sure you are using the
              complete tracking link provided for
              your order.
            </span>
          </div>

          <Footer />
        </div>
      </main>
    );
  }

  const reference = order.order_number
    ? `#${order.order_number}`
    : "Order";

  const completed = order.order_status === "Completed";
  const rejected = order.order_status === "Rejected";

  return (
    <main style={styles.page}>
      <div style={styles.container}>

        {/* HEADER */}

        <header style={styles.header}>
          <div style={styles.brandRow}>
            <div style={styles.logo}>
              S
            </div>

            <div>
              <div style={styles.brand}>
                SoloPadi
              </div>

              <div style={styles.brandSub}>
                Order Tracking
              </div>
            </div>
          </div>
        </header>

        {/* ORDER HEADER */}

        <section style={styles.orderCard}>
          <div style={styles.orderTopRow}>
            <div>
              <div style={styles.smallLabel}>
                ORDER
              </div>

              <h1 style={styles.orderNumber}>
                {reference}
              </h1>
            </div>

            <div
              style={{
                ...styles.statusBadge,
                ...(completed
                  ? styles.statusBadgeCompleted
                  : {}),
                ...(rejected
                  ? styles.statusBadgeRejected
                  : {}),
              }}
            >
              <span style={styles.statusDot} />

              {completed
                ? "Completed"
                : rejected
                ? "Rejected"
                : getCurrentStatus(order)}
            </div>
          </div>

          <div style={styles.orderDate}>
            Placed{" "}
            {formatDate(order.created_at)}
          </div>
        </section>

        {/* TRACKING */}

        <section style={styles.trackingCard}>
          <div style={styles.sectionHeader}>
            <div>
              <h2 style={styles.sectionTitle}>
                Order Progress
              </h2>

              <p style={styles.sectionSubtitle}>
                {rejected
                  ? "This order was not accepted by the store."
                  : "Follow your order from placement to completion."}
              </p>
            </div>

            <div
              style={{
                ...styles.progressIcon,
                ...(rejected
                  ? styles.progressIconRejected
                  : {}),
              }}
            >
              {rejected ? "!" : "✓"}
            </div>
          </div>

          <div style={styles.timeline}>
            {steps.map((step, index) => (
              <TrackingStep
                key={step.title}
                step={step}
                last={index === steps.length - 1}
              />
            ))}
          </div>
        </section>

        {/* COMPLETED MESSAGE */}

        {completed && (
          <section style={styles.completedCard}>
            <div style={styles.completedIcon}>
              ✓
            </div>

            <div>
              <h3 style={styles.completedTitle}>
                Order Completed
              </h3>

              <p style={styles.completedText}>
                Your order has been delivered and
                receipt has been confirmed.
              </p>

              {order.completed_at && (
                <div style={styles.completedTime}>
                  Completed{" "}
                  {formatDate(order.completed_at)}
                </div>
              )}
            </div>
          </section>
        )}

        {/* REJECTED MESSAGE */}

        {rejected && (
          <section style={styles.rejectedCard}>
            <div style={styles.rejectedIcon}>
              !
            </div>

            <div>
              <h3 style={styles.rejectedTitle}>
                Order Rejected
              </h3>

              <p style={styles.rejectedText}>
                The store did not accept this order.
              </p>

              {order.rejected_at && (
                <div style={styles.rejectedTime}>
                  Rejected{" "}
                  {formatDate(order.rejected_at)}
                </div>
              )}
            </div>
          </section>
        )}

        {/* INFORMATION */}

        <section style={styles.infoCard}>
          <div style={styles.infoIcon}>
            🔒
          </div>

          <div>
            <h3 style={styles.infoTitle}>
              Your information is secure
            </h3>

            <p style={styles.infoText}>
              This page only displays the status
              of your order. Rider information and
              other private business details are
              not displayed.
            </p>
          </div>
        </section>

        <Footer />

      </div>
    </main>
  );
}

/* =========================================================
   TRACKING STEP
========================================================= */

function TrackingStep({
  step,
  last,
}: {
  step: TrackingStep;
  last: boolean;
}) {
  return (
    <div style={styles.stepRow}>

      <div style={styles.stepRail}>

        <div
          style={{
            ...styles.stepCircle,

            ...(step.completed && !step.rejected
              ? styles.stepCircleCompleted
              : {}),

            ...(step.rejected
              ? styles.stepCircleRejected
              : {}),

            ...(step.current
              ? styles.stepCircleCurrent
              : {}),
          }}
        >
          {step.rejected
            ? "✕"
            : step.completed
            ? "✓"
            : ""}
        </div>

        {!last && (
          <div
            style={{
              ...styles.connector,

              ...(step.completed && !step.rejected
                ? styles.connectorCompleted
                : {}),

              ...(step.rejected
                ? styles.connectorRejected
                : {}),
            }}
          />
        )}

      </div>

      <div style={styles.stepContent}>

        <div style={styles.stepTitleRow}>
          <h3
            style={{
              ...styles.stepTitle,

              ...(step.completed && !step.rejected
                ? styles.stepTitleCompleted
                : {}),

              ...(step.rejected
                ? styles.stepTitleRejected
                : {}),
            }}
          >
            {step.title}
          </h3>

          {step.time && (
            <span
              style={{
                ...styles.stepTime,

                ...(step.rejected
                  ? styles.stepTimeRejected
                  : {}),
              }}
            >
              {formatDate(step.time)}
            </span>
          )}
        </div>

        <p style={styles.stepDescription}>
          {step.description}
        </p>

      </div>
    </div>
  );
}

/* =========================================================
   BUILD TRACKING STATUS
========================================================= */

function buildTrackingSteps(
  order: TrackingOrder
): TrackingStep[] {
  const placed = !!order.created_at;

  // Rejected orders have their own short timeline.
  if (order.order_status === "Rejected") {
    return [
      {
        title: "Order Placed",
        description:
          "Your order was received by the store.",
        time: order.created_at,
        completed: placed,
        current: false,
      },
      {
        title: "Order Rejected",
        description:
          "The store was unable to accept this order.",
        time: order.rejected_at,
        completed: !!order.rejected_at,
        current: false,
        rejected: true,
      },
    ];
  }

  const confirmed =
    order.order_status === "Accepted" ||
    order.order_status === "Completed" ||
    !!order.accepted_at;

  const ready =
    order.delivery_status === "Assigned" ||
    order.delivery_status === "In Transit" ||
    order.delivery_status === "Delivered" ||
    order.order_status === "Completed" ||
    !!order.assigned_at;

  const inTransit =
    order.delivery_status === "In Transit" ||
    order.delivery_status === "Delivered" ||
    order.order_status === "Completed" ||
    !!order.picked_up_at;

  const delivered =
    order.delivery_status === "Delivered" ||
    order.order_status === "Completed" ||
    !!order.delivered_at;

  const completed =
    order.order_status === "Completed" ||
    !!order.completed_at;

  return [
    {
      title: "Order Placed",
      description:
        "Your order has been received by the store.",
      time: order.created_at,
      completed: placed,
      current: placed && !confirmed,
    },
    {
      title: "Order Confirmed",
      description:
        "The vendor has accepted your order.",
      time: order.accepted_at,
      completed: confirmed,
      current: confirmed && !ready,
    },
    {
      title: "Ready for Delivery",
      description:
        "Your order has been assigned for delivery.",
      time: order.assigned_at,
      completed: ready,
      current: ready && !inTransit,
    },
    {
      title: "In Transit",
      description:
        "Your order is on its way to you.",
      time: order.picked_up_at,
      completed: inTransit,
      current: inTransit && !delivered,
    },
    {
      title: "Delivered",
      description:
        "Your order has been delivered.",
      time: order.delivered_at,
      completed: delivered,
      current: delivered && !completed,
    },
    {
      title: "Completed",
      description:
        "Receipt has been confirmed and the order is complete.",
      time: order.completed_at,
      completed,
      current: completed,
    },
  ];
}

/* =========================================================
   CURRENT STATUS
========================================================= */

function getCurrentStatus(
  order: TrackingOrder
) {
  if (order.order_status === "Completed") {
    return "Completed";
  }

  if (order.delivery_status === "Delivered") {
    return "Delivered";
  }

  if (order.delivery_status === "In Transit") {
    return "In Transit";
  }

  if (order.delivery_status === "Assigned") {
    return "Ready for Delivery";
  }

  if (order.order_status === "Accepted") {
    return "Confirmed";
  }

  if (order.order_status === "Rejected") {
    return "Rejected";
  }

  return "Pending";
}

/* =========================================================
   DATE FORMAT
========================================================= */

function formatDate(
  value: string | null
) {
  if (!value) return "";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toLocaleString("en-NG", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <p style={styles.footer}>
      Powered by{" "}
      <strong style={styles.footerBrand}>
        SoloPadi
      </strong>
    </p>
  );
}

/* =========================================================
   STYLES
========================================================= */

const styles: Record<
  string,
  React.CSSProperties
> = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(180deg, #ECFDF5 0%, #F8FAFC 430px)",
    padding: "24px 16px 55px",
    fontFamily:
      "Arial, Helvetica, sans-serif",
  },

  container: {
    width: "100%",
    maxWidth: "620px",
    margin: "0 auto",
  },

  header: {
    marginBottom: "22px",
  },

  brandRow: {
    display: "flex",
    alignItems: "center",
    gap: "11px",
  },

  logo: {
    width: "45px",
    height: "45px",
    borderRadius: "14px",
    background:
      "linear-gradient(135deg, #15803D, #22C55E)",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    fontWeight: "900",
    boxShadow:
      "0 8px 22px rgba(22,163,74,.22)",
  },

  brand: {
    fontSize: "19px",
    fontWeight: "800",
    color: "#111827",
  },

  brandSub: {
    fontSize: "12px",
    color: "#64748B",
    marginTop: "3px",
  },

  orderCard: {
    background: "#FFFFFF",
    borderRadius: "24px",
    padding: "22px",
    marginBottom: "16px",
    border:
      "1px solid rgba(226,232,240,.8)",
    boxShadow:
      "0 18px 50px rgba(15,23,42,.07)",
  },

  orderTopRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "15px",
  },

  smallLabel: {
    fontSize: "10px",
    fontWeight: "800",
    color: "#94A3B8",
    letterSpacing: "1.2px",
    marginBottom: "4px",
  },

  orderNumber: {
    margin: "0",
    fontSize: "25px",
    fontWeight: "900",
    color: "#111827",
  },

  statusBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    padding: "8px 11px",
    borderRadius: "999px",
    background: "#FEF3C7",
    color: "#92400E",
    fontSize: "11px",
    fontWeight: "800",
    whiteSpace: "nowrap",
  },

  statusBadgeCompleted: {
    background: "#DCFCE7",
    color: "#166534",
  },

  statusBadgeRejected: {
    background: "#FEE2E2",
    color: "#B91C1C",
  },

  statusDot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "currentColor",
  },

  orderDate: {
    color: "#64748B",
    fontSize: "12px",
    marginTop: "8px",
  },

  trackingCard: {
    background: "#FFFFFF",
    borderRadius: "28px",
    padding: "26px 22px",
    border:
      "1px solid rgba(226,232,240,.8)",
    boxShadow:
      "0 18px 50px rgba(15,23,42,.08)",
  },

  sectionHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "15px",
    marginBottom: "30px",
  },

  sectionTitle: {
    margin: "0",
    color: "#111827",
    fontSize: "20px",
    fontWeight: "900",
  },

  sectionSubtitle: {
    margin: "5px 0 0",
    color: "#64748B",
    fontSize: "12px",
    lineHeight: "1.5",
  },

  progressIcon: {
    width: "42px",
    height: "42px",
    borderRadius: "14px",
    background: "#DCFCE7",
    color: "#16A34A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: "900",
  },

  progressIconRejected: {
    background: "#FEE2E2",
    color: "#DC2626",
  },

  timeline: {
    width: "100%",
  },

  stepRow: {
    display: "flex",
    minHeight: "84px",
  },

  stepRail: {
    width: "42px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexShrink: 0,
  },

  stepCircle: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    background: "#F1F5F9",
    border: "2px solid #CBD5E1",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "900",
    flexShrink: 0,
    zIndex: 1,
  },

  stepCircleCompleted: {
    background: "#16A34A",
    borderColor: "#16A34A",
  },

  stepCircleRejected: {
    background: "#DC2626",
    borderColor: "#DC2626",
    color: "#FFFFFF",
  },

  stepCircleCurrent: {
    boxShadow:
      "0 0 0 5px #DCFCE7",
  },

  connector: {
    width: "2px",
    flex: 1,
    minHeight: "48px",
    background: "#E2E8F0",
  },

  connectorCompleted: {
    background: "#86EFAC",
  },

  connectorRejected: {
    background: "#FCA5A5",
  },

  stepContent: {
    paddingLeft: "13px",
    paddingBottom: "18px",
    flex: 1,
  },

  stepTitleRow: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: "10px",
  },

  stepTitle: {
    margin: "2px 0 0",
    fontSize: "14px",
    fontWeight: "800",
    color: "#64748B",
  },

  stepTitleCompleted: {
    color: "#111827",
  },

  stepTitleRejected: {
    color: "#B91C1C",
  },

  stepDescription: {
    margin: "5px 0 0",
    color: "#94A3B8",
    fontSize: "12px",
    lineHeight: "1.45",
  },

  stepTime: {
    color: "#64748B",
    fontSize: "10px",
    whiteSpace: "nowrap",
  },

  stepTimeRejected: {
    color: "#B91C1C",
    fontWeight: "700",
  },

  completedCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: "13px",
    background: "#F0FDF4",
    border:
      "1px solid #BBF7D0",
    borderRadius: "20px",
    padding: "17px",
    marginTop: "16px",
  },

  completedIcon: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    background: "#16A34A",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "900",
    flexShrink: 0,
  },

  completedTitle: {
    margin: "1px 0 4px",
    color: "#166534",
    fontSize: "14px",
    fontWeight: "900",
  },

  completedText: {
    margin: "0",
    color: "#64748B",
    fontSize: "12px",
    lineHeight: "1.5",
  },

  completedTime: {
    marginTop: "7px",
    color: "#166534",
    fontSize: "11px",
    fontWeight: "700",
  },

  rejectedCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: "13px",
    background: "#FEF2F2",
    border:
      "1px solid #FECACA",
    borderRadius: "20px",
    padding: "17px",
    marginTop: "16px",
  },

  rejectedIcon: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    background: "#DC2626",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "900",
    flexShrink: 0,
  },

  rejectedTitle: {
    margin: "1px 0 4px",
    color: "#B91C1C",
    fontSize: "14px",
    fontWeight: "900",
  },

  rejectedText: {
    margin: "0",
    color: "#64748B",
    fontSize: "12px",
    lineHeight: "1.5",
  },

  rejectedTime: {
    marginTop: "7px",
    color: "#B91C1C",
    fontSize: "11px",
    fontWeight: "700",
  },

  infoCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    background: "#FFFFFF",
    border:
      "1px solid #E2E8F0",
    borderRadius: "18px",
    padding: "15px",
    marginTop: "16px",
  },

  infoIcon: {
    fontSize: "19px",
  },

  infoTitle: {
    margin: "0 0 4px",
    color: "#334155",
    fontSize: "12px",
    fontWeight: "800",
  },

  infoText: {
    margin: "0",
    color: "#94A3B8",
    fontSize: "11px",
    lineHeight: "1.5",
  },

  securityBox: {
    display: "flex",
    alignItems: "flex-start",
    gap: "9px",
    background: "#F0FDF4",
    border:
      "1px solid #BBF7D0",
    borderRadius: "14px",
    padding: "13px",
    marginTop: "20px",
    color: "#64748B",
    fontSize: "12px",
    lineHeight: "1.5",
    textAlign: "left",
  },

  securityIcon: {
    fontSize: "17px",
  },

  loadingCard: {
    width: "100%",
    maxWidth: "430px",
    background: "#FFFFFF",
    borderRadius: "28px",
    padding: "40px 26px",
    textAlign: "center",
    boxShadow:
      "0 25px 60px rgba(15,23,42,.10)",
  },

  loadingLogo: {
    width: "64px",
    height: "64px",
    borderRadius: "19px",
    margin: "0 auto 20px",
    background:
      "linear-gradient(135deg, #15803D, #22C55E)",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    fontWeight: "900",
  },

  spinner: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    border:
      "3px solid #DCFCE7",
    borderTop:
      "3px solid #16A34A",
    margin: "0 auto 18px",
  },

  loadingTitle: {
    margin: "0",
    color: "#111827",
    fontSize: "20px",
    fontWeight: "800",
  },

  loadingText: {
    color: "#64748B",
    fontSize: "13px",
    lineHeight: "1.5",
  },

  card: {
    width: "100%",
    maxWidth: "500px",
    background: "#FFFFFF",
    borderRadius: "28px",
    padding: "38px 26px",
    textAlign: "center",
    boxShadow:
      "0 25px 60px rgba(15,23,42,.10)",
  },

  errorCircle: {
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    margin: "0 auto 20px",
    background: "#FEF2F2",
    color: "#DC2626",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
    fontWeight: "900",
  },

  title: {
    margin: "0",
    color: "#111827",
    fontSize: "27px",
    fontWeight: "900",
  },

  subtitle: {
    color: "#64748B",
    lineHeight: "1.6",
    margin: "12px auto 24px",
    maxWidth: "420px",
    fontSize: "14px",
  },

  footer: {
    color: "#94A3B8",
    fontSize: "12px",
    textAlign: "center",
    marginTop: "22px",
  },

  footerBrand: {
    color: "#16A34A",
  },
};