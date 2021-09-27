// 방법1
function solution(str){
  let answer="";
  for(let x of str){
    if(!isNaN(x)) answer+=x;
  }  
  return parseInt(answer);
}
            
let str="g0en2T0s8eSoft";
console.log(solution(str));

// 방법2
function solution(str){
  let answer = '';
  for(let i = 0; i < str.length; i++) {
    if(str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58) {
      answer += str[i]
    }
  }
  return parseInt(answer)
}
            
let str="g0en2T0s8eSoft";
console.log(solution(str));
