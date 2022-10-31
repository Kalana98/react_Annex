import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img2 from "../images/p1.jpeg";
import img3 from "../images/p2.jpeg";
import img4 from "../images/p3.jpeg";
import { Link } from "react-router-dom";
import './Gallery.css';

export default function Gallery() {
  return (
    <div>
      <Navbar />
      <br></br>
      <center>
        <div className="btn1">
          <Link to={"/Gallery/First"}><h3>1st Floor</h3></Link><br></br>
        </div>
        <div className="btn1">
          <Link to={"/Gallery/Second"}><h3>2nd Floor</h3></Link><br></br>
        </div>
        <div className="btn1">
          <Link to={"/Gallery/Third"}><h3>3rd Floor</h3></Link><br></br>
        </div> 
      
      </center>
      <Footer />
    </div>
  );
}
