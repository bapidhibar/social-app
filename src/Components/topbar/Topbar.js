
import React from 'react';
import "./topbar.css";
import {Search, Person, Chat, Notifications} from "@mui/icons-material";


export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">FriendBook</span>
      </div>
      <div className="topbarCenter">
      <div className="searchbar"> <Search/> 
      
      <input placeholder="search for friend, post or video" className="searchInput"/>
      </div></div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbarIcon">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">2</span>
        </div>
        <div className="topbarIconItem">
          <Notifications/>
            <span className="topbarIconBadge">1</span>
      </div>
        </div>
        <img src="Images/profilepic.jpg" alt="topbar-img" className="topbarImg"/>
        </div>
        </div>
  );
}
