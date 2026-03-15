// ! Promise memoization

// The trick is reusing the same Promise instance.
// A Promise is like a sealed envelope. Once the result is inside, everyone who opens it sees the same letter.
// Both awaits receive the same resolved value.
// Because they’re awaiting the same Promise object, not creating a new one.


// This pattern is extremely common
// You’ll see it in:
// - React Query / SWR
// - Request deduplication
// - Next.js fetch caching
// - GraphQL DataLoader
// - Service workers

// call fake api
const userPromise = fetch(
	"https://developerapis.vercel.app/api/users/user-1",
).then((r) => r.json());

// same promise object
const a = userPromise;
const b = userPromise;

console.time("ONE: ");
console.log(await a);
console.timeLog("ONE: ");
console.timeEnd("ONE: ");

console.time("TWO: ");
console.log(await b);
console.timeLog("TWO: ");
console.timeEnd("TWO: ");


// fetch() called once
// Both awaits receive the same resolved value.