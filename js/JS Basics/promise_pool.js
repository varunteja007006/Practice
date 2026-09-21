import { PromisePool } from "@supercharge/promise-pool";


const { results, errors } = await PromisePool.for([
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
])
	.withConcurrency(2)
	.process(async (num) => {
		return num * 2;
	});

console.log(results);

const { results: results2, error: errors2 } = await PromisePool.for([
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
])
	.withConcurrency(100)
	.process(async (num) => {
		return num * 2;
	});

console.log(results2);