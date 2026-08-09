"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "../../../lib/supabase";

export default function ConfirmOrderPage() {
  const params = useParams();

  const token = params?.token as string;

  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");

  const confirmReceipt = async () => {
    if (!token) return;

    setLoading(true);
    setError("");

    const { data, error } = await supabase.rpc(
      "confirm_order_receipt",
      {
        p_confirmation_token: token,
      }
    );

    setLoading(false);

    if (error) {
      setError(
        "We could not confirm your order receipt. Please try again."
      );
      return;
    }

    if (!data?.success) {
      setError(
        data?.message ??
            "This order cannot be confirmed."
      );
      return;
    }

    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <main style={styles.page}>
        <div style={styles.card}>

          <div style={styles.checkCircle}>
            ✓
          </div>

          <h1 style={styles.title}>
            Order Received
          </h1>

          <p style={styles.subtitle}>
            Thank you for confirming that you
            received your order.
          </p>

          <div style={styles.successBox}>
            <div style={styles.successIcon}>
              ✓
            </div>

            <div>
              <strong style={styles.successTitle}>
                Delivery confirmed
              </strong>

              <p style={styles.successText}>
                Your order has been marked as
                delivered successfully.
              </p>
            </div>
          </div>

          <p style={styles.footer}>
            Powered by{" "}
            <strong style={{ color: "#16A34A" }}>
              SoloPadi
            </strong>
          </p>

        </div>
      </main>
    );
  }

  return (
    <main style={styles.page}>
      <div style={styles.card}>

        <div style={styles.iconCircle}>
          📦
        </div>

        <h1 style={styles.title}>
          Confirm Your Order
        </h1>

        <p style={styles.subtitle}>
          Have you received your SoloPadi order?
        </p>

        <div style={styles.infoBox}>
          <div style={styles.infoIcon}>
            🚚
          </div>

          <div>
            <strong style={styles.infoTitle}>
              Confirm receipt
            </strong>

            <p style={styles.infoText}>
              Only confirm this after you have
              received your order.
            </p>
          </div>
        </div>

        {error && (
          <div style={styles.errorBox}>
            {error}
          </div>
        )}

        <button
          onClick={confirmReceipt}
          disabled={loading}
          style={{
            ...styles.button,
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading
            ? "Confirming..."
            : "Confirm Receipt"}
        </button>

        <p style={styles.warning}>
          By confirming, you are confirming that
          the order was received.
        </p>

        <p style={styles.footer}>
          Powered by{" "}
          <strong style={{ color: "#16A34A" }}>
            SoloPadi
          </strong>
        </p>

      </div>
    </main>
  );
}

const styles: Record<
  string,
  React.CSSProperties
> = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(180deg, #F0FDF4, #F8FAFC)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    fontFamily:
      "Arial, Helvetica, sans-serif",
  },

  card: {
    width: "100%",
    maxWidth: "500px",
    background: "#fff",
    borderRadius: "28px",
    padding: "38px 26px",
    textAlign: "center",
    boxShadow:
      "0 25px 60px rgba(15,23,42,.10)",
  },

  iconCircle: {
    width: "82px",
    height: "82px",
    borderRadius: "50%",
    margin: "0 auto 20px",
    background: "#DCFCE7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
  },

  checkCircle: {
    width: "82px",
    height: "82px",
    borderRadius: "50%",
    margin: "0 auto 20px",
    background: "#DCFCE7",
    color: "#16A34A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "46px",
    fontWeight: "800",
  },

  title: {
    margin: "0",
    color: "#111827",
    fontSize: "28px",
    fontWeight: "800",
  },

  subtitle: {
    color: "#64748B",
    lineHeight: "1.6",
    margin: "12px auto 24px",
    maxWidth: "420px",
  },

  infoBox: {
    display: "flex",
    alignItems: "flex-start",
    textAlign: "left",
    gap: "12px",
    background: "#F8FAFC",
    borderRadius: "16px",
    padding: "17px",
    marginBottom: "22px",
  },

  infoIcon: {
    fontSize: "24px",
  },

  infoTitle: {
    color: "#111827",
    fontSize: "14px",
  },

  infoText: {
    color: "#64748B",
    fontSize: "13px",
    lineHeight: "1.5",
    margin: "5px 0 0",
  },

  successBox: {
    display: "flex",
    alignItems: "flex-start",
    textAlign: "left",
    gap: "12px",
    background: "#F0FDF4",
    border:
      "1px solid #BBF7D0",
    borderRadius: "16px",
    padding: "17px",
    marginTop: "24px",
  },

  successIcon: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    background: "#16A34A",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "800",
  },

  successTitle: {
    color: "#166534",
    fontSize: "14px",
  },

  successText: {
    color: "#64748B",
    fontSize: "13px",
    lineHeight: "1.5",
    margin: "5px 0 0",
  },

  errorBox: {
    background: "#FEF2F2",
    border:
      "1px solid #FECACA",
    color: "#B91C1C",
    borderRadius: "14px",
    padding: "13px",
    marginBottom: "18px",
    fontSize: "13px",
    lineHeight: "1.5",
  },

  button: {
    width: "100%",
    border: "none",
    borderRadius: "15px",
    padding: "16px",
    background: "#16A34A",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "800",
    cursor: "pointer",
  },

  warning: {
    color: "#94A3B8",
    fontSize: "12px",
    lineHeight: "1.5",
    marginTop: "14px",
  },

  footer: {
    color: "#94A3B8",
    fontSize: "12px",
    marginTop: "22px",
  },
};