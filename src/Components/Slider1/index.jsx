import React from "react";
import Slider from "react-slick";
import './Slider1.css';
import { FaSistrix } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { hover } from "@testing-library/user-event/dist/hover";
import { backdropClasses } from "@mui/material";
// import { baseUrl } from "./config";

function Slider1() {
    const settings = {
        dots: false,
        // Fade: false,
        infinite: false,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 4,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="w-100" style={{ width: '100%',paddingBottom:'50px' }}>
            <div className="slider-container" style={{}}>
                <Slider {...settings}  >
                    <div>
                        <div className="imgContainer" style={{ width: '100%', position: 'relative' }}>
                            <img src={"https://tedues-store-demo.myshopify.com/cdn/shop/products/15.1.jpg?v=1701656170"} style={{ width: '100%' }} />
                            <div className="icon-container" style={{ display: 'flex', position: 'absolute', width: '300px', bottom: '100px', justifyContent: 'center', gap: '30px', cursor: 'pointer' }}>

                                <FaSistrix className='iconData' style={{ border: '1px solid white', padding: '10px', borderRadius: '100px' }} />
                                <FaHeart className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                                <FaCartPlus className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                            </div>
                            <div className="rate" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <a href="" style={{ textDecoration: 'none', color: 'black', textAlign: 'center', fontWeight: '500', fontVariant: 'small-caps' }}>Valentino</a>
                                <p style={{ textAlign: 'center', color: '#cb8161', fontWeight: '700' }}>$25.00</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="imgContainer">
                            <img src={"https://tedues-store-demo.myshopify.com/cdn/shop/products/1.1.jpg?v=1701656165"} style={{ width: '100%' }} />
                            <div className="icon-container" style={{ display: 'flex', position: 'absolute', width: '300px', bottom: '100px', justifyContent: 'center', gap: '30px', cursor: 'pointer' }}>

                                <FaSistrix className='iconData' style={{ border: '1px solid white', padding: '10px', borderRadius: '100px' }} />
                                <FaHeart className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                                <FaCartPlus className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                            </div>
                            <div className="rate" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <a href="" style={{ textDecoration: 'none', color: 'black', textAlign: 'center', fontWeight: '500', fontVariant: 'small-caps' }}>Valentino</a>
                                <p style={{ textAlign: 'center', color: '#cb8161', fontWeight: '700' }}>$25.00</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="imgContainer">
                            <img src={"https://tedues-store-demo.myshopify.com/cdn/shop/products/14.1.jpg?v=1701656155"} style={{ width: '100%' }} />
                            <div className="icon-container" style={{ display: 'flex', position: 'absolute', width: '300px', bottom: '100px', justifyContent: 'center', gap: '30px', cursor: 'pointer' }}>

                                <FaSistrix className='iconData' style={{ border: '1px solid white', padding: '10px', borderRadius: '100px' }} />
                                <FaHeart className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                                <FaCartPlus className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                            </div>
                            <div className="rate" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <a href="" style={{ textDecoration: 'none', color: 'black', textAlign: 'center', fontWeight: '500', fontVariant: 'small-caps' }}>Valentino</a>
                                <p style={{ textAlign: 'center', color: '#cb8161', fontWeight: '700' }}>$25.00</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="imgContainer">
                            <img src={"https://tedues-store-demo.myshopify.com/cdn/shop/products/2.1.jpg?v=1701656159"} style={{ width: '100%' }} />

                            <div className="icon-container" style={{ display: 'flex', position: 'absolute', width: '300px', bottom: '100px', justifyContent: 'center', gap: '30px', cursor: 'pointer' }}>

                                <FaSistrix className='iconData' style={{ border: '1px solid white', padding: '10px', borderRadius: '100px' }} />
                                <FaHeart className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                                <FaCartPlus className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                            </div>
                            <div className="rate" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <a href="" style={{ textDecoration: 'none', color: 'black', textAlign: 'center', fontWeight: '500', fontVariant: 'small-caps' }}>Valentino</a>
                                <p style={{ textAlign: 'center', color: '#cb8161', fontWeight: '700' }}>$25.00</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="imgContainer">
                            <img src={"https://tedues-store-demo.myshopify.com/cdn/shop/products/3.1.jpg?v=1701656150"} style={{ width: '100%' }} />

                            <div className="icon-container" style={{ display: 'flex', position: 'absolute', width: '300px', bottom: '100px', justifyContent: 'center', gap: '30px', cursor: 'pointer' }}>

                                <FaSistrix className='iconData' style={{ border: '1px solid white', padding: '10px', borderRadius: '100px' }} />
                                <FaHeart className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                                <FaCartPlus className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                            </div>
                            <div className="rate" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <a href="" style={{ textDecoration: 'none', color: 'black', textAlign: 'center', fontWeight: '500', fontVariant: 'small-caps' }}>Valentino</a>
                                <p style={{ textAlign: 'center', color: '#cb8161', fontWeight: '700' }}>$25.00</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="imgContainer">
                            <img src={"https://tedues-store-demo.myshopify.com/cdn/shop/products/5.1.jpg?v=1701656183"} style={{ width: '100%' }} />

                            <div className="icon-container" style={{ display: 'flex', position: 'absolute', width: '300px', bottom: '100px', justifyContent: 'center', gap: '30px', cursor: 'pointer' }}>

                                <FaSistrix className='iconData' style={{ border: '1px solid white', padding: '10px', borderRadius: '100px' }} />
                                <FaHeart className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                                <FaCartPlus className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                            </div>
                            <div className="rate" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <a href="" style={{ textDecoration: 'none', color: 'black', textAlign: 'center', fontWeight: '500', fontVariant: 'small-caps' }}>Valentino</a>
                                <p style={{ textAlign: 'center', color: '#cb8161', fontWeight: '700' }}>$25.00</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="imgContainer">
                            <img src={"https://tedues-store-demo.myshopify.com/cdn/shop/products/7.1.jpg?v=1701656177"} style={{ width: '100%' }} />

                            <div className="icon-container" style={{ display: 'flex', position: 'absolute', width: '300px', bottom: '100px', justifyContent: 'center', gap: '30px', cursor: 'pointer' }}>

                                <FaSistrix className='iconData' style={{ border: '1px solid white', padding: '10px', borderRadius: '100px' }} />
                                <FaHeart className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                                <FaCartPlus className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                            </div>
                            <div className="rate" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <a href="" style={{ textDecoration: 'none', color: 'black', textAlign: 'center', fontWeight: '500', fontVariant: 'small-caps' }}>Valentino</a>
                                <p style={{ textAlign: 'center', color: '#cb8161', fontWeight: '700' }}>$25.00</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="imgContainer">
                            <img src={"https://tedues-store-demo.myshopify.com/cdn/shop/products/12.1.jpg?v=1701656175"} style={{ width: '100%' }} />

                            <div className="icon-container" style={{ display: 'flex', position: 'absolute', width: '300px', bottom: '100px', justifyContent: 'center', gap: '30px', cursor: 'pointer' }}>

                                <FaSistrix className='iconData' style={{ border: '1px solid white', padding: '10px', borderRadius: '100px' }} />
                                <FaHeart className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                                <FaCartPlus className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                            </div>
                            <div className="rate" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <a href="" style={{ textDecoration: 'none', color: 'black', textAlign: 'center', fontWeight: '500', fontVariant: 'small-caps' }}>Valentino</a>
                                <p style={{ textAlign: 'center', color: '#cb8161', fontWeight: '700' }}>$25.00</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="imgContainer">
                            <img src={"https://tedues-store-demo.myshopify.com/cdn/shop/products/15.1.jpg?v=1701656170"} style={{ width: '100%' }} />

                            <div className="icon-container" style={{ display: 'flex', position: 'absolute', width: '300px', bottom: '100px', justifyContent: 'center', gap: '30px', cursor: 'pointer' }}>

                                <FaSistrix className='iconData' style={{ border: '1px solid white', padding: '10px', borderRadius: '100px' }} />
                                <FaHeart className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                                <FaCartPlus className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                            </div>
                            <div className="rate" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <a href="" style={{ textDecoration: 'none', color: 'black', textAlign: 'center', fontWeight: '500', fontVariant: 'small-caps' }}>Valentino</a>
                                <p style={{ textAlign: 'center', color: '#cb8161', fontWeight: '700' }}>$25.00</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="imgContainer">
                            <img src={"https://tedues-store-demo.myshopify.com/cdn/shop/products/1.1.jpg?v=1701656165"} style={{ width: '100%' }} />

                            <div className="icon-container" style={{ display: 'flex', position: 'absolute', width: '300px', bottom: '100px', justifyContent: 'center', gap: '30px', cursor: 'pointer' }}>

                                <FaSistrix className='iconData' style={{ border: '1px solid white', padding: '10px', borderRadius: '100px' }} />
                                <FaHeart className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                                <FaCartPlus className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                            </div>
                            <div className="rate" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <a href="" style={{ textDecoration: 'none', color: 'black', textAlign: 'center', fontWeight: '500', fontVariant: 'small-caps' }}>Valentino</a>
                                <p style={{ textAlign: 'center', color: '#cb8161', fontWeight: '700' }}>$25.00</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="imgContainer">
                            <img src={"https://tedues-store-demo.myshopify.com/cdn/shop/products/7.1.jpg?v=1701656177"} style={{ width: '100%' }} />

                            <div className="icon-container" style={{ display: 'flex', position: 'absolute', width: '300px', bottom: '100px', justifyContent: 'center', gap: '30px', cursor: 'pointer' }}>

                                <FaSistrix className='iconData' style={{ border: '1px solid white', padding: '10px', borderRadius: '100px' }} />
                                <FaHeart className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                                <FaCartPlus className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                            </div>
                            <div className="rate" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <a href="" style={{ textDecoration: 'none', color: 'black', textAlign: 'center', fontWeight: '500', fontVariant: 'small-caps' }}>Valentino</a>
                                <p style={{ textAlign: 'center', color: '#cb8161', fontWeight: '700' }}>$25.00</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="imgContainer">
                            <img src={"https://tedues-store-demo.myshopify.com/cdn/shop/products/5.1.jpg?v=1701656183"} style={{ width: '100%' }} />

                            <div className="icon-container" style={{ display: 'flex', position: 'absolute', width: '300px', bottom: '100px', justifyContent: 'center', gap: '30px', cursor: 'pointer' }}>

                                <FaSistrix className='iconData' style={{ border: '1px solid white', padding: '10px', borderRadius: '100px' }} />
                                <FaHeart className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                                <FaCartPlus className='iconData' style={{ border: '2px solid white', borderRadius: '100px', padding: '10px' }} />
                            </div>
                            <div className="rate" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <a href="" style={{ textDecoration: 'none', color: 'black', textAlign: 'center', fontWeight: '500', fontVariant: 'small-caps' }}>Valentino</a>
                                <p style={{ textAlign: 'center', color: '#cb8161', fontWeight: '700' }}>$25.00</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Slider1;
