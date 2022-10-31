import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div class="page-wrapper"></div>
      <div class="footer">
        <div class="footer-content">
          <div className="address">
            E3,
            <br />
            Isurupura Road,
            <br />
            Malabe.
          </div>

          <center>
            <Link to={"/"}>
              <h2>Ego Annex</h2>
            </Link>
            <br></br>

            <a href="www.facbook.com">
              {" "}
              <FaFacebook size="1.3em" />
            </a>

            <a href=" kalanamalshan98@gmail.com">
              {" "}
              <FaEnvelope size="1.3em" />
            </a>
          </center>
          <div className="hotline">
            +94 763 847 839
            <br />
            +94 76 399 6272
            <br />
            +94 75 384 9758
          </div>
        </div>

        <div class="footer-bottom">
          &copy; kalana98@gmail.com | Designed By Kalana De Silva
        </div>
      </div>
    </div>
  );
}
