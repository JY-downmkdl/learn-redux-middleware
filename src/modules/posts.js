//별칭 지정해서 임포트 하기
import * as postsAPI from '../api/posts';
//액션타입 , 액션ㅅ냉성함수, 리듀서

//액션타입
//포스트 전체 저회
const GET_POSTS  = " GET_POSTS"; //요청 시작
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 실패

//포스트 하나 조회
const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = 'GET_POST_ERROR'; // 요청 실패

//thunk 함수

// export const increaseAsync = () => dispatch => {
//     setTimeout(()=> dispatch(increase()), 1000);
// }
export const getPosts = () => async dispatch => {
    dispatch({type: GET_POSTS}); //요청이 시작됨
    try {
        const posts = await postsAPI.getPosts();
        dispatch({type:GET_POSTS_SUCCESS, posts: posts});
    }
    catch(e){

    }
    // try {
    //     //api 호출하기( 별칭 이용 )
    //     const posts = await postsAPI.getPosts();
    //     console.log("dddddd");
    //     //또 dispatch 하기
    //     dispatch({type: GET_POSTS_SUCCESS, posts: posts});
    // } catch (error) {
    //     dispatch({type: GET_POSTS_ERROR, error: error});
        
    // }
}

export const getPost = (id) => async dispatch => {
    dispatch({type: GET_POST}); //요청이 시작됨
    try {
        //api 호출하기( 별칭 이용 )
        const post = await postsAPI.getPostsById(id);
        
        //또 dispatch 하기
        dispatch({type: GET_POST_SUCCESS, post: post});
    } catch (error) {
        dispatch({type: GET_POST_ERROR, error: error});
        
    }
}


// 초기상태 만들기
const initialState = {
    posts: {
        loading: false,
        data: null,
        error: null
    },
    post: {
        loading: false,
        data: null,
        error: null
    }

}


//리듀서 만들기
export default function posts(state=initialState, action){
    switch(action.type){
        case GET_POSTS:
            return{
                ...state,
                posts:{
                    loading: true,
                    data: null,
                    error:null
                }
            }
        case GET_POSTS_SUCCESS:
            return{
                ...state,
                posts: {
                    loading: false,
                    data: action.posts,
                    error: null
                }
            }
        case GET_POSTS_ERROR:
            return{
                ...state,
                posts:{
                    loading: false,
                    data: null,
                    error: action.error
                }
            }

        case GET_POST:
        return{
            ...state,
            post:{
                loading: true,
                data: null,
                error:null
            }
        }
        case GET_POST_SUCCESS:
            return{
                ...state,
                post:{
                loading: false,
                data: action.post, //posts가 아니고 post
                error: null}
            }
        case GET_POST_ERROR:
            return{
                ...state,
                post:{
                loading: false,
                data: null,
                error: action.error}
            }

        default:
            return state;

    }
}