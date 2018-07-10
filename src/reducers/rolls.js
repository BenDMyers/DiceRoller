import {ADD_ROLL, CLEAR_HISTORY} from '../actions/types';

export default function(state=[], action) {
	switch(action.type) {
		case ADD_ROLL:
			return [action.payload, ...state];
		case CLEAR_HISTORY:
			return [];
		default:
			return state;
	}
}