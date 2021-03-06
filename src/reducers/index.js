import { combineReducers } from 'redux';
import * as actionTypes from '../actions/types';

const initialUserState = {
    currentUser: null,
    isLoading: true
};

const users_reducer = (state = initialUserState, action) => {
    switch(action.type) {
        case actionTypes.SET_USER:
            return {
                currentUser: action.payload.currentUser,
                isLoading: false
            };
        case actionTypes.CLEAR_USER:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
};

const initialChannelState = {
    currentChannel: null,
    isPrivateChannel: false,
    userPosts: null
};

const channels_reducer = (state = initialChannelState, action) => {
    switch(action.type) {
        case actionTypes.SET_CURRENT_CHANNEL:
            return {
                ...state,
                currentChannel: action.payload.currentChannel 
            };
        case actionTypes.SET_PRIVATE_CHANNEL:
            return {
                ...state,
                isPrivateChannel: action.payload.isPrivateChannel
            }; 
        case actionTypes.SET_USER_POSTS:
            return {
                ...state,
                userPosts: action.payload.userPosts
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    user: users_reducer,
    channel: channels_reducer
});

export default rootReducer;