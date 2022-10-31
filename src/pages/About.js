import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './about.css';

export default function About() {
  return (
    <div>
      <Navbar />
      <br></br>
      <center>
        <p className="titleAbout">From us to you...</p>

        <div className="content">
          Located in a free and peaceful area, this is a perfect place for your
          educational pursuits. <br/>You can book single room and double room as per
          your wish.<br/><br/>In the same way, you will get fully furnished rooms, clean
          washrooms and kind service.<br/> Here are some points that we will consider
          regarding your discipline.<br/> We greatly appreciate your respect for
          them.<br/> Such concerns are taken care of for the sake of your freedom as
          well as that of others.<br/> <br/>Monthly fees will be charged and key money 
          will be charged for two months at the time of admission.<br/>We will return the 
          obtained key money to you on the day you leave our place.<br/><br/>Here we have given you our address and phone numbers.<br/><br/>
          You can also contact us through the email facility on the contact us page.<br/><br/>So...<br/><br/>
          We kindly invite you to join us in enjoying
          the serenity of your freedom.
        </div>
      </center>
      <br></br>
      <Footer />
    </div>
  );
}
