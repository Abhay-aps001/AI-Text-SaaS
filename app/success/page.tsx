export default function SuccessPage() {
  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <div>
        <div style={{ fontSize: "64px", marginBottom: "24px" }}>🎉</div>

        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        >
          Payment Successful!
        </h1>

        <p style={{ color: "#9ca3af", marginBottom: "32px" }}>
          Welcome to Pro! You now have unlimited access.
        </p>

        <a
          href="/"
          style={{
            background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
            padding: "12px 24px",
            borderRadius: "12px",
            fontWeight: "600",
            textDecoration: "none",
            color: "#fff",
            display: "inline-block",
          }}
        >
          Start Writing →
        </a>
      </div>
    </main>
  );
}