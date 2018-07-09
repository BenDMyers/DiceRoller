import {combineReducers} from 'redux';

import rollReducer from './rolls';
import inputReducer from './input';

export default combineReducers({rolls: rollReducer, inputValue: inputReducer});