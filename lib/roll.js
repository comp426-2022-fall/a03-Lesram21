//roll function
//Takes in three arguments:
//1. number of sides for your dice
//2. number of dice
//3. number of times rolled
function roll(sides, dice, rolls) {
	let totalrolls = [];
	for (let i =0; i < rolls; i++) {
		let total = 0;
		for (let j = 0; j < dice; j++) {
			let currentroll = 1 + Math.floor(Math.random() * sides);
			total += currentroll;
		}
		totalrolls.push(total);
	}
	return JSON.stringify({"sides": sides, "dice": dice, "rolls": rolls, "results": totalrolls});
}

export { roll };
