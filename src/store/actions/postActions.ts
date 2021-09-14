import slugify from "slugify";
import api from "../../api";
import { Post, PostDispatch, PostForm } from "../../types/post";

export const searchAction = (id: string,history:any) => async (dispatch: PostDispatch) => {
  dispatch({ type: "SEARCH", payload: id });
  history.push("/"+slugify(id,"_"))
}

export const isTherePost = (id: string,history:any) => async (dispatch: PostDispatch) => {
  try {
    const response = await api.get<string>(`/post/isthere/${id}`);
    dispatch({ type: "SEARCH", payload: id });
    response.data ? history.push("/" + response.data):history.push("/?q=" + id);
  } catch (error) {
    
  }
}

export const searchPostAction = ( id :string,page?:number) => async (dispatch: PostDispatch) => {
    dispatch({ type: "SEARCH_START" });
    try {
        const response = await api.get<Post>(`/post/${id}?page=${page?page:"1"}`);
      dispatch({ type: "SEARCH_SUCCESS", payload:response.data });
    } catch {
      dispatch({ type: "SEARCH_ERROR" });
    }
};

export const createPost = (post:PostForm) => async (dispatch: PostDispatch) => {
  dispatch({ type: "CREATE_POST_START" });
  try {
      const response = await api.post<Post>(`/post`,post);
    dispatch({ type: "CREATE_POST_SUCCESS", payload: response.data });
  } catch {
    dispatch({ type: "CREATE_POST_ERROR" });
  }
};

export const addCommentToPost = (id:string,message:string) => async (dispatch: PostDispatch) => {
  dispatch({ type: "ADD_COMMENT_START" });
  try {
      const response = await api.post<Post>(`/post/${id}`,{message});
    dispatch({ type: "ADD_COMMENT_SUCCESS", payload: response.data });
  } catch {
    dispatch({ type: "ADD_COMMENT_ERROR" });
  }
};

