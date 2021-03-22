// 정규표현식이란? 일정한 패턴을 가진 문자열의 집합을 표현하기 위해 사용하는 형식 언어다.(formal language)
// 자바스크립트는 PERL의 정규 표현식 문법을 ES3부터 도입

//^:처음, $:마지막, .:임의의 문자 한 개
// /패턴/플래그
// - 플래그
// i: Ignore Case - 대소문자를 구별하지 않고 패턴을 검색한다.
// g: Global -  대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다.
// m: Multi line - 문자열의 행이 바뀌더라도 패턴 검색을 계속한다.

{
  //시작 예
  const tel = "010-1234-567팔";
  const regExp = /^\d{3}-\d{4}-\d{4}$/;
  console.log(regExp.test(tel));
}

{
  //
  //* test(패턴) - regexp가 호출,
  //* new RegExp(패턴) - ES6
  //  :: 검색, .test함수/new RegExp는 boolean을 반환
  const target = "Is this all there is?";
  const regexp = /is/g;
  console.log(regexp.test(target));
}

{
  //* exec(패턴) - regexp가 호출,
  //* match(패턴) - target이 호출,
  //* search(패턴) - target이 호출

  //exec(패턴)은 첫번째 만나는 결과 정보를 배열로 반환, 플래그가 g로 설정되어도 첫 1개만 반환, regex가 호출한다.
  const target = "Is this all thiere is?";
  const regExp = /is/g; // 주의 플래그를 g로 해도 첫번째 매칭되는 결과만 반환한다.
  let Arr = regExp.exec(target);
  console.log(Arr);

  //match(패턴)은 첫번째 만나는 결과값만을 배열로 반환, 플래르가 g로 설정되면 모두 반환, target이 호출한다.
  let Arr2 = target.match(regExp);
  console.log(Arr2);

  //search(패턴)은 첫번째 만나는 인덱스를 반환한다.
  Arr2 = target.search(regExp);
  console.log("search:", Arr2);
}

{
  //플래그 사용예제
  const target = "Is this all there is?";
  target.match(/is/);
  target.match(/is/i);
  target.match(/is/g);
  target.match(/is/gi);
}

{
  //* . : 임의의 한글자를 의미한다.
  //  이것을 이용하면 String을 n개씩 쪼개서 배열로 나열할 수 있다.

  // .뒤에 있는 숫자들을 3개씩 쪼개서 배열에 저장해 보시오.
  let pi = 3.15191490810928310928309;
  let Arr = [];
  let tmp = String(pi);
  Arr = tmp.split(".");
  console.log(Arr);

  let regexp = /.../g;
  let answer = Arr[1].match(regexp);
  console.log(answer);
  // + plus문제
  //           - 그러면 뒤에 있는 숫자가 짤리는 결과가 나온다 이럴때는 어떻게?
}

// ... 여기까지 중 1번 정리
// 리턴을 중심으로
// test() - regexp가 호출, new regexp(), exec()-regexp가 호출, match()-target이 호출
//  test() : boolean반환
//  new RegExp() : boolean반환
//  exec() : 결과정보를 반환 - g사용시에도 한개만 반환
//  match() : exec처럼 결과정보를 배열로 반환 (g사용 안하는 경우) / regexp값을 반환 (g사용시 여러개반환)

{
  // {m,n}패턴 - 최소 m번, 최대 n번 반복

  //{n} : n번 반복
  const target = "A AA B BB Aa Bb AAA";
  const regExp = /A{1}/g;
  console.log("A{1}:", target.match(regExp));

  //{n,} : 최소 n번 이상
  const regExp2 = /A{2,}/g;
  console.log("A{2,}:", target.match(regExp2));

  //+ : {1,}과 equal
  const regExp3 = /A+/g;
  console.log("A{1,} or A+:", target.match(regExp3));

  //? : 0번 or 최대한번
  const target2 = "color colour";
  const regExp4 = /colou?r/g;
  console.log("/colou?r/:", target2.match(regExp4));

  // | : OR검색 <또는> []내에 문자를 넣는다 ex> [AB]:A or B
  const target3 = " A AA B BB Aa Bb";
  const regExp5 = /A|B/g;
  console.log("/A|B/g", target3.match(regExp5));

  const regExp6 = /[AB]/g;
  console.log("[AB]:", target3.match(regExp6));

  //[ - ] : 범위지정
  const regExp7 = /[A-Z]/g;
  console.log("/[A-B]/:", target3.match(regExp7));

  const regExp8 = /[A-Z]+/g;
  console.log("/[A-B]+/:", target3.match(regExp8));

  const regExp9 = /[A-Za-z]/g; //A-Z Exclusive-OR a-z;
  console.log("/[A-Za-z]/g:", target3.match(regExp9));

  const regExp10 = /[A-Za-z]+/g; //(A-Z Exclusive-OR a-z)+;
  console.log("/[A-Za-z]/g:", target3.match(regExp10));

  const target4 = "AA BB 12,345";
  const regExp11 = /[0-9]+/g;
  console.log("/[0-9]+/g :", target4.match(regExp11));

  const regExp12 = /[0-9,]+/g;
  console.log("/[0-9,]+/g :", target4.match(regExp12));

  const regExp13 = /[\d]+/g;
  console.log("/[d,]+/g :", target4.match(regExp13));

  const regExp14 = /[\d,]+/g;
  console.log("/[d,]+/g :", target4.match(regExp14));

  const regExp15 = /[\D]+/g;
  console.log("/[D]+/g :", target4.match(regExp15));

  const regExp16 = /[\w, ]+/g;
  console.log("/[w]+/g :", target4.match(regExp16));

  const regExp17 = /[^\w]+/g;
  console.log("/[^w]+/g :", target4.match(regExp17));
}
