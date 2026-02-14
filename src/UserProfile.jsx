function UserProfile() {
  // ✅ At least one variable for name or bio
  const name = "Elena Druz";
  const bio =
    "Frontend developer who loves clean UI, accessibility, and building helpful apps.";

  // ✅ Placeholder image (Unsplash) — you can swap this anytime
  const photoUrl =
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80";

  // ✅ Inline styles only
  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "24px",
      background: "#f6f8fb",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
    },
    card: {
      width: "100%",
      maxWidth: "520px",
      background: "white",
      borderRadius: "16px",
      padding: "24px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      display: "flex",
      gap: "18px",
      alignItems: "center",
      flexWrap: "wrap", // helps on small screens
      justifyContent: "center",
      textAlign: "center",
    },
    img: {
      width: "120px",
      height: "120px",
      borderRadius: "50%", // ✅ circular image
      objectFit: "cover",
      border: "4px solid #e9eef6",
    },
    textWrap: {
      flex: "1",
      minWidth: "220px",
    },
    name: {
      margin: "0 0 8px 0",
      fontSize: "26px",
      lineHeight: "1.2",
      color: "#121826",
    },
    bio: {
      margin: 0,
      fontSize: "16px",
      lineHeight: "1.5",
      color: "#4b5563",
    },
  };

  // ✅ Return a single JSX element that includes all content
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <img src={photoUrl} alt={`${name} profile`} style={styles.img} />
        <div style={styles.textWrap}>
          <h1 style={styles.name}>{name}</h1>
          <p style={styles.bio}>{bio}</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
