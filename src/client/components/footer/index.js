import React from "react";
import {
  LinkedIn,
  EmailOutlined,
  PhoneOutlined,
  Instagram,
} from "@mui/icons-material";
/**
 * Footer Component
 *
 * Displays footer portion for the ARS with additional info ie. contact details, social media etc.
 *
 * @param {Object} props
 *
 * @returns {JSX.Element}
 */
const Footer = (props) => {
  return (
    <div className="console-footer">
      <p>
        © {new Date().getFullYear()} All rights reserved to Sahil Kumar{" "}
        <sup>®</sup>
      </p>
      <div className="console-footer-contacts">
        <div className="console-footer-email">
          <EmailOutlined fontSize="small" sx={{ marginTop: "10px" }} />
          &nbsp;Email: sahilkumardhiman07@gmail.com
        </div>
        &nbsp;|&nbsp;
        <div>
          <PhoneOutlined fontSize="small" />
          &nbsp;Phone: +91 9646961419
        </div>
        &nbsp;|&nbsp;
        <div className="console-footer-links">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn fontSize="small" />
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram fontSize="small" />
          </a>
        </div>
      </div>
      <p>
        <a
          href="/privacy-policy"
          style={{ color: "white", textDecoration: "underline" }}
        >
          Privacy Policy
        </a>
        &nbsp;|&nbsp;
        <a
          href="/terms-of-service"
          style={{ color: "white", textDecoration: "underline" }}
        >
          Terms of Service
        </a>
      </p>
    </div>
  );
};

export default Footer;
