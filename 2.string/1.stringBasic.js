// 문자열 처리 및 배열처리
// 200제 풀어보기
let time1 = "12:00";
console.log(time1.charAt(2));

// 12:00을 1200으로 바꿔봐! ==> 문자열 12:00을 시간객체로 변환해봐!
// 방법1.직접만들어보기
let str2 = time1.substring(0, 2); //반폐쇄
console.log(str2);

let str3 = time1.substring(3, time1.length);
console.log(str3);

let str4 = str2 + str3;
str4 = parseInt(str4);
console.log(str4);

// 방법2. moment.js사용 => 1.date폴더
