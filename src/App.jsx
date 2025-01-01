import React from 'react'
import './App.css';
import Home from './Pages/Home';

// import ResponsiveAppBar from './Components/Appbar'
// import { Box } from '@mui/material';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Fade from './Components/Slider';
// import MediaCard from './Components/MediaCard';
// import { Style } from '@mui/icons-material';
// import { FaArrowRight } from "react-icons/fa6";
// import { FaArrowRightLong } from "react-icons/fa6";
// import CustomCard from './Components/CustomCard';
// import {Button} from '@mui/material';
// import Slider1 from './Components/Slider1';
function App() {
  return (
    // <div>
    //   <ResponsiveAppBar />
    //   <Fade />
    //   <Box sx={{ width: '100%', display: 'flex', gap: '15px', paddingTop: '50px', justifyContent: 'center' }}>
    //     <MediaCard img={'https://tedues-store-demo.myshopify.com/cdn/shop/files/ba1.jpg?v=1701665409'} link={'Perfume'} icon={<FaArrowRightLong />} />
    //     <MediaCard img={'https://tedues-store-demo.myshopify.com/cdn/shop/files/ba2.jpg?v=1701665409'} link={'Collection'} icon={<FaArrowRightLong />} />
    //     <MediaCard img={'https://tedues-store-demo.myshopify.com/cdn/shop/files/ba3.jpg?v=1701665409'} link={'News'} icon={<FaArrowRightLong />} />
    //     <MediaCard img={'https://tedues-store-demo.myshopify.com/cdn/shop/files/ba4.jpg?v=1701665409'} link={'Accessories'} icon={<FaArrowRightLong />} />
    //   </Box>

    //   <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '1140px', margin: 'auto', paddingTop: '50px' }}>
    //     <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '300px' }}>
    //       <h1 style={{ textAlign: 'center', fontSize: '30px' }}>BEST SELLER</h1>
    //       <div style={{ width: '100px', height: '3px', backgroundColor: '#cb8161', position: 'relative', left: '95px', bottom: '10px' }}></div>
    //       <h5 style={{ textAlign: 'center', color: 'gray', fontSize: '18px', fontFamily: "Roboto Condensed", fontWeight: '500' }}>Best Seller Product This Week!</h5>
    //     </Box>
    //   </Box>

    //   <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '10px', flexDirection: 'row' }}>
    //     <CustomCard imge={"https://tedues-store-demo.myshopify.com/cdn/shop/products/5.1.jpg?v=1701656183"} link={"Yves"} link1={'$ 25.00'} />
    //     <CustomCard imge={"https://tedues-store-demo.myshopify.com/cdn/shop/products/7.1.jpg?v=1701656177"} link={"Valetino"} link1={'$ 23.00'} />
    //     <CustomCard imge={"https://tedues-store-demo.myshopify.com/cdn/shop/products/12.1.jpg?v=1701656175"} link={"Pink Women"} link1={'$ 23.00'} />
    //     <CustomCard imge={"https://tedues-store-demo.myshopify.com/cdn/shop/products/15.1.jpg?v=1701656170"} link={"Perfume Valetino"} link1={'$ 22.00'} />
    //     <CustomCard imge={"https://tedues-store-demo.myshopify.com/cdn/shop/products/1.1.jpg?v=1701656165"} link={"Nina Ricci"} link1={'$ 21.00'} />
    //     <CustomCard imge={"https://tedues-store-demo.myshopify.com/cdn/shop/products/2.1.jpg?v=1701656159"} link={"Mary Kay"} link1={'$ 21.00'} />
    //     <CustomCard imge={"https://tedues-store-demo.myshopify.com/cdn/shop/products/14.1.jpg?v=1701656155"} link={"Lotion Eau"} link1={'$ 21.00'} />
    //     <CustomCard imge={"https://tedues-store-demo.myshopify.com/cdn/shop/products/3.1.jpg?v=1701656150"} link={"Gucci"} link1={'$ 25.00'} />

    //   </Box>
    // <Box sx={{width:'100%',display:'flex',gap:'20px',justifyContent:'center',paddingTop:'80px'}}>
    //   <div className="collection-img" style={{width:'calc(33.33% - 20px)',overflow:'hidden'}}>
    //     <div className="main-img" style={{overflow:'hidden'}}>
    //     <img src="https://tedues-store-demo.myshopify.com/cdn/shop/files/ba5.jpg?v=1701673694" alt="" width={'100%'}/>
    //     </div>
    //   </div>
    //   <Box sx={{width:'calc(33.33% - 20px)',display:'flex',flexDirection:'column',alignItems:'center'}}>
    //     <h4 style={{textAlign:'center',color:'#cb8161',fontWeight:'400'}}>PERFUME STORE</h4>
    //     <h1 style={{textAlign:'center',fontVariant:'small-caps'}}>Our latest perfume collection</h1>
    //     <Box sx={{width:'150px'}}>
    //     <img src="https://tedues-store-demo.myshopify.com/cdn/shop/files/ba7.png?v=1701673749" alt="" width={'100%'}   />
    //     </Box>
    //     <p style={{textAlign:'center',paddingBottom:'30px',color:'gray'}}>Phasellus lectus nunc, aliquet nec tincidunt nec, egestas in velit. Etiam consectetur malesuada leo. Suspendisse mi risus, rutrum a aliquam bibendum, tempus vitae mi</p>
    //     <Button sx={{border:'2px solid rgb(203, 129, 97)',borderRadius:'0px',fontWeight:'500' ,color:'white',backgroundColor:'rgb(203, 129, 97)','&:hover':{backgroundColor:'white',color:'black',border:'1px solid gray'}}}>SHOP NOW</Button>
    //   </Box>
    //   <div className="collection-img" style={{width:'calc(33.33% - 20px)',overflow:'hidden'}}>
    //     <div className="main-img" style={{overflow:'hidden'}}>
    //     <img src="https://tedues-store-demo.myshopify.com/cdn/shop/files/ba6.jpg?v=1701673694" alt="" width={'100%'}/>
       
    //     </div>
    //   </div>
    // </Box>
    // <h1 style={{fontVariant:'small-caps',paddingTop:'50px',fontSize:'30px',fontWeight:'400'}}>Featured Product</h1>
    // {/* <Box sx={{width: '100%', display: 'flex', flexWrap: 'wrap', gap: '10px', flexDirection: 'row'}}>
    //   <CustomCard imge={"https://tedues-store-demo.myshopify.com/cdn/shop/products/5.1.jpg?v=1701656183"} link={"Yves"} link1={'$ 25.00'} />
    //     <CustomCard imge={"https://tedues-store-demo.myshopify.com/cdn/shop/products/7.1.jpg?v=1701656177"} link={"Valetino"} link1={'$ 23.00'} />
    //     <CustomCard imge={"https://tedues-store-demo.myshopify.com/cdn/shop/products/12.1.jpg?v=1701656175"} link={"Pink Women"} link1={'$ 23.00'} />
    //     <CustomCard imge={"https://tedues-store-demo.myshopify.com/cdn/shop/products/15.1.jpg?v=1701656170"} link={"Perfume Valetino"} link1={'$ 22.00'} />
    // </Box> */}
    // <Slider1/>
    // </div>
    <Home/>
  )
}

export default App
