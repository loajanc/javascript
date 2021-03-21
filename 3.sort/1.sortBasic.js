//Array.prototype.sort();
{
  // 문자열로 변환하고 유니코드 순서로 문자열을 비교하여 정렬한다.
  const months = ["March", "Jan", "Feb", "Dec"];
  months.sort();
  console.log(months); //[ 'Dec', 'Feb', 'Jan', 'March' ] - 첫 알파벳순 정렬

  const array1 = [1, 30, 4, 21, 100000];
  array1.sort();
  console.log(array1); //[ 1, 100000, 21, 30, 4 ] - 첫 숫자순으로 정렬

  // 반환값? 굳이 따지자면 원본 주소를 전달..
  // 반환값 없음이라고 봐도 무방... 그냥 array2.sort(); 이다...
  const array2 = [1, 10, 2, 33, 40];
  const tmp = array2.sort();
  console.log(tmp);
  tmp.pop();
  console.log(tmp);
}

{
  //compareFunction(a,b)이 0보다 작은 값을 반환하면 a를 b보다 낮은 색인으로 정렬합니다.
  //compareFunction(3,4){return -1} => [3,4]로 반환
  //compareFunctino(a,b)이 0보다 큰 값을 반환하면 a를 b보다 큰 색인으로 정렬합니다.
  //compareFuntion(3,4){return 1} => [4,3];
  let numbers = [4, 2, 50, 1, 3];
  numbers.sort(function (a, b) {
    return a - b; // 0보다 작으면 a를 더 앞에 정렬, 즉 오름차순 정렬
  });
  console.log(numbers);
}

{
  //객체배열에서의 속성기준 정렬.
  //:: 개체는 해당 속성 중 하나의 값을 기준으로 정렬 할 수 있음.

  //나이를 기준으로 정렬
  let items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "Ann", value: 45 },
    { name: "The", value: 7 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
    { name: "Abby", value: 12 },
  ];
  items.sort(function (a, b) {
    if (a.value > b.value) {
      return 1; // a.value가 더 크면 1을 반환한다. 1을 반환하면 a가 더 뒤로 가게 된다.
    }
    if (a.value < b.value) {
      return -1; // a.value가 더 작으면 -1을 반환한다. -1을 반환하면 a가 더 앞에 가게 된다.
    }
    return 0;
  });
  console.log(items);

  //이름을 기준으로 정렬
  items.sort(function (a, b) {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      // A가 더 작으면
      return -1; // (인덱스 상) 더 앞에 있어라..
    }
    if (nameA > nameB) {
      // A가 더 크면
      return 1; // (인덱스 상) 더 뒤에 있어라..
    }
    return 0;
  });
  console.log(items);
}

{
  //
  // 배열 만들기, 표시 및 정렬
  let stringArray = ["Blue", "Humpback", "Beluga"];
  let numericStringArray = ["80", "9", "700"];
  let numberArray = [40, 1, 5, 200];
  let mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

  function compareNumbers(a, b) {
    return a - b; //a가 크다고 가정해봐! => +를 반환하고 a가 뒤로 가겠지.. => 그러면,오름차순정렬
  }

  console.log("stringArray:", stringArray.join());
  console.log("sorted:", stringArray.sort());

  console.log("numberArray:", numberArray.join());
  console.log("Sorted without a compare function:", numberArray.sort());
  console.log("Sorted with compareNumbers:", numberArray.sort(compareNumbers));

  console.log("numericStringArray:", numericStringArray.join());
  console.log("Sorted without a compare function:", numericStringArray.sort());
  console.log(
    "Sorted with compareNumbers:",
    numericStringArray.sort(compareNumbers)
  );

  console.log("mixedNumericArray:", mixedNumericArray.join());
  console.log("Sorted without a compare function:", mixedNumericArray.sort());
  console.log(
    "Sorted with compareNumbers:",
    mixedNumericArray.sort(compareNumbers)
  );
}

{
  // 비ASCII코드 sort하기

  // Windows의 경우 대문자의 숫자 코드는 다음과 같습니다.
  // Alt + 0192 = À
  // Alt + 0200 = È
  // Alt + 0204 = Ì
  // Alt + 0210 = Ò
  // Alt + 0217 = Ù
  // Windows의 경우 소문자의 숫자 코드는 다음과 같습니다.
  // Alt + 0224 = à
  // Alt + 0232 = è
  // Alt + 0236 = ì
  // Alt + 0242 = ò
  // Alt + 0249 = ù

  let items = ["rèservè", "premier", "clichè", "communiquè", "cafè", "adieu"];
  items.sort(function (a, b) {
    return a.localeCompare(b);
  });
  console.log(items);
}

{
  // map을 사용한 정렬
  // 이 방법은 임시 배열을 하나 만들어서 여기에 실제 정렬에
  // 사용할 값만을 뽑아서 넣어서 이를 정렬하고, 그 결과를 이용해서
  // 실제 정렬을 하는 것입니다.

  // 소트 할 배열
  let list = ["Delta", "alpha", "CHARLIE", "bravo"];

  // 임시 배열은 위치 및 정렬 값이 있는 객체를 보유한다.
  let mapped = list.map(function (item, idx) {
    return { index: idx, value: item.toLowerCase() };
  });
  console.log(mapped);

  // 축소 치를 포함한 매핑 된 배열의 소트
  mapped.sort(function (a, b) {
    return +(a.value > b.value) || +(a.value === b.value) - 1;
  });

  // 결과 순서를 위한 컨테이너
  let result = mapped.map(function (el) {
    return list[el.index];
  });

  console.log(result);
}
