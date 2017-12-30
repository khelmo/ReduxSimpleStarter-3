import _ from 'lodash';
import { FETCH_POSTS,FETCH_POST, DELETE_POST } from '../actions';


export default function(state = {},action) {
    switch (action.type) {
        case FETCH_POSTS:
            //console.log(action.payload.data); //[data1,data2]
            // {4: post}
            // lodash does this transformation (take key from array and transform it to obejct with key)
            return _.mapKeys(action.payload.data,'id');
        case FETCH_POST:
            //const post = action.payload.data;
            //const newState = { ...state };
            //newState[post.id] = post;
            //return newState;

            return { ...state, [action.payload.data.id]:action.payload.data};
        case DELETE_POST:
            // action.payload is id
            return _.omit(state,action.payload);
        default:
            return state;
    }
}