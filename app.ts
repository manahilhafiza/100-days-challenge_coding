

var guestList = ["Ali", "minal", "sam", "daniyal"];
console.log("Great news! I found a bigger dinner table!");

let absent_Guest= "minal";
 guestList.push('yasir');
 guestList.unshift('talha');
 guestList.splice(guestList.length/ 2,0,'kamran');

guestList.forEach(guestList => {
 console.log(`Dear ${guestList}, \n\n would you like to join me for dinner?`);
 console.log("Dear Mr. ".concat(absent_Guest, " \n\n is not coming to the party."));

 });

console.log("Unfortunately, \n\n I can only invite two people for dinner.");
 while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest},\n\n I can't invite you to dinner.`);
}
    
guestList.forEach(guest => {
    console.log(`Dear ${guest}, \n\n you're still invited to dinner.`);
});
guestList.splice(0, guestList.length);
console.log(guestList);   

