import React from 'react'
import "./sidebar.css";
import { Users } from '../../Data';
import CloseFriend from '../closeFriend/CloseFriend';
import {RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event,
School} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidewrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="shareIcon"/>
            <span className="sidebarListItemText">Feed</span></li>
            <li className="sidebarListItem">
            <Chat className="shareIcon"/>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
          <PlayCircleFilledOutlined className="shareIcon"/>
            <span className="sidebarListItemText">Videos</span></li>
            <li className="sidebarListItem">
            <Group className="shareIcon"/>
            <span className="sidebarListItemText">Groups</span></li>
            <li className="sidebarListItem">
            <Bookmark className="shareIcon"/>
            <span className="sidebarListItemText">Bookmarks</span></li>
            <li className="sidebarListItem">
            <HelpOutline className="shareIcon"/>
            <span className="sidebarListItemText">Questions</span></li>
            <li className="sidebarListItem">
            <WorkOutline className="shareIcon"/>
            <span className="sidebarListItemText">Jobs</span></li>
            <li className="sidebarListItem">
            <Event className="shareIcon"/>
            <span className="sidebarListItemText">Events</span></li>
            <li className="sidebarListItem">
            <School className="shareIcon"/>
            <span className="sidebarListItemText">Courses</span></li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr classname="sidebarHr"/>
        <ul className="sidebarFriendList">
          {Users.map((u)=>(<
            CloseFriend key={u.id} user={u}/>))}
          
        </ul>
      </div>
    </div>
  )
}
