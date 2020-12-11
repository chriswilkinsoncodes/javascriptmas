function adjacentElementsProduct(nums) {
    let result = NaN
    let prod = 0
    for (let i = 0; i < nums.length-1; i++)
        prod = nums[i] * nums[i+1]
        if (prod > result) {
            result = prod
        }
    return prod
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))
