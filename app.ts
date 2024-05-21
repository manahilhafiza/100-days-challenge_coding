//Initial guest list YAQOOB909
let guestList: string[] = ["Ali", "minal", "sam", "daniyal"];

// for(let i = 0; i<guestList.length; i++){

//   console.log('Dear Mr.' + '' + guestList [i] + '' + ', \n\n would you like to join me for dinner');
// }

let absent_Guest: string = 'minal';

let new_Guest: string = 'ali';

guestList[0] = new_Guest;

for(let i = 0; i<guestList.length; i++){

    console.log('Dear Mr.' + ''+  guestList [i] + '' + '\n\n   would you like to join me for dinner');
    console.log(`Dear Mr. ${absent_Guest} is not coming to the party.`);

}   
  // console.log(`Dear Mr. ${absent_Guest} is not coming to the party.`);







