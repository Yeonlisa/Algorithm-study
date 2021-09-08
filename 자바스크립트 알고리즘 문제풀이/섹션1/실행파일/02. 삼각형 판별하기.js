function solution(a, b, c){
  let long = Math.max(a, b, c), total = a + b + c, oper = total - long;
  if(oper > long) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(solution(13, 33, 17));
