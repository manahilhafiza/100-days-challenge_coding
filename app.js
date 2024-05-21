//Initial guest list YAQOOB909
var guestList = ["Ali", "minal", "sam", "daniyal"];
// for(let i = 0; i<guestList.length; i++){
//   console.log('Dear Mr.' + '' + guestList [i] + '' + ', \n\n would you like to join me for dinner');
// }
var absent_Guest = 'minal';
var new_Guest = 'ali';
guestList[0] = new_Guest;
for (var i = 0; i < guestList.length; i++) {
    console.log('Dear Mr.' + '' + guestList[i] + '' + '\n\n   would you like to join me for dinner');
    console.log("Dear Mr. ".concat(absent_Guest, " is not coming to the party."));
}
