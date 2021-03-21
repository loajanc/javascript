//join 함수는 배열들을 연결하여 하나의 함수로 만든다.
{
  let numbers = [1, 2, 3, 4, 5];
  let newNumbers = numbers.join(" / ");
  console.log(newNumbers);
  // 예상값 : 1 / 2 / 3 / 4 / 5
  console.log(typeof newNumbers);
  // 예상값 : string
}
