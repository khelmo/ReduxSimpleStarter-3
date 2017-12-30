import axios from 'axios';

export const FETCH_POSTS= 'fetch_posts';

const ROOT_URL ='http://reduxblog.herokuapp.com/api';
const API_KEY ='khelmo';

export function fetchPosts() {
    const request = axios.get(ROOT_URL+'/posts?key='+API_KEY);//`$(ROOT_URL)/posts${API_KEY}`)
    return {
        type: FETCH_POSTS,
        payload: request //automatically resolve promise
    };
}