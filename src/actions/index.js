import axios from 'axios';

export const FETCH_POSTS= 'fetch_posts';
export const FETCH_POST= 'fetch_post';
export const CREATE_POSTS= 'create_posts';
export const DELETE_POST= 'delete_posts';

const ROOT_URL ='http://reduxblog.herokuapp.com/api';
const API_KEY ='khelmo';

export function fetchPosts() {
    const request = axios.get(ROOT_URL+'/posts?key='+API_KEY);//`$(ROOT_URL)/posts${API_KEY}`)
    return {
        type: FETCH_POSTS,
        payload: request //automatically resolve promise
    };
}

export function createPost(values,callback) {
    const request = axios.post(ROOT_URL+'/posts?key='+API_KEY,values)
        .then(()=> callback());
    return {
        type: CREATE_POSTS,
        payload: request //automatically resolve promise
    };
}

export function fetchPost(id) {
    const request = axios.get(ROOT_URL+'/posts/'+id+'?key='+API_KEY);
    return {
        type: FETCH_POST,
        payload: request //automatically resolve promise
    };
}


export function deletePost(id,callback) {
    const request = axios.delete(ROOT_URL+'/posts/'+id+'?key='+API_KEY).then(()=> callback());
    return {
        type: DELETE_POST,
        payload: id
    };
}