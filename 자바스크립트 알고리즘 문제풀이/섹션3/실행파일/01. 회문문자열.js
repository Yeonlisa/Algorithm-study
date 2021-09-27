// 방법1
function solution(s){
  let answer="YES", len=s.length;
  s=s.toLowerCase();

  for(let i=0; i<parseInt(len/2); i++){
    if(s[i] !== s[len-i-1]) return "NO";
  }
  return answer;
}
         
let str="goooG";
console.log(solution(str));

// 방법2
function solution(s) {
  let answer="YES", len=s.length;
  s=s.toLowerCase();
  
  if(s.split('').reverse().join('') !== s) return "NO"
  return answer;
}

let str="goooG";
console.log(solution(str));
