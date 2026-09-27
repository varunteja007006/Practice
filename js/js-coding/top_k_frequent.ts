function topKFrequent(nums: number[], k: number): number[] {
    const frequency = new Map()
    
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (!frequency.has(nums[i])) {
            frequency.set(nums[i], 0)
        }
        const count = frequency.get(nums[i]) + 1
        frequency.set(nums[i], count)
    }
    
    res = Array.from(frequency.entries()).sort((a,b) => b[1] - a[1]).slice(0, k).map((item) => item[0])

    return res
}

console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2)) // output [2,3]

console.log(topKFrequent([7, 7], 2)) // output [7]