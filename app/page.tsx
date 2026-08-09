export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, Helvetica, sans-serif",
        background: "#F8FAFC",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "#111827" }}>SoloPadi</h1>
        <p style={{ color: "#64748B" }}>
          Welcome to SoloPadi.
        </p>
      </div>
    </main>
  );
}