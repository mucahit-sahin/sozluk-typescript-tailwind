import { Post, PostAction, PostState } from "../../types/post";

const defaultState: PostState = { posts:[] as Post[],post:  {} as Post,search:"",loading:false,error:""}

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
            return { ...state, search: action.payload };
        case "GET_LATEST_POSTS_START":
            return { ...state, loading: true, posts: [] as Post[] }
        case "GET_LATEST_POSTS_SUCCESS":
            return { ...state, loading: false, posts: action.payload }
        case "GET_LATEST_POSTS_ERROR":
            return { ...state, loading: false, posts: [] as Post[],error:"Get Latest Posts Error"}
        default:
          return state;
      }
}

export default postReducer
