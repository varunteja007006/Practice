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
