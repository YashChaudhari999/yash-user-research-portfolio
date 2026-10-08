import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ padding: "80px 20px", textAlign: "center", fontFamily: "var(--font-sans, sans-serif)" }}>
      <h2>Page Not Found</h2>
      <p>Could not find the requested page.</p>
      <Link href="/" className="button button-dark" style={{ display: "inline-block", marginTop: "1rem" }}>
        Return Home
      </Link>
    </div>
  );
}
