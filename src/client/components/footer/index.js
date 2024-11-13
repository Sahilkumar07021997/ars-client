import React from "react";
import {
  LinkedIn,
  EmailOutlined,
  PhoneOutlined,
  Instagram,
  X,
  GitHub,
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
      <div className="console-footer-contacts">
        <div>
          <EmailOutlined fontSize="extra-small" sx={{ marginTop: "10px" }} />
          &nbsp;Email: sahilkumardhiman07@gmail.com &nbsp;|&nbsp;
          <PhoneOutlined fontSize="extra-small" />
          &nbsp;Phone: +91 9646961419&nbsp;|&nbsp;
          <a
            href="https://www.linkedin.com/in/sahil-kumar-aa868218b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn fontSize="extra-small" />
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://www.instagram.com/sahil_kumar_dhiman07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram fontSize="extra-small" />
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://www.twitter.com/sahilku42793054"
            target="_blank"
            rel="noopener noreferrer"
          >
            <X fontSize="extra-small" />
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://github.com/Sahilkumar07021997"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub fontSize="extra-small" />
          </a>
        </div>
      </div>
      <p>
        © {new Date().getFullYear()} All rights reserved to Sahil Kumar{" "}
        <sup>®</sup>
      </p>

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
