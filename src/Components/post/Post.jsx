import React, {useState} from 'react'
import "./post.css";
import {MoreVert, ThumbUpAlt, Favorite, Comment} from "@mui/icons-material";
import {Users} from "../../Data";

export default function Post({post}) {
    const[like, setLike]=useState(post.like)
    const[isLiked, setIsLiked]=useState(false)
    const likeHandler=()=>{
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked)

    }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u)=>u.id===post?.userId)[0].profilePicture} alt="" className="postProfileImg"/>
                    <span className="postUsername">{Users.filter((u)=>u.id===post?.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                    
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className="postImg"/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    < ThumbUpAlt onClick={likeHandler}  className="postIcon"/>
                    <Favorite htmlColor="tomato" onClick={likeHandler} className="postIcon"/>
                    <span className="postLikeCounter">{like}</span>
                </div>
                <div className="postBottomRight">
                    <Comment className="postCommentIcon"/>
                    <span className="postCommentText">{post.comment}</span>
                </div>
            </div>
        </div>

    </div>
  )
}
