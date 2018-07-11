import React from 'react';

export function displayRollBreakdown({rollData, original}) {
	if(!rollData) {return;}
	const {roll} = rollData;
	return (
		<div>
			<div className='roll-original'>{original}</div>
			<span className='breakdown'>
				{roll.map((term, index) => breakdownTerm(term, index))}
			</span>
		</div>
	);
}

function breakdownTerm(term, index) {
	if(term.constant) {
		return <span key={index} className='breakdown-constant'> {term.constant} </span>;
	}
	else if(term.operator) {
		return <span key={index} className='breakdown-operator'> {term.operator} </span>;
	}
	else {
		console.log(term.synthesizedRolls);
		const polyhedronSpan = <i key={'poly' + index} className={determinePolyhedronClasses(term.diceTerm.die.sides)}></i>;
		if(term.synthesizedRolls.length <= 1) {
			return (
				<span key={'term' + index}>
					{polyhedronSpan}{breakdownDiceTerm(term)}
				</span>
			);
		}
		else {
			return (
				<span key={'term' + index}>
					{polyhedronSpan}({breakdownDiceTerm(term)})
				</span>
			 );
		}
	}
}

function dieClasses(term, dieIndex) {
	let classList = ['breakdown-die'];
	if(term.explosions && term.explosions[dieIndex]) {
		classList.push('breakdown-exploded');
	}
	else if(term.allRolls[dieIndex] === term.diceTerm.die.sides) {
		classList.push('breakdown-critical-hit');
	}
	if(term.rerolls && term.rerolls[dieIndex]) {
		classList.push('breakdown-rerolled');
	}
	if(term.synthesizedRolls[dieIndex] === 1) {
		classList.push('breakdown-critical-miss');
	}
	if(!term.keep[dieIndex]) {
		classList.push('breakdown-dropped');
	}
	return classList.join(' ');
}

function breakdownDiceTerm(term) {
	return term.synthesizedRolls.map((die, index) => {
		const classList = dieClasses(term, index);
		const dieSpan = <span key={index} className={classList}> {die} </span>;
		const elementArr = [dieSpan];
		if(index < term.synthesizedRolls.length - 1) {
			elementArr.push(<span key={'plus' + index} className='breakdown-operator'>&nbsp;+&nbsp;</span>);
		}
		return elementArr;
	});
}

function determinePolyhedronClasses(sides) {
	switch(sides) {
		case 4:
			return "flaticon-tetrahedron poly polyhedron-d4";
		case 6:
			return "flaticon-cube poly polyhedron-d6";
		case 8:
			return "flaticon-octahedron poly polyhedron-d8";
		case 10:
			return "flaticon-dodecahedron-1 poly polyhedron-d10";
		case 12:
			return "flaticon-dodecahedron poly polyhedron-d12";
		case 20:
			return "flaticon-icosahedron poly polyhedron-d20";
		case 100:
			return "flaticon-dodecahedron-1 poly polyhedron-d100";
		default:
			return "flaticon-dodecahedron-2 poly polyhedron-dn";
	}
}