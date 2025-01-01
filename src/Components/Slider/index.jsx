import React from "react";
import Slider from "react-slick";
import './Slider.css';
import {Button} from '@mui/material'
import { hover } from "@testing-library/user-event/dist/hover";
import { backdropClasses } from "@mui/material";
// import { baseUrl } from "./config";

function Fade() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };
  return (
    <div className="w-100" style={{width:'100%'}}>
        <div className="slider-container" style={{}}>
      <Slider {...settings}>
        <div>
          <img src={"https://tedues-store-demo.myshopify.com/cdn/shop/files/s1.jpg?v=1701674546"} style={{width:'100%'}} />
          <div className="banner-data" style={{width:'300px',position:'absolute',top:'25%',left:'15%',display:'flex',flexDirection:'column'}} >
            <h3 style={{fontSize:'30px',fontVariant:'small-caps'}}>Perfume store</h3>
            <h1 style={{fontSize:'45px',fontVariant:'small-caps'}}>Long-Lasting Perfume</h1>
            <Button sx={{width:'200px',padding:'15px 0',backgroundColor:'black',color:'white',fontSize:'20px',cursor:'pointer','&:hover':{backgroundColor:'#cb8161'}}} >Shop Now</Button>
          </div>
        </div>
        <div>
          <img src={"https://tedues-store-demo.myshopify.com/cdn/shop/files/s3.jpg?v=1701674456"} style={{width:'100%'}}/>
          <div className="banner-data" style={{width:'400px',position:'absolute',top:'20%',right:'15%',display:'flex',flexDirection:'column',textAlign:'end'}}>
            <h3 style={{fontSize:'30px',fontVariant:'small-caps'}}>Hot Collection</h3>
            <h1 style={{fontSize:'45px',fontVariant:'small-caps'}}>Latest Collection In Store</h1>
            <Button sx={{width:'200px',padding:'15px 0',backgroundColor:'black',color:'white',fontSize:'20px',cursor:'pointer',position:'relative',left:'200px','&:hover':{backgroundColor:'#cb8161'}} }>Shop Now</Button>
          </div>
        </div>
       
      </Slider>
    </div>
    </div>
  );
}

export default Fade;
