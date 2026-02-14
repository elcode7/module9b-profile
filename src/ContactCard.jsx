function ContactCard({ email, phone }) {
  const styles = {
    card: {
      background: "#f3f4f6",
      padding: "20px",
      borderRadius: "12px",
      maxWidth: "500px",
      width: "100%",
      textAlign: "center",
      fontSize: "16px",
    },
    title: {
      marginBottom: "10px",
      fontSize: "18px",
      fontWeight: "bold",
    },
    info: {
      margin: "5px 0",
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.title}>Contact Information</div>
      <div style={styles.info}>📧 {email}</div>
      <div style={styles.info}>📞 {phone}</div>
    </div>
  );
}

export default ContactCard;
