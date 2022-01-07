import { ThunkDispatch } from "redux-thunk";

export interface PostState {
    search?: string;
    post: Post;
    posts: Post[];
    loading: boolean;
    error: string;
}

export interface Post {
    title: string;
    slug: string;
    creator: string;
    likes: [];
    unLikes: [];
    comments: Comment[];
    currentPage: number;
    numberOfPages: number;
    createdAt: string;
    id: string;
}

export interface Comment{
    message: string;
    username: string;
    likes: string[];
    unLikes: string[];
    createdAt: Date;
}

export interface PostForm {
    title: string;
    slug: string;
    creator: string;
    message: string;
}

export interface CommentForm{
    username: string;
    message: string;
}

// actions

interface SEARCH_START {
    type: "SEARCH_START";
}
  
interface SEARCH_SUCCESS {
    type: "SEARCH_SUCCESS";
    payload: Post;
}
  
interface SEARCH_ERROR {
    type: "SEARCH_ERROR";
}

interface SEARCH {
    type: "SEARCH";
    payload: string;
}

interface CREATE_POST_START {
    type: "CREATE_POST_START";
}
  
interface CREATE_POST_SUCCESS {
    type: "CREATE_POST_SUCCESS";
    payload: {};
}
  
interface CREATE_POST_ERROR {
    type: "CREATE_POST_ERROR";
}

interface ADD_COMMENT_START {
    type: "ADD_COMMENT_START";
}
  
interface ADD_COMMENT_SUCCESS {
    type: "ADD_COMMENT_SUCCESS";
    payload: Post;
}
  
interface ADD_COMMENT_ERROR {
    type: "ADD_COMMENT_ERROR";
}

interface IS_THERE_POST {
    type: "IS_THERE_POST";
    payload: string;
}

interface GET_LATEST_POSTS_START {
    type: "GET_LATEST_POSTS_START";
}
  
interface GET_LATEST_POSTS_SUCCESS {
    type: "GET_LATEST_POSTS_SUCCESS";
    payload: Post[];
}
  
interface GET_LATEST_POSTS_ERROR {
    type: "GET_LATEST_POSTS_ERROR";
}
interface LIKE_COMMENT_SUCCESS{
    type: "LIKE_COMMENT_SUCCESS";
    payload: Post;
}
interface LIKE_COMMENT_ERROR{
    type: "LIKE_COMMENT_ERROR";
}

interface UNLIKE_COMMENT_SUCCESS{
    type: "UNLIKE_COMMENT_SUCCESS";
    payload: Post;
}
interface UNLIKE_COMMENT_ERROR{
    type: "UNLIKE_COMMENT_ERROR";
}
interface DISLIKE_COMMENT_SUCCESS{
    type: "DISLIKE_COMMENT_SUCCESS";
    payload: Post;

}
interface DISLIKE_COMMENT_ERROR{
    type: "DISLIKE_COMMENT_ERROR";
}
interface UNDISLIKE_COMMENT_SUCCESS{
    type: "UNDISLIKE_COMMENT_SUCCESS";
    payload: Post;
}
interface UNDISLIKE_COMMENT_ERROR{
    type: "UNDISLIKE_COMMENT_ERROR";
}
export type PostAction = SEARCH_ERROR | SEARCH_START | SEARCH_SUCCESS|SEARCH|CREATE_POST_START|CREATE_POST_SUCCESS|CREATE_POST_ERROR|ADD_COMMENT_ERROR|ADD_COMMENT_START|ADD_COMMENT_SUCCESS|IS_THERE_POST|GET_LATEST_POSTS_ERROR|GET_LATEST_POSTS_START|GET_LATEST_POSTS_SUCCESS|LIKE_COMMENT_ERROR|LIKE_COMMENT_SUCCESS|UNLIKE_COMMENT_ERROR|UNLIKE_COMMENT_SUCCESS|DISLIKE_COMMENT_ERROR|DISLIKE_COMMENT_SUCCESS|UNDISLIKE_COMMENT_ERROR|UNDISLIKE_COMMENT_SUCCESS;

export type PostDispatch = ThunkDispatch<
    PostState,
  void,
  PostAction
>;