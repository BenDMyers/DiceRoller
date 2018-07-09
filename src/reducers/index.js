import {combineReducers} from 'redux';

import rollReducer from './rolls';

export default combineReducers({rolls: rollReducer});