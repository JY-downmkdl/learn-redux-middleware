import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../modules/posts";
import { Link } from "react-router-dom";

function PostList(){
    // state = {
    //     counter : 0,
    //     posts: {
    //         posts: {
    //             loading: false,
    //             data: null,
    //             error: null
    //         },
    //         post: {
    //             loading: false,
    //             data: null,
    //             error: null
    //         }
    //     }
    // }
    //위 상태에서 posts > posts를 가져오고 싶을 때
    //만약 counter에 접근하고 싶다면 state.counter
    const {data, loading, error} = 
        useSelector(state => state.posts.posts);

    const dispatch = useDispatch(); // dispatch 리턴

    //컴포넌트가 마운트 될 때 전체 목록 요청하기
    //원래 dispatch안에는 객체가 들어가야 한다.
    //만약 함수를 넣게 되면 thunk를 호출한다.
    useEffect(()=>{
        dispatch(getPosts())
    }, [dispatch])

    if(loading) return <div>로딩중...</div>;
    if(error) return <div>에러발생</div>;
    if(!data) return null;
    return(
        <div>
            <ul>
                {data.map(post =>(
                    <li key={post.id}>
                        <Link to={`${post.id}`}>{post.title}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default PostList;