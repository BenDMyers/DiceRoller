export function interpretRoll(roll) {
	const terms = [];
	roll.forEach((term) => {
		if(term['die']) {
			terms.push(rollDice(term));
		}
		else {terms.push(term)};
	});

	console.log(terms);

	const toEvaluate = terms.map((term) => {
		if(term.allRolls) {
			return term.sum;
		}
		else if(term.operator) {
			return term.operator;
		}
		else if(term.constant) {
			return term.constant;
		}
		else {
			// You really shouldn't be able to make it here
			return '';
		}
	}).join('');

	// eslint-disable-next-line
	return {roll: terms, evaluated: eval(toEvaluate)};
};

function rollDice(diceTerm) {
	const allRolls = [];
	for(let i = 0; i < diceTerm.count; i++) {
		allRolls.push(generateRoll(diceTerm.die.sides));
	}
	const explosions = diceTerm.die.explode ? explode(diceTerm, allRolls) : null;
	const rerolls = diceTerm.die.reroll ? rerollLowest(diceTerm, allRolls) : null;

	const synthesizedRolls = synthesizeRolls(allRolls, explosions, rerolls);

	const keep = determineKeep(diceTerm, synthesizedRolls);
	const sum = sumOfRolls(synthesizedRolls, keep);

	return {allRolls, explosions, rerolls, keep, sum, synthesizedRolls, diceTerm};
}

function generateRoll(sides, replacementAlgorithm) {
	if(!replacementAlgorithm) {
		return Math.floor(Math.random() * sides) + 1;
	}
	else {
		switch(replacementAlgorithm) {
			case 'MIN':
				return 1;
			case 'MAX':
				return sides;
			case 'AVG':
				return (1 + sides)/2;
			default:
			return Math.floor(Math.random() * sides) + 1;
		}
	}
}

function compareByRoll(a, b) {
	if (a.roll < b.roll) {return -1;}
	if (a.roll > b.roll) {return 1;}
	return 0;
}

function explode(diceTerm, allRolls) {
	return allRolls.map(roll => {
		if(diceTerm.die.explode.includes(roll)) {
			const explosionChain = [];
			let currentRoll = roll;
			while(currentRoll === diceTerm.die.sides) {
				explosionChain.push(currentRoll);
				currentRoll = generateRoll(diceTerm.die.sides);
			}
			explosionChain.push(currentRoll);
			return explosionChain;
		}
		else {
			return null;
		}
	});
}

function rerollLowest(diceTerm, rolls) {
	return rolls.map((roll) => {
		if(diceTerm.die.reroll.includes(roll)) {
			return [roll, generateRoll(diceTerm.die.sides)];
		}
		else {
			return null;
		}
	});
}

function determineKeep(diceTerm, allRolls) {
	const keepFlags = [];
	const rollsWithIndices = allRolls.map((roll, index) => {
		keepFlags.push(true);
		return {roll, index};
	});
	if(diceTerm.keep === 0) {return keepFlags;}
	rollsWithIndices.sort(compareByRoll);
	for(let i = 0; i < (diceTerm.count - diceTerm.keep); i++) {
		keepFlags[rollsWithIndices[i].index] = false;
	}

	return keepFlags;
}

function sumOfRolls(rolls, keep) {
	return rolls.reduce((prev, roll, index) => {
		if(keep[index]) { return prev + roll; }
		else { return prev; }
	}, 0);
}

function sum(array) { return array.reduce((total, current) => total + current); }

function synthesizeRolls(allRolls, explosions, rerolls) {
	const rolls = [...allRolls];

	if(explosions) {
		// eslint-disable-next-line
		explosions.map((explosion, index) => {
			if(explosion) {
				rolls[index] = sum(explosion);
			}
		});
	}

	if(rerolls) {
		// eslint-disable-next-line
		rerolls.map((reroll, index) => {
			if(reroll) {
				rolls[index] = reroll[reroll.length - 1];
			}
		});
	}

	return rolls;
}