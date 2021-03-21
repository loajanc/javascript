{// parse test '05' -> 5, 5 -> 05;   
    // '05'->5
    let str = '00';
    let strToInt = parseInt(str);
    console.log(strToInt);
    // 5->05;
    let changeIntToStr;
    if(0<=strToInt&&strToInt<=9){
        changeIntToStr = '0' + String(strToInt);
    }
}

{// 1.Date object 사용하기
    const now = new Date();
    // console.log(now.getHours()+':'+now.getMinutes());
    console.log(now);
}

{// 2.new Date(dateString)
    let t = new Date('May 26, 2020 10:00:00');
    console.log('May 26, 2020 10:00:00:',t);

    let test1 = '1990/08/24';
    let test2 = '/'+'12:00'+':00';
    let t1 = new Date(test1+test2);
    console.log('1990/08/24'+'/'+'12:00'+':00:',t1);

    // 3.time compare
    let test3 = '/'+'14:00'+':00';
    let t2 = new Date(test1+test3);
    console.log('1990/08/24'+'/'+'14:00'+':00:',t2);
    console.log('time compare t1<t2 :',t1<t2);

    // 4.making time compare function
    const timeCompare = (hourMinute1,hourMinute2) => {
        let mine = '1990/08/24/';//My birthday, tmp value..
        let t1 = new Date(mine+hourMinute1);
        let t2 = new Date(mine+hourMinute2);
        return t1>t2 ? hourMinute1 : hourMinute2;
    }

    let hourMinute1 = '12:00';
    let hourMinute2 = '13:00';
    console.log('timeCompare(hourMinute1,hourMinute2) :',timeCompare(hourMinute1,hourMinute2))
}

