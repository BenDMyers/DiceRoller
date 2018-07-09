import {ADD_ROLL} from './types';

export function addRoll(rollData) {
	return {
		type: ADD_ROLL,
		payload: rollData
	};
}