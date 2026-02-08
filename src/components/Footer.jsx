import React from "react";
import styles from "../css/Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer} id="contact">
        <div className={styles.footer_container}>
          <a href="https://wa.me/2347019108827">
            <img
              src="/images/whatsapp.png"
              alt=""
              className={styles.whatsapp}
            />
          </a>
          <div className={styles.footer_top}>
            <p>Available to work</p>
            <h3>Contact Me</h3>
          </div>
          <div className={styles.socials}>
            <a href="mailto:midubor13@gmail.com">
              <img src="/images/mail.png" alt="" className={styles.mail} />
            </a>
            <a href="https://t.me/WebsiteKing01">
              <img
                src="/images/telegram.png"
                alt=""
                className={styles.telegram}
              />
            </a>
          </div>
        </div>
        <p className={styles.footer_bottom}>
          Copyright Mercy.I | All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
