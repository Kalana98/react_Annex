import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Email from "../components/Email";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <br></br>
      <center>
       <Email /> 
      </center>
      <Footer />
    </div>
  );
}
