//footer

// Footer component
function Footer() {
  return (
    <footer className="footer">
      {/* Contact Section */}
      <div className="contact">
        <h3>📞 Contact</h3>
        <p style={{ marginTop: "5px" }}>
          📱 +91 34786 31928 <br />
          💌 perfumy@gmail.com
        </p>
      </div>

      {/* Footer info text */}
      <p style={{ fontSize: "small", padding: "20px", color: "grey" }}>
        🌸 Perfumy is dedicated to providing authentic fragrances for every
        personality. All rights reserved © {new Date().getFullYear()} 💖
        <br />
        Designed with 💕 by Perfumy Team.
      </p>
    </footer>
  );
}

export default Footer