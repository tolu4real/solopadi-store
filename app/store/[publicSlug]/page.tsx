
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Vendor = {
  id: string;
  business_name: string;
  full_name?: string | null;
  phone?: string | null;
  address?: string | null;
  public_slug: string;
};

export default function StorePage() {
  const params = useParams();
  const router = useRouter();

  const publicSlug = params.publicSlug as string;

  const [vendor, setVendor] = useState<Vendor | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [deliveryFee, setDeliveryFee] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (publicSlug) {
      loadVendor();
    }
  }, [publicSlug]);

  async function loadVendor() {
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("vendors")
      .select(
        "id, business_name, full_name, phone, address, public_slug"
      )
      .eq("public_slug", publicSlug)
      .maybeSingle();

    if (error) {
      console.error("Vendor loading error:", error);
      setError("Unable to load this store.");
      setLoading(false);
      return;
    }

    if (!data) {
      setError("This SoloPadi store could not be found.");
      setLoading(false);
      return;
    }

    setVendor(data);
    setLoading(false);
  }

  async function submitOrder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!vendor) {
      setError("Store information is unavailable.");
      return;
    }

    setError("");

    const numericAmount = Number(amount);

    const numericDeliveryFee =
      deliveryFee.trim() === ""
        ? 0
        : Number(deliveryFee);

    if (
      Number.isNaN(numericAmount) ||
      numericAmount <= 0
    ) {
      setError("Please enter a valid order amount.");
      return;
    }

    if (
      Number.isNaN(numericDeliveryFee) ||
      numericDeliveryFee < 0
    ) {
      setError("Please enter a valid delivery fee.");
      return;
    }

    if (!customerName.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!customerPhone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!deliveryAddress.trim()) {
      setError("Please enter your delivery address.");
      return;
    }

    if (!itemDescription.trim()) {
      setError("Please describe what you ordered.");
      return;
    }

    setSubmitting(true);

    const { data: order, error: orderError } =
      await supabase
        .from("orders")
        .insert({
          vendor_id: vendor.id,

          customer_name: customerName.trim(),

          customer_phone: customerPhone.trim(),

          whatsapp: whatsapp.trim(),

          delivery_address:
            deliveryAddress.trim(),

          item_description:
            itemDescription.trim(),

          amount: numericAmount,

          delivery_fee:
            numericDeliveryFee,

          note: note.trim(),
        })
        .select("id")
        .single();

    if (orderError) {
      console.error(
        "Order submission error:",
        orderError
      );

      setError(
        "We could not submit your order. Please check your information and try again."
      );

      setSubmitting(false);
      return;
    }

    if (!order) {
      setError(
        "The order could not be confirmed. Please try again."
      );

      setSubmitting(false);
      return;
    }

    /*
      IMPORTANT:
      We intentionally do not send the customer
      back to the store after submission.

      The customer goes to the dedicated success
      page instead.
    */

    router.replace(
  `/order-success?order=${encodeURIComponent(
    order.id
  )}&vendor=${encodeURIComponent(
    vendor.business_name
  )}`
);
  }

  const orderAmount = Number(amount) || 0;
  const delivery = Number(deliveryFee) || 0;
  const total = orderAmount + delivery;

  if (loading) {
    return (
      <main style={styles.loadingPage}>
        <div style={styles.loadingLogo}>
          <StoreIcon size={26} color="#FFFFFF" />
        </div>

        <div style={styles.spinner} />

        <p style={styles.loadingText}>
          Loading store...
        </p>
      </main>
    );
  }

  if (!vendor) {
    return (
      <main style={styles.loadingPage}>
        <div style={styles.notFoundIcon}>
          <StoreIcon
            size={42}
            color="#16A34A"
          />
        </div>

        <h1 style={styles.notFoundTitle}>
          Store not found
        </h1>

        <p style={styles.notFoundText}>
          {error ||
            "This SoloPadi store link is not available."}
        </p>
      </main>
    );
  }

  return (
    <main style={styles.page}>
      <div style={styles.container}>

        {/* ================= HEADER ================= */}

        <header style={styles.header}>
          <div style={styles.brandRow}>
            <div style={styles.logo}>
              <StoreIcon
                size={23}
                color="#FFFFFF"
              />
            </div>

            <div>
              <div style={styles.brand}>
                SoloPadi
              </div>

              <div style={styles.brandSub}>
                Simple. Secure. Local.
              </div>
            </div>
          </div>
        </header>

        {/* ================= STORE CARD ================= */}

        <section style={styles.storeCard}>
          <div style={styles.storeIcon}>
            <StoreIcon
              size={38}
              color="#16A34A"
            />
          </div>

          <div style={styles.verifiedBadge}>
            <CheckIcon
              size={13}
              color="#16A34A"
            />
            Verified SoloPadi Store
          </div>

          <h1 style={styles.businessName}>
            {vendor.business_name}
          </h1>

          <p style={styles.storeSubtitle}>
            Place your order directly with
            this business.
          </p>

          <div style={styles.storeInfoList}>

            {vendor.address && (
              <div style={styles.storeInfo}>
                <LocationIcon
                  size={17}
                  color="#16A34A"
                />

                <span>
                  {vendor.address}
                </span>
              </div>
            )}

            {vendor.phone && (
              <div style={styles.storeInfo}>
                <PhoneIcon
                  size={17}
                  color="#16A34A"
                />

                <span>
                  {vendor.phone}
                </span>
              </div>
            )}

          </div>
        </section>

        {/* ================= ORDER FORM ================= */}

        <form
          onSubmit={submitOrder}
          style={styles.formCard}
        >

          <div style={styles.sectionHeading}>
            <div style={styles.headingIcon}>
              <ShoppingBagIcon
                size={23}
                color="#16A34A"
              />
            </div>

            <div>
              <h2 style={styles.headingTitle}>
                Complete Your Order
              </h2>

              <p style={styles.headingSubtitle}>
                Enter your details below
              </p>
            </div>
          </div>

          {/* ================= CUSTOMER ================= */}

          <div style={styles.formSection}>
            <h3 style={styles.sectionTitle}>
              Customer Information
            </h3>

            <Field
              icon={
                <UserIcon
                  size={18}
                  color="#16A34A"
                />
              }
              label="Customer Name"
              value={customerName}
              onChange={setCustomerName}
              placeholder="Enter your full name"
              required
            />

            <Field
              icon={
                <PhoneIcon
                  size={18}
                  color="#16A34A"
                />
              }
              label="Phone Number"
              value={customerPhone}
              onChange={setCustomerPhone}
              placeholder="Enter your phone number"
              type="tel"
              required
            />

            <Field
              icon={
                <WhatsAppIcon
                  size={18}
                  color="#16A34A"
                />
              }
              label="WhatsApp"
              value={whatsapp}
              onChange={setWhatsapp}
              placeholder="WhatsApp number"
              type="tel"
            />
          </div>

          {/* ================= DELIVERY ================= */}

          <div style={styles.formSection}>
            <h3 style={styles.sectionTitle}>
              Delivery Information
            </h3>

            <Field
              icon={
                <LocationIcon
                  size={18}
                  color="#16A34A"
                />
              }
              label="Delivery Address"
              value={deliveryAddress}
              onChange={setDeliveryAddress}
              placeholder="Enter your complete delivery address"
              multiline
              rows={3}
              required
            />
          </div>

          {/* ================= ORDER DETAILS ================= */}

          <div style={styles.formSection}>
            <h3 style={styles.sectionTitle}>
              Order Details
            </h3>

            <Field
              icon={
                <ShoppingBagIcon
                  size={18}
                  color="#16A34A"
                />
              }
              label="What did you order?"
              value={itemDescription}
              onChange={setItemDescription}
              placeholder="Describe the items you want to order"
              multiline
              rows={4}
              required
            />

            <div style={styles.priceGrid}>

              <Field
                icon={
                  <MoneyIcon
                    size={18}
                    color="#16A34A"
                  />
                }
                label="Amount"
                value={amount}
                onChange={setAmount}
                placeholder="0.00"
                type="number"
                min="0"
                step="0.01"
                required
              />

              <Field
                icon={
                  <DeliveryIcon
                    size={18}
                    color="#16A34A"
                  />
                }
                label="Delivery Fee"
                value={deliveryFee}
                onChange={setDeliveryFee}
                placeholder="0.00"
                type="number"
                min="0"
                step="0.01"
              />

            </div>

            <Field
              icon={
                <NoteIcon
                  size={18}
                  color="#16A34A"
                />
              }
              label="Note"
              value={note}
              onChange={setNote}
              placeholder="Any additional information for the vendor?"
              multiline
              rows={3}
            />
          </div>

          {/* ================= ORDER SUMMARY ================= */}

          <div style={styles.summary}>
            <div style={styles.summaryHeader}>
              <span style={styles.summaryTitle}>
                Order Summary
              </span>

              <ReceiptIcon
                size={19}
                color="#16A34A"
              />
            </div>

            <div style={styles.summaryRow}>
              <span>
                Order Amount
              </span>

              <strong>
                {formatAmount(orderAmount)}
              </strong>
            </div>

            <div style={styles.summaryRow}>
              <span>
                Delivery Fee
              </span>

              <strong>
                {formatAmount(delivery)}
              </strong>
            </div>

            <div style={styles.summaryDivider} />

            <div style={styles.totalRow}>
              <span>
                Total
              </span>

              <strong>
                {formatAmount(total)}
              </strong>
            </div>
          </div>

          {/* ================= ERROR ================= */}

          {error && (
            <div style={styles.errorBox}>
              <div style={styles.errorIcon}>
                <AlertIcon
                  size={18}
                  color="#B91C1C"
                />
              </div>

              <span>{error}</span>
            </div>
          )}

          {/* ================= SUBMIT ================= */}

          <button
            type="submit"
            disabled={submitting}
            style={{
              ...styles.button,
              opacity: submitting ? 0.7 : 1,
              cursor: submitting
                ? "not-allowed"
                : "pointer",
            }}
          >
            {submitting ? (
              <>
                <span style={styles.buttonSpinner} />
                Submitting Order...
              </>
            ) : (
              <>
                <CheckIcon
                  size={20}
                  color="#FFFFFF"
                />
                Confirm Order
              </>
            )}
          </button>

          <div style={styles.securityBox}>
            <LockIcon
              size={15}
              color="#16A34A"
            />

            <span>
              Your order details are securely
              sent to the vendor.
            </span>
          </div>

        </form>

        {/* ================= FOOTER ================= */}

        <footer style={styles.footer}>
          Powered by{" "}
          <strong style={styles.footerBrand}>
            SoloPadi
          </strong>
        </footer>

      </div>
    </main>
  );
}

