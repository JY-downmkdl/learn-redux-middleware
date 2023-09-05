import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../modules/posts";

function Post({postId}){
    const {data, loadding, error} = 
        useSelector( state=> state.posts.post);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPost(postId));
    },[dispatch, postId]);
    if(loadding) return <div>로딩중...</div>
    if(error) return <div>에러발생</div>
    if(!data) return null;

    return(
        <div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>
    )
}

export default Post;