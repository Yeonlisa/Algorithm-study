// 방법1 : 정규식표현 
function solution(s){
  let answer="YES";
  s=s.toLowerCase().replace(/[^a-z]/g, '');
  if(s.split('').reverse().join('')!==s) return "NO";
  return answer;
}
            
let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));

// 방법2 : 아스키코드 이용
function solution(s) {
  const str = s.toLowerCase().split('').filter((e) => e.charCodeAt() > 64 && e.charCodeAt() < 91 ? true : false).join('')
  
  const palindrome = str.split('').reverse().join('')
  if(str === palindrome) {
    return "YES"
  } else {
    return "NO"
  }
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
