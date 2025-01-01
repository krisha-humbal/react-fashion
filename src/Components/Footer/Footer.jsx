import React from 'react'
import { FaBehance } from "react-icons/fa";
import { Box } from '@mui/material';
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import './Footer.css';
function Footer() {
  return (
    <div>
      <Box sx={{width:'100%',display:'flex',flexDirection:'column',paddingTop:'50px'}}>
        <Box sx={{width:'100%',gap:'20px',display:'flex',justifyContent:'center'}}>
            <Box sx={{width:'calc(25% - 20px)',display:'flex',flexDirection:'column',alignItems:'left'}}>
                <div className="logoCon" style={{width:'180px'}}><img src="https://tedues-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1701657421" alt="" width={'100%'} /></div>
                <p style={{fontSize:'15px',textAlign:'left',fontWeight:'400',paddingLeft:'20px'}}>Sophisticated simplicity for the
                independent mind.</p>
                <div className='iconnData' style={{display:'flex',gap:'10px',paddingLeft:'20px'}}>
                      <a href="">  <FaTwitter /></a>
                      <a href=""> <FaBehance /></a>
                       <a href=""><CiBasketball/></a>
                       <a href=""><FaInstagram /></a>
                </div>
            </Box>
            <Box sx={{width:'calc(25% - 20px)',display:'flex',flexDirection:'column',alignItems:'left'}}>
                <h3 style={{fontVariant:'small-caps',fontWeight:'600'}}>Help & Information</h3> 
                <div className="line" style={{width:'30px',height:'2px',backgroundColor:'black'}}></div>
                <div classNam='links' style={{display:'flex',flexDirection:'column',gap:'8px',paddingTop:'10px'}}>
                <a  href="">About US</a>
                <a  href="">arivacy aolicy</a>
                <a  href="">Terms & Conditions</a>
                <a  href="">aroduct Return</a>
                <a  href="">Wholsale Policy</a>
               
                </div>
            </Box>
            <Box sx={{width:'calc(25% - 20px)',display:'flex',flexDirection:'column',alignItems:'left'}}>
            <h3 style={{fontVariant:'small-caps',fontWeight:'600'}}>About Us</h3> 
                <div className="line" style={{width:'30px',height:'2px',backgroundColor:'black'}}></div>
                <div classNam='links' style={{display:'flex',flexDirection:'column',gap:'8px',paddingTop:'10px'}}>
                <a  href="">Pagination</a>
                <a  href="">Terms & Conditions</a>
                <a  href="">Contact</a>
                <a  href="">Assessories</a>
                <a  href="">Home Page</a>
               
                </div>
            </Box>
            <Box sx={{width:'calc(25% - 20px)',display:'flex',flexDirection:'column',alignItems:'left'}}>
            <h3 style={{fontVariant:'small-caps',fontWeight:'600'}}>Categories</h3> 
                <div className="line" style={{width:'30px',height:'2px',backgroundColor:'black'}}></div>
                <div classNam='links' style={{display:'flex',flexDirection:'column',gap:'8px',paddingTop:'10px'}}>
                <a  href="">Menu Item</a>
                <a  href="">Help Center</a>
                <a  href="">Address Store</a>
                <a  href="">Privacy Policy</a>
                <a  href="">Home Page</a>
               
                </div>
            </Box>
        </Box>
        <Box sx={{width:'100%',display:'flex',justifyContent:'space-between',fontSize:'15px',paddingTop:'30px'}}>
          <p>© Copyright 2023 | Tedues By <a href="">ThemeOcean</a><a href=""> Powered by Shopify</a>.</p>
          <Box sx={{width:'200px',display:'flex',height:'30px'}}>
            <img src="https://tedues-store-demo.myshopify.com/cdn/shop/files/logoo-removebg-preview.png?v=1701657459" alt="" width={'100%'}/>
           
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Footer
