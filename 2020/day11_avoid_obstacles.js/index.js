function avoidObstacles(nums) {
    let i = 2;
    while (!nums.every(num => num % i != 0)) i++;
    return i;
}


const nums = [5, 3, 6, 7, 9];
const result = avoidObstacles(nums);
console.log("result:", result);
