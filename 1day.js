//2022.05.16
//윤년을 확인하는 함수 만들기
//4로 나누어 떨어지는 해는 윤년이다.
//100으로 나누어 떨어지는 해는 윤년이 아니다.
//400으로 나누어 떨어지는 해는 윤년이다.

function isLeapYear(year) {
    return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
}

console.log(`2020년은 윤년일까? === ${isLeapYear(2020)}`);
console.log(`2022년은 윤년일까? === ${isLeapYear(2022)}`);
console.log(`2000년은 윤년일까? === ${isLeapYear(2000)}`);