import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./home.css";
import img1 from "../images/home2.jpeg";

export default function () {
  return (
    <div>
      <Navbar />
      <br></br>
      <center>
        <img src={img1} alt="" />

        <div className="content">
          <h1>Make your own accommodation...</h1>

          <div className="addList">
            <ul>
              <li>Only for boys.</li>
              <br />
              <li>Right behind the SLIIT.</li>
              <br />
              <li>15m to the back gate of the SLIIT.</li>
              <br />
              <li>A grocery shop in 10m.</li>
              <br />
              <li>Dining facilities within 100m.</li>
              <br />
              <li>The main road is 8 minutes away.</li>
              <br />
              <li>Single rooms & Double rooms</li>
              <br />
              <li>Clean & Calm place</li>
              <br />
            </ul>
          </div>
        </div>
        <p>We greatly appreciate your discipline</p>
        <div className="btn">
          <Link to={"/Gallery"}>
            <h2>Let's have a journey...</h2>
          </Link>
        </div>
      </center>
      <br></br>
      <Footer />
    </div>
  );
}
