import React from 'react'
import "./profile.css";
import Topbar from "../../Components/topbar/Topbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Feed from "../../Components/feed/Feed";
import Rightbar from "../../Components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
<Topbar/>
<div className="profile">
    <Sidebar/>
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
                <img className="profileCoverImg" src="Images/Coverpic.png" alt=""/>
                <img className="profileUserImg" src="Images/profilepic.jpg" alt=""/>
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Bapi Dhibar</h4>
                <span className="profileInfoDesc">A Web Developer</span>
            </div>
        </div>
        <div className="profileRightBottom">
        <Feed/>
       <Rightbar profile/>
        </div>

    </div>
    
    </div>
    </>
  )
}
