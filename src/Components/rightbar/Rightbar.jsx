import React from 'react'
import { Users } from '../../Data';
import "./rightbar.css";
import Online from "../online/Online";

export default function Rightbar({profile}) {
  const  HomeRightbar =()=>{
    return(
    <div>
    <div className="birthdayContent">
        <img src="https://media.istockphoto.com/vectors/isometric-gift-flat-icon-pixel-perfect-for-mobile-and-web-vector-id1152848595?k=20&m=1152848595&s=612x612&w=0&h=T9QQc2EYpvnB_sBzvcNrraL77VE9aXQlA86xum364uU=" alt="" className="birthdayImg"/>
        <span className="birthdayText"><b>Vivek Naskar</b> and <b>2 others</b> have a birthdays today.</span>
      </div>
      <img src="https://2.imimg.com/data2/IS/TN/MY-2561564/advertisement-designing-services-500x500.jpg" alt="" className="rightbarAd"/>
      <h4 className="rightbarTitle">Contacts</h4>
      <ul className="rightbarFriendList">
        {Users.map(u=>(
        <Online key={u.id} user={u}/>))}
        
      </ul>
    </div>);
    };

    const ProfileRightbar =()=>{
      return (
        <div>
          <h4 className="rightbarTitle">User Information</h4>
          <div className="rightbarInfo">
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">City:</span>
              <span className="rightbarInfoKeyValue">Kolkata</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">HomeTown:</span>
              <span className="rightbarInfoKeyValue">Kolkata</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Relationship:</span>
              <span className="rightbarInfoKeyValue">Single</span>
            </div>
          </div>
          <h4 className="rightbarTitle">Friends following you</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src="Images/asset/Vivek.jpg" alt="" className="rightbarFollowingImg"/>
              <span className="rightbarFollowingName">Vivek Naskar</span>
            </div>
            <div className="rightbarFollowing">
              <img src="Images/asset/Lal.jpg" alt="" className="rightbarFollowingImg"/>
              <span className="rightbarFollowingName">Lal Basu</span>
            </div>
            <div className="rightbarFollowing">
              <img src="Images/asset/Shreyamam.jpg" alt="" className="rightbarFollowingImg"/>
              <span className="rightbarFollowingName">Lipi Sen</span>
            </div>
            <div className="rightbarFollowing">
              <img src="Images/asset/Palash.jpeg" alt="" className="rightbarFollowingImg"/>
              <span className="rightbarFollowingName">Palash Das</span>
            </div>
            <div className="rightbarFollowing">
              <img src="Images/asset/Jayanta.jpg" alt="" className="rightbarFollowingImg"/>
              <span className="rightbarFollowingName">Jayanta Garain</span>
            </div>
            <div className="rightbarFollowing">
              <img src="Images/asset/Raja.jpg" alt="" className="rightbarFollowingImg"/>
              <span className="rightbarFollowingName">Raja Bhandari</span>
            </div>
          </div>
        </div>
      )

    }
  
  return (
    <div className="rightbar">
    <div className="rightbarWrapper">
      {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      
          </div>
    </div>
  );
}
