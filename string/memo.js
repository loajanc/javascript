//문자열 접근
{// charAt(idx)
    // '12:00'을 1200으로 바꾸기
    let str1 = '12:00';
    let c1 = str1.charAt(2);
    console.log(c1);
}

//문자열 대체
{// replace(target,toChange) :: 특정문자를 다른문자로 바꾼다. 
    let str2 = '14:00';
    let c2 = str2.charAt(2);
    str2 = str2.replace(c2,'');
    console.log(str2);
}

//문자열 검색
{// indexOf(target,fromIdx) :: 특정문자가 있는 인덱스를 반환한다.  
    //1."12:00 ~ 14:00"을 분해하고 1200, 1400으로 바꿔라
    //2."12:00 ~ 14:00"을 분해하고 12:00시간객체, 14:00시간객체로 바꿔라
    let str = "12:00 ~ 14:00";
    let tildeIdx = str.indexOf('~');
    let subString1 = str.substring(0,tildeIdx).trim();
    let subString2 = str.substring(tildeIdx+1,str.length).trim();
    // console.log("-12:00 ~ 14:00 분해-");
    // console.log(subString1);
    // console.log("-12:00 ~ 14:00 분해-");
    // console.log(subString2);
    let subTime1ToInt = parseInt(subString1.replace(':',''));
    let subTime2ToInt = parseInt(subString2.replace(':','')); 
    console.log('subTime1ToInt:',subTime1ToInt);
    console.log('subTime2ToInt:',subTime2ToInt);

    //12:00 < 14:00 을 하고 싶다.
    let timeObject1;
    let timeObject2;

    //예제
    timeObject1 = new Date();
    timeObject1.setHours(12,00,0);
    timeObject2 = new Date();
    timeObject2.setHours(14,00,0);

    console.log('timeObject1:',timeObject1);
    console.log('timeObject2:',timeObject2);
    console.log('timeObject1.toLocaleTimeString:',timeObject1.toLocaleTimeString('ja-JP'));
    console.log('timeObject2.toLocaleTimeString:',timeObject2.toLocaleTimeString('ja-JP'));
    console.log(timeObject1.toLocaleTimeString('ja-JP')<timeObject2.toLocaleTimeString('ja-JP'))
}

{// indexOf + charAt + replace :: 
    let str3 = '15:00';
    let colonIdx = str3.indexOf(':');
    str3 = str3.replace(str3.charAt(colonIdx),'');
    console.log(str3);
}

{// substring
    let str4 = '15:00';
    str4.substring(0,2); // substring은 그저 반환
    console.log(str4);
    str4 = str4.substring(0,2); // 이렇게 해야 변화값 반영
    console.log(str4);
}

{// substring + indexOf
    let str = '16:00';
    let colonIdx = str.indexOf(':'); // 2출력
    let subStr1 = str.substring(0,colonIdx);
    let subStr2 = str.substring(colonIdx+1,str.length);
    str = subStr1 + subStr2;
    console.log(str);
}

// 문자열 비교

{//>,<,===
    let a = 'a';
    let a2 = 'a';
    let b = 'b';
    console.log('a>b :',a>b);
    console.log('a<b :',a<b);
    console.log('a===b :',a===b);
    console.log('a===a :',a===a);
    console.log('a===a2 :',a===a2);
    console.log('a==a2 :',a==a2);
    console.log('add < b :','add'<'b');

}

{//startsWith,endsWith

}

// 형변환

{//Number.parseInt(str)

}