/* =========================================================
   FIELD COMPONENT
========================================================= */

type FieldProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  min?: string;
  step?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
};

function Field({
  icon,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  min,
  step,
  required = false,
  multiline = false,
  rows = 3,
}: FieldProps) {
  return (
    <div style={styles.fieldWrapper}>
      <label style={styles.label}>
        <span style={styles.labelIcon}>
          {icon}
        </span>

        <span>{label}</span>

        {required && (
          <span style={styles.required}>
            *
          </span>
        )}
      </label>

      <div style={styles.inputWrapper}>
        <span style={styles.inputIcon}>
          {icon}
        </span>

        {multiline ? (
          <textarea
            value={value}
            onChange={(e) =>
              onChange(e.target.value)
            }
            placeholder={placeholder}
            required={required}
            rows={rows}
            style={{
              ...styles.input,
              ...styles.textarea,
            }}
          />
        ) : (
          <input
            value={value}
            onChange={(e) =>
              onChange(e.target.value)
            }
            placeholder={placeholder}
            type={type}
            min={min}
            step={step}
            required={required}
            style={styles.input}
          />
        )}
      </div>
    </div>
  );
}

/* =========================================================
   HELPERS
========================================================= */

function formatAmount(value: number) {
  return `₦${value.toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

/* =========================================================
   ICONS
   SVG icons are used instead of emoji so they render
   correctly on every browser/device.
========================================================= */

function StoreIcon({
  size = 24,
  color = "#000",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 10h18" />
      <path d="M5 10v9h14v-9" />
      <path d="M4 10l1.5-6h13L20 10" />
      <path d="M8 19v-5h8v5" />
    </svg>
  );
}

function UserIcon({
  size = 24,
  color = "#000",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
    </svg>
  );
}

function PhoneIcon({
  size = 24,
  color = "#000",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7A2 2 0 0 1 22 16.9z" />
    </svg>
  );
}

function WhatsAppIcon({
  size = 24,
  color = "#000",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.5 3.5A11 11 0 0 0 3.2 17.7L2 22l4.4-1.2A11 11 0 1 0 20.5 3.5Z" />
      <path d="M8.2 7.5c.2-.4.4-.4.8-.4h.6c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.7.8c.7 1.3 1.7 2.3 3 3l.8-.7c.2-.2.4-.2.7-.1l1.8.8c.3.1.4.3.4.5v.6c0 .4 0 .6-.4.8-.4.3-1 .4-1.5.3-2.8-.5-5.8-2.9-7.4-5.5-.4-.7-.7-1.5-.7-2.2 0-.4.1-.9.4-1.3Z" />
    </svg>
  );
}

function LocationIcon({
  size = 24,
  color = "#000",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ShoppingBagIcon({
  size = 24,
  color = "#000",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8h12l1 12H5L6 8Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </svg>
  );
}

function MoneyIcon({
  size = 24,
  color = "#000",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M7 10h.01M17 14h.01" />
    </svg>
  );
}

function DeliveryIcon({
  size = 24,
  color = "#000",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7h11v10H3z" />
      <path d="M14 10h4l3 3v4h-7z" />
      <circle cx="7" cy="19" r="2" />
      <circle cx="18" cy="19" r="2" />
    </svg>
  );
}

function NoteIcon({
  size = 24,
  color = "#000",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16v16H4z" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  );
}

function ReceiptIcon({
  size = 24,
  color = "#000",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </svg>
  );
}

function LockIcon({
  size = 24,
  color = "#000",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function CheckIcon({
  size = 24,
  color = "#000",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function AlertIcon({
  size = 24,
  color = "#000",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.3 3.5 2.2 18a2 2 0 0 0 1.7 3h16.2a2 2 0 0 0 1.7-3L13.7 3.5a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4M12 17h.01" />
    </svg>
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
      "linear-gradient(180deg, #ECFDF5 0%, #F8FAFC 420px)",
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "0 8px 22px rgba(22,163,74,.22)",
  },

  brand: {
    fontSize: "19px",
    fontWeight: "800",
    color: "#111827",
    letterSpacing: "-0.3px",
  },

  brandSub: {
    fontSize: "12px",
    color: "#64748B",
    marginTop: "3px",
  },

  storeCard: {
    background: "#FFFFFF",
    borderRadius: "28px",
    padding: "30px 24px",
    textAlign: "center",
    boxShadow:
      "0 18px 50px rgba(15,23,42,.08)",
    marginBottom: "18px",
    border: "1px solid rgba(226,232,240,.7)",
  },

  storeIcon: {
    width: "76px",
    height: "76px",
    margin: "0 auto 14px",
    borderRadius: "50%",
    background: "#DCFCE7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  verifiedBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    background: "#F0FDF4",
    color: "#166534",
    border: "1px solid #BBF7D0",
    borderRadius: "999px",
    padding: "6px 10px",
    fontSize: "11px",
    fontWeight: "700",
    marginBottom: "12px",
  },

  businessName: {
    margin: "0",
    fontSize: "28px",
    color: "#111827",
    fontWeight: "800",
    letterSpacing: "-0.7px",
  },

  storeSubtitle: {
    margin: "9px auto 18px",
    color: "#64748B",
    lineHeight: "1.55",
    fontSize: "14px",
    maxWidth: "420px",
  },

  storeInfoList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  },

  storeInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    color: "#475569",
    fontSize: "13px",
  },

  formCard: {
    background: "#FFFFFF",
    borderRadius: "28px",
    padding: "28px 22px",
    boxShadow:
      "0 18px 50px rgba(15,23,42,.08)",
    border: "1px solid rgba(226,232,240,.7)",
  },

  sectionHeading: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "28px",
  },

  headingIcon: {
    width: "50px",
    height: "50px",
    borderRadius: "16px",
    background: "#DCFCE7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  headingTitle: {
    margin: "0",
    fontSize: "21px",
    fontWeight: "800",
    color: "#111827",
    letterSpacing: "-0.3px",
  },

  headingSubtitle: {
    margin: "4px 0 0",
    color: "#64748B",
    fontSize: "13px",
  },

  formSection: {
    marginBottom: "26px",
  },

  sectionTitle: {
    fontSize: "15px",
    fontWeight: "800",
    color: "#111827",
    margin: "0 0 15px",
  },

  fieldWrapper: {
    marginBottom: "15px",
  },

  label: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    fontSize: "13px",
    fontWeight: "700",
    color: "#334155",
    marginBottom: "7px",
  },

  labelIcon: {
    display: "inline-flex",
    alignItems: "center",
  },

  required: {
    color: "#DC2626",
    fontSize: "14px",
  },

  inputWrapper: {
    position: "relative",
    width: "100%",
  },

  inputIcon: {
    position: "absolute",
    left: "14px",
    top: "14px",
    zIndex: 1,
    display: "flex",
    pointerEvents: "none",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding:
      "14px 15px 14px 43px",
    borderRadius: "14px",
    border: "1px solid #E2E8F0",
    background: "#F8FAFC",
    color: "#111827",
    fontSize: "15px",
    outline: "none",
    transition:
      "border-color .2s ease, box-shadow .2s ease",
  },

  textarea: {
    minHeight: "80px",
    resize: "vertical",
    fontFamily:
      "Arial, Helvetica, sans-serif",
    lineHeight: "1.5",
  },

  priceGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(2, minmax(0, 1fr))",
    gap: "12px",
  },

  summary: {
    background:
      "linear-gradient(135deg, #F0FDF4, #ECFDF5)",
    border: "1px solid #BBF7D0",
    borderRadius: "20px",
    padding: "19px",
    marginTop: "3px",
    marginBottom: "18px",
  },

  summaryHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "16px",
  },

  summaryTitle: {
    color: "#166534",
    fontSize: "15px",
    fontWeight: "800",
  },

  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#475569",
    fontSize: "14px",
    marginBottom: "11px",
  },

  summaryDivider: {
    height: "1px",
    background: "#BBF7D0",
    margin: "13px 0",
  },

  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#166534",
    fontSize: "20px",
    fontWeight: "800",
  },

  errorBox: {
    display: "flex",
    alignItems: "flex-start",
    gap: "9px",
    background: "#FEF2F2",
    border: "1px solid #FECACA",
    color: "#B91C1C",
    borderRadius: "14px",
    padding: "13px",
    marginBottom: "15px",
    fontSize: "13px",
    lineHeight: "1.45",
  },

  errorIcon: {
    display: "flex",
    flexShrink: 0,
    marginTop: "1px",
  },

  button: {
    width: "100%",
    border: "none",
    borderRadius: "16px",
    padding: "17px",
    background:
      "linear-gradient(135deg, #15803D, #22C55E)",
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: "800",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "9px",
    boxShadow:
      "0 10px 25px rgba(22,163,74,.22)",
  },

  buttonSpinner: {
    width: "17px",
    height: "17px",
    borderRadius: "50%",
    border:
      "2px solid rgba(255,255,255,.45)",
    borderTop:
      "2px solid #FFFFFF",
    display: "inline-block",
  },

  securityBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    color: "#94A3B8",
    fontSize: "11px",
    marginTop: "14px",
    textAlign: "center",
  },

  footer: {
    textAlign: "center",
    color: "#94A3B8",
    fontSize: "12px",
    marginTop: "22px",
  },

  footerBrand: {
    color: "#16A34A",
  },

  loadingPage: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#F8FAFC",
    fontFamily:
      "Arial, Helvetica, sans-serif",
  },

  loadingLogo: {
    width: "58px",
    height: "58px",
    borderRadius: "18px",
    background: "#16A34A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "18px",
  },

  spinner: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    border: "4px solid #DCFCE7",
    borderTop: "4px solid #16A34A",
  },

  loadingText: {
    color: "#64748B",
    marginTop: "13px",
    fontSize: "14px",
  },

  notFoundIcon: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "#DCFCE7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "18px",
  },

  notFoundTitle: {
    color: "#111827",
    marginBottom: "8px",
    fontSize: "25px",
  },

  notFoundText: {
    color: "#64748B",
    textAlign: "center",
    maxWidth: "400px",
    lineHeight: "1.5",
  },
};

