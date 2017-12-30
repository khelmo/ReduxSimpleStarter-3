import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {},action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log(action.payload.data); //[data1,data2]
            // {4: post}
            // lodash does this transformation (take key from array and transform it to obejct with key)
            return _.mapKeys(action.payload.data,'id');
        default:
            return state;
    }
}