import sum, { minus as lose } from './9-3-module1.js';

const result = sum(1, 3); //9-3에서 정의한 함수가 글로벌 적인 스코프를 가져서 9-4에서 도 쓸수있는 문제가 발생함. =>모듈화 필요. html script 에서 type="module"추가.
const result2 = lose(1, 3);
console.log(result)
console.log(result2)