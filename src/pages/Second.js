import React, { Component, useState } from 'react'
import './second.css';
import img1 from '../images/secondOne.jpeg';
import img2 from '../images/secondTwo.jpeg';
import img3 from '../images/secondThree.jpeg';
import img4 from '../images/secondFour.jpeg';
import img5 from '../images/secondFive.jpeg';
import img6 from '../images/secondSix.jpeg';
import CloseIcon from '@mui/icons-material/Close';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


const Album = () => {

    
    let data = [
        {
            id:1,
            imgSrc:img1,
        },
        {
            id:2,
            imgSrc:img2,
        },
        {
            id:3,
            imgSrc:img3,
        },
        {
            id:4,
            imgSrc:img4,
        },
        {
            id:5,
            imgSrc:img5,
        },
        {
            id:6,
            imgSrc:img6,
        },
    ]

    const [model, setModel] = useState(false);
    const [tempingSrc, setTempingSrc] = useState('');

    const getImg =(imgSrc) =>{
        setTempingSrc(imgSrc);
        setModel(true);
    }


    return(
        <>
        <Navbar />
        <h4>...2nd Floor...</h4>
            <div className={model? "model open" : "model"}>
                <img src = {tempingSrc}/>
                <CloseIcon onClick={() => setModel(false)}/>
            </div>

            <div className='album'>
                {
                    data.map((item, index)=>{
                            return(
                                <div className='pics' key={index} onClick={()=>getImg(item.imgSrc)}>
                                        <img src={item.imgSrc} style={{width:'100%'}}/>
                                </div>
                            )
                    })
                }
            </div>
                  <center>
                    <div className='backBtn'>
                    <Link to={"/Gallery"}><h6>Back</h6></Link> 
                    </div>
                  </center>
            <Footer />
        </>

    )
}

export default Album;