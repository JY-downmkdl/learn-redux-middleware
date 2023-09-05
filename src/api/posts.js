const sleep = n => new Promise( resolve => setTimeout(resolve, n));

//가짜 포스트 목록
const posts = [
    {
        id:1, 
        title: "리덕스 미들웨어",
        body: "리덕스 미들웨어가 있어요"
    },
    {
        id:2, 
        title: "리덕스 thunk",
        body: "리덕스 thunk를 사용해 비동기 작업을 처리해봅시다"
    },
    {
        id:3, 
        title: "logger",
        body: "logger 미들웨어도 있어요"
    }
]


//포스트 목록을 가져오는 비동기함수
export const getPosts= async () => {
    await sleep(500);
    return posts;
}

//id로 포스트를 조회하는 비동기 함수
export const getPostsById = async id =>{
    await sleep(500); //0.5초 쉬고
    return posts.find(post => post.id === id );
}