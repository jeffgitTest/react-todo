var moment = require('moment');

console.log(moment().format("MMMM Do, YYYY @h:mm A"));
//
//
// // January 1st 1970 @ 12:00am -> 0
// // January 1st 1970 @ 12:01am -> -60
//
var now = moment().unix();
// console.log('Current timestamp ', now.unix());
//
// var timestamp = 1476673213;
// var currMoment = moment.unix(timestamp);
// console.log('Current moment ', currMoment.format("MMM D, YYYY @h:mm A"));

//January 3rd, 2016 @ 12:13 AM
//.unix().format("MMMM Do, YYYY @h:mm A")

var currMoment = moment.unix(now);
console.log('Current moment ', currMoment.format("MMMM Do, YYYY @h:mm A"));
