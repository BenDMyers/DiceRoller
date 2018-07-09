import {MODIFY_INPUT} from '../actions/types';

export default function(state='', action) {
	switch(action.type) {
		case MODIFY_INPUT:
			document.querySelector('.roll-input').classList.remove('roll-input-validation-error');
			document.querySelector('.roll-input-validation-label').style.display = 'none';
			return action.payload;
		default:
			return state;
	}
}