import {ADD_ROLL, MODIFY_INPUT} from './types';

export function addRoll(rollData) {
	return {
		type: ADD_ROLL,
		payload: rollData
	};
}

export function modifyInput(newValue) {
	return {
		type: MODIFY_INPUT,
		payload: newValue
	};
}