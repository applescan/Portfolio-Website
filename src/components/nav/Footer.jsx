import React from "react";
import "./Footer.css"

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="footer">
      <div className="whiteBg">
        <div className="container">
          <div className="innerWrapper flexSpaceCenter" style={{ padding: "30px 0" }}>
            <p className="styleP font13">
              © {getCurrentYear()} Designed and coded by - <span className="purpleColor font13">Felicia Fel</span> 🪅 | Email:{" "}
              <a href="mailto:feliu.ren@gmail.com">feliu.ren@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
