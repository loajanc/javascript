//  import moment from 'moment'; // error?
const moment = require('moment');
{
    const today = moment();
    console.log(today.format());
}

{
    const today = moment(); 
    let time1 = '12:00';
    let time2 = '14:00';
    let t1 = today.format(time1);
    let t2 = today.format(time2);
    console.log(t1<t2);
}