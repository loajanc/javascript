{
  //Date.now()는 1970년 1월 1일 00:00:00(UTC)를 기준으로 현재시각까지 밀리초 숫자로 변환해서 반환
  console.log(Date.now());
}

{
  //Date.parse()는 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 지정 시간까지의 밀리초를 숫자로 반환한다.
  console.log(Date.parse("Jan 2, 2020 12:00:00 UTC"));
  console.log(Date.parse("2020/01/02/09:00:00"));
}
