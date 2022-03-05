import { combineReducers } from 'redux';
import notifyReducer from '../notify/reducer';
import authReducer from '../auth/reducer';

export default combineReducers({
    notify: notifyReducer,
    auth: authReducer
}) 