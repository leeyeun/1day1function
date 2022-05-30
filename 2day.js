//a부터 b까지 더하는 함수
//5월 17일

function sumAll (a, b) {
    let output = 0;
    for (let i = a; i <= b; i++) {
        output += i;
    }
    return output;
}

console.log(`1부터 100까지 합은? ${sumAll(1, 100)}`)
console.log(`1부터 500까지 합은? ${sumAll(1, 500)}`)