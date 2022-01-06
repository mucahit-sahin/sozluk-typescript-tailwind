import api from "../../api";

import { Post, PostDispatch, PostForm } from "../../types/post";

export const getLatestPost = () => async (dispatch: PostDispatch) => {
  dispatch({ type: "GET_LATEST_POSTS_START" });
  try {
    const response = await api.get<Post[]>(`/post`);
    dispatch({ type: "GET_LATEST_POSTS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_LATEST_POSTS_ERROR" });
  }
}

export const isTherePost = (id: string,history:any) => async (dispatch: PostDispatch) => {
  try {
    const response = await api.get<string>(`/post/isthere/${id}`);
    dispatch({ type: "SEARCH", payload: id });
    response.data ? history.push("/" + response.data):history.push("/?q=" + id);
  } catch (error) {
    console.log(error)
  }
}

export const searchPostAction = ( id :string,page?:number) => async (dispatch: PostDispatch) => {
    dispatch({ type: "SEARCH_START" });
    try {
      const response = await api.get<Post>(`/post/${id}?page=${page ? page : "1"}`);
      dispatch({ type: "SEARCH_SUCCESS", payload:response.data });
    } catch {
      dispatch({ type: "SEARCH_ERROR" });
    }
};

export const createPost = (post:PostForm,history:any) => async (dispatch: PostDispatch) => {
  dispatch({ type: "CREATE_POST_START" });
  try {
      const response = await api.post<Post>(`/post`,post);
    dispatch({ type: "CREATE_POST_SUCCESS", payload: response.data });
    history.push("/"+response.data.slug)
  } catch {
    dispatch({ type: "CREATE_POST_ERROR" });
  }
};

export const addCommentToPost = (id:string,message:string,history:any) => async (dispatch: PostDispatch) => {
  dispatch({ type: "ADD_COMMENT_START" });
  try {
      const response = await api.post<Post>(`/post/${id}`,{message});
    dispatch({ type: "ADD_COMMENT_SUCCESS", payload: response.data });
    history.push("/" + response.data.slug)
  } catch {
    dispatch({ type: "ADD_COMMENT_ERROR" });
  }
};

