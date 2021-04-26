import axios from 'axios';

const initialState = {
    user: {}
};

const REQUEST_USER_DATA = 'REQUEST_USER_DATA';

export const requestUserData = () => {

    let data = axios.get('/auth/session')
        .then(response => response.data)
        .catch(err => console.log(err));
        return {
            type: REQUEST_USER_DATA,
            payload: data
        };
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_USER_DATA + '_FULFILLED':
            return { user: action.payload };
        
        default:
            return state;
    }
}