import React, { Component, useState } from 'react'
import './Album.css';
import img1 from '../images/1.jpg';
import img2 from '../images/3.jpg';
import img3 from '../images/4.jpg';
import img4 from '../images/dd.jpg';
import img5 from '../images/wall.jpg';
import img6 from '../images/wall1.png';
import CloseIcon from '@mui/icons-material/Close';
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';


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
        </>

    )
}

export default Album;