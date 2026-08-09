```tsx
"use client";

import { useSearchParams } from "next/navigation";

export default function OrderSuccessPage() {
  const searchParams = useSearchParams();

  const orderId = searchParams.get("order");
  const vendor = searchParams.get("vendor");

  const reference = orderId
    ? orderId.slice(-8).toUpperCase()
    : "";

  return (
    <main style={styles.page}>
      <div style={styles.card}>

        <div style={styles.checkCircle}>
          ✓
        </div>

        <h1 style={styles.title}>
          Order Confirmed!
        </h1>

        <p style={styles.subtitle}>
          Your order has been successfully received
          {vendor ? ` by ${vendor}` : ""}.
        </p>

        {reference && (
          <div style={styles.referenceBox}>
            <span style={styles.referenceLabel}>
              Order Reference
            </span>

            <strong style={styles.reference}>
              #{reference}
            </strong>
          </div>
        )}

        <div style={styles.messageBox}>
          <div style={styles.messageIcon}>
            🛍️
          </div>

          <div>
            <strong style={styles.messageTitle}>
              What happens next?
            </strong>

            <p style={styles.message}>
              The vendor will review your order and
              arrange delivery.
            </p>

            <p style={styles.message}>
              After your order has been delivered,
              you will receive a link to confirm
              receipt.
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

const styles: Record<string, React.CSSProperties> = {
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

  referenceBox: {
    background: "#F0FDF4",
    border: "1px solid #BBF7D0",
    borderRadius: "16px",
    padding: "16px",
    marginBottom: "20px",
  },

  referenceLabel: {
    display: "block",
    color: "#64748B",
    fontSize: "12px",
    marginBottom: "5px",
  },

  reference: {
    color: "#166534",
    fontSize: "20px",
  },

  messageBox: {
    display: "flex",
    alignItems: "flex-start",
    textAlign: "left",
    gap: "12px",
    background: "#F8FAFC",
    borderRadius: "16px",
    padding: "17px",
    marginBottom: "22px",
  },

  messageIcon: {
    fontSize: "24px",
  },

  messageTitle: {
    color: "#111827",
    fontSize: "14px",
  },

  message: {
    color: "#64748B",
    fontSize: "13px",
    lineHeight: "1.5",
    margin: "5px 0 0",
  },

  footer: {
    color: "#94A3B8",
    fontSize: "12px",
    marginTop: "22px",
  },
};
```
