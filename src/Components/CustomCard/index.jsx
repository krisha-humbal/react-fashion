import React from 'react'
import { FaSistrix } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";
import { BiCartAlt } from "react-icons/bi";
// import './App.css';
function CustomCard({imge,icons,link,link1}) {
  return (
      <div className="cardContainer">
        <div className="imgContainer" style={{width:'100%',position:'relative'}}>
          <img src={imge} alt="" width={'100%'}/>
          <div className="icon-container" style={{display:'flex',position:'absolute',width:'300px',bottom:'100px',justifyContent:'center',gap:'30px',cursor:'pointer'}}
          icons= {icons}>
            <FaSistrix className='iconData'style={{border:'1px solid white',padding:'8px',borderRadius:'100px'}}/>
              <BiHeart  className='iconData' style={{border:'2px solid white',borderRadius:'100px',padding:'8px'}} />
              <BiCartAlt className='iconData' style={{border:'2px solid white',borderRadius:'100px',padding:'8px'}}/>
          </div>
          <div className="rate" style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <a href="" style={{textDecoration:'none',color:'black',textAlign:'center',fontWeight:'500',fontVariant:'small-caps'}}>{link}</a>
            <p style={{textAlign:'center',color:'#cb8161',fontWeight:'700'}}>{link1}</p>
          </div>
        </div>
      </div>
  )
}

export default CustomCard
