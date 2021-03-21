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

{// 
    const now = new Date(2019,);
    // console.log(now.getHours()+':'+now.getMinutes());
    console.log(now);
}