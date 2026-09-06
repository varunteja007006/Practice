// check if an array has no duplicate values

function hasNoDuplicate(nums: number[]): boolean {
  const counts: { [key: number]: number } = {};

  for (const item of nums) {
    if (!counts[item]) {
      counts[item] = 1;
    } else {
      return false;
    }
  }

  return true;
}

function hasNoDuplicateWithMap(nums: number[]): boolean {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}

console.log(hasNoDuplicate([1, 2, 3, 4]));
console.log(hasNoDuplicate([1, 2, 3, 4, 4]));

// check if two strings are anagrams of each other

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  if (
    [...s].sort((a, b) => a.localeCompare(b)).join("") ===
    [...t].sort((a, b) => a.localeCompare(b)).join("")
  ) {
    return true;
  }

  return false;
}

// time complexity: O(n log n) because of the sorting

function isAnagramWithMap(s: string, t: string): boolean {
  // better solution with time complexity O(n) using a hash map
  if (s.length !== t.length) {
    return false;
  }

  const count = new Map();

  for (const char of s) {
    count.set(char, (count.get(char) ?? 0) + 1);
  }

  for (const char of t) {
    const frequency = count.get(char);

    if (frequency === undefined) {
      return false;
    }

    if (frequency === 1) {
      count.delete(char);
    } else {
      count.set(char, frequency - 1);
    }
  }

  return count.size === 0;
}

console.log(isAnagram("racecar", "carrace")); // true
console.log(isAnagram("racecar", "carraces")); // false
console.log(isAnagram("jar", "jam")); // false


// Group anagrams together

function groupAnagrams(strs: string[]): string[][] {
    if (strs.length === 1) return [strs]
    const res: string[][] = []
    const resMap = new Map<string, string[]>()
    for (let x = 0; x < strs.length; x++) {
        const curr = strs[x]
        const sortedCurr = [...curr].sort().join('')
        if (resMap.has(sortedCurr)) {
            resMap.set(sortedCurr, resMap.get(sortedCurr)!.concat([curr]))
        } else {
            resMap.set(sortedCurr, [curr])
        }
    }
    resMap.forEach((val) => res.push(val))
    return res
}

// output [["hat"],["act", "cat"],["stop", "pots", "tops"]]

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]))

console.log(groupAnagrams(["x"])) // output [["x"]]

console.log(groupAnagrams([""])) // output [[""]]


// Two sums
function twoSum(nums: number[], target: number): number[] {
    const x = new Map()

    for (let i = 0 ; i < nums.length; i++) {
        const diff = target - nums[i]

        if(x.has(diff)){
            return [x.get(diff), i]
        }

        x.set(nums[i], i)
    }

    return []
}

console.log(twoSum([4, 5, 6], 10))

console.log(twoSum([5, 5], 10))

console.log(twoSum([-1,-2,-3,-4,-5], -8))