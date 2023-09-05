//function myLogger(store){
//    return function(next){
//        return function(action){
//            //하고싶은 작업
//        }
//    }
//}

const myLogger = store => next => action =>{
    //액션 출력
    console.log(action);

    //다음 미들웨어 혹은 리듀서에게 액션을 전달하기
    const result = next(action);
    
    //업데이트 된 상태 출력
    console.log(store.getState());

    //반환하는 값은 dispatch(action) 결과물이 된다.
    return result;
}

export default myLogger;