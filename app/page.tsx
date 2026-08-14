export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "Arial, Helvetica, sans-serif",
        background: "#F8FAFC",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          textAlign: "center",
          background: "#FFFFFF",
          borderRadius: "24px",
          padding: "50px 30px",
          border: "1px solid #E5E7EB",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        }}
      >
        <div
          style={{
            width: "72px",
            height: "72px",
            margin: "0 auto 20px",
            borderRadius: "20px",
            background: "#DCFCE7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#16A34A",
            fontSize: "34px",
            fontWeight: "bold",
          }}
        >
          S
        </div>

        <h1
          style={{
            margin: "0",
            color: "#111827",
            fontSize: "36px",
            fontWeight: "800",
          }}
        >
          SoloPadi
        </h1>

        <p
          style={{
            marginTop: "12px",
            color: "#64748B",
            fontSize: "17px",
            lineHeight: "1.6",
          }}
        >
          Business management and order management platform.
        </p>

        <p
          style={{
            marginTop: "8px",
            color: "#64748B",
            fontSize: "15px",
            lineHeight: "1.6",
          }}
        >
          Manage customers, orders, deliveries and riders in one place.
        </p>

        <div
          style={{
            marginTop: "35px",
            paddingTop: "22px",
            borderTop: "1px solid #E5E7EB",
          }}
        >
          <p
            style={{
              marginBottom: "15px",
              color: "#64748B",
              fontSize: "14px",
            }}
          >
            Legal information
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/privacy-policy"
              style={{
                color: "#16A34A",
                fontWeight: "700",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              style={{
                color: "#16A34A",
                fontWeight: "700",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Terms of Service
            </a>
          </div>
        </div>

        <p
          style={{
            marginTop: "30px",
            color: "#94A3B8",
            fontSize: "13px",
          }}
        >
          Contact: admin.solopadi@gmail.com
        </p>
      </div>
    </main>
  );
}