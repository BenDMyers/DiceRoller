import {ADD_ROLL} from '../actions/types';

export default function(state=[], action) {
	switch(action.type) {
		case ADD_ROLL:
			return [action.payload, ...state];
		default:
			return state;
	}
}