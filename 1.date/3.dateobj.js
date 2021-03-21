{
  // parse test '05' -> 5, 5 -> 05;
  // '05'->5
  let str = "00";
  let strToInt = parseInt(str);
  console.log(strToInt);
  // 5->05;
  let changeIntToStr;
  if (0 <= strToInt && strToInt <= 9) {
    changeIntToStr = "0" + String(strToInt);
  }
}

{
  // 1.Date object 사용하기
  const now = new Date();
  // console.log(now.getHours()+':'+now.getMinutes());
  console.log(now);
}

{
  // 2.new Date(dateString)
  let t = new Date("May 26, 2020 10:00:00");
  console.log("May 26, 2020 10:00:00:", t);

  let test1 = "1990/08/24";
  let test2 = "/" + "12:00" + ":00";
  let t1 = new Date(test1 + test2);
  console.log("1990/08/24" + "/" + "12:00" + ":00:", t1);

  // 3.time compare
  let test3 = "/" + "14:00" + ":00";
  let t2 = new Date(test1 + test3);
  console.log("1990/08/24" + "/" + "14:00" + ":00:", t2);
  console.log("time compare t1<t2 :", t1 < t2);

  // 4.making time compare function
  const timeCompare = (hourMinute1, hourMinute2) => {
    let mine = "1990/08/24/"; //My birthday, tmp value..
    let t1 = new Date(mine + hourMinute1);
    let t2 = new Date(mine + hourMinute2);
    return t1 > t2 ? hourMinute1 : hourMinute2;
  };

  let hourMinute1 = "12:00";
  let hourMinute2 = "13:00";
  console.log(
    "timeCompare(hourMinute1,hourMinute2) :",
    timeCompare(hourMinute1, hourMinute2)
  );
}

{
  // -YYYY-MM-DDTHH:mm:ss.sssZ
  //  에서 sss는 milliseconds(0 to 999);
  //  끝에 Z가 붙으면, UTC TIME 끝에 Z가 붙지 않으면 LOCAL TIME.
  // *UTC란? Univeral Time Coordination이나 Universal Time Cod 가 아니다.
  //       GMT와 UTC는 초의 소숫점단위에서만 차이가 나기때문에 기술적으로 혼용해서 씀.
  //       한국말로는 "협정 세계시"라고 한다.
  //       한국은 +9 :: KST = UTC + 9 hours
  // -- 현재 우리나라의 시간을 기준으로 다른 타임존의 시간을 알고 싶은 경우
  // UTC, GMT는 UTC = KST - 9 hours
  //       CEST(중부 유럽 서머타임) : UTC+2 hours
  //       BST(영국 서머타임)     : UTC+1 hour , 한국시간에 8시간을 빼어 계산한다.
  //       EDT(미국동부 서머타임, 예:뉴욕)   : UTC-4 hours , 한국시간에 13시간을 빼어 계산한다.
  //       CDT(미국중부 서머타임, 예:시카고)   : UTC-5 hours , 한국시간에 14시간을 빼어 계산한다.
  //       CST(중국표준시, 예:타이페이)  : UTC+8 hours , 한국시간에 1시간을 빼어 계산한다.
  // -- 다른 타임존의 시간을 기준으로 우리나라 시간을 알고 싶을 경우
  // UTC,GTM = 해당시간 + 9 hours
}
