import { Post, PostAction, PostState } from "../../types/post";

const defaultState: PostState = { post:  {} as Post,search:"",loading:false,error:""}

const postReducer = (state:PostState=defaultState,action:PostAction) => {
    switch (action.type) {
        case "SEARCH_START":
        case "ADD_COMMENT_START":
            return { ...state, loading: true, post: {} as Post};
        case "SEARCH_SUCCESS":
        case "ADD_COMMENT_SUCCESS":
            return  {...state,loading:false,post:action.payload};
        case "SEARCH_ERROR":
        case "ADD_COMMENT_ERROR":
            return { ...state, loading: false, error: "Error" };
        case "SEARCH":
            return  {...state,search:action.payload};
        default:
          return state;
      }
}

export default postReducer
