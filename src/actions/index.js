import {ADD_ROLL, CLEAR_HISTORY, MODIFY_INPUT} from './types';

export function addRoll(rollData) {
	return {
		type: ADD_ROLL,
		payload: rollData
	};
}

export function clearHistory() {
	return {
		type: CLEAR_HISTORY,
	}
}

export function modifyInput(newValue) {
	return {
		type: MODIFY_INPUT,
		payload: newValue
	};
}