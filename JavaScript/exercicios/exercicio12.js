let fat = num => num == 0 ? 1 : num * fat(num - 1)

console.log(fat(5))

fat = function (num) {
    for (let i = (num - 1); i > 0; i--) {
        num *= i
    }
    return num
}

console.log(fat(6))