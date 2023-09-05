import React from "react";
import Post from "../components/Post";
import { useParams } from "react-router-dom";

function PostPage(props){
    const {id} = useParams();
    const postId = Number(id);
    //const postId = 1;
    return(
        <div>
            <Post postId = {postId}/>
        </div>
    );
}

export default PostPage;