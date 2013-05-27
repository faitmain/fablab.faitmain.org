// add a line into this Array
// the first value is the index from https://github.com/faitmain/fablab.faitmain.org/blob/master/fablabs.js
// the second the date
// the third is the title
// the fourth the URL
var events = [
 [2, '2013-06-07', 'Apéro Pi - Metz (aPiro)', 'http://www.raspberrypi.org/phpBB3/viewtopic.php?f=65&t=39940'],
 ]

var weekday = new Array(7);
weekday[0] = "Monday";
weekday[1] = "Tuesday";
weekday[2] = "Wenesday";
weekday[3] = "Thursday";
weekday[4] = "Friday";
weekday[5] = "Saturday";
weekday[6] = "Sunday";

var monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

function _sort(ev1, ev2) {
  var evdate1 = new Date(ev1[1]);
  var evdate2 = new Date(ev2[1]);
  if (ev1 > ev2) return 1;
  if (ev1 < ev2) return -1;
  return 0;
}

events.sort(_sort);


