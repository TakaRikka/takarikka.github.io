function addValues (value) {



if(document.clock.DalarmTime.value.length > 0){

var hourNum = parseInt(document.clock.DalarmTime.value.substring(document.clock.DalarmTime.value.indexOf("~")+1,document.clock.DalarmTime.value.indexOf(":")));

var minNum = parseInt(document.clock.DalarmTime.value.substring(document.clock.DalarmTime.value.indexOf(":")+1,document.clock.DalarmTime.value.lastIndexOf(":")));

var secNum = parseInt(document.clock.DalarmTime.value.substring(document.clock.DalarmTime.value.lastIndexOf(":")+1,document.clock.DalarmTime.value.length));

}

else{

var hourNum = 0;

var minNum = 0;

var secNum = 0;

}



hourNum = value * document.clock.snoozeOptH.value + hourNum;

minNum = value * document.clock.snoozeOptM.value + minNum;

secNum = value * document.clock.snoozeOptS.value + secNum;



while(secNum >= 60){secNum = secNum - 60;minNum++;}

while(minNum >= 60){minNum = minNum - 60;hourNum++;}


while(secNum < 0){secNum += 60;minNum--;}

while(minNum < 0){minNum += 60;hourNum--;}


// format the output

var hourNumS = parseInt(hourNum).toString();
var minNumS = parseInt(minNum).toString();
var secNumS = parseInt(secNum).toString();
if ((secNumS.length) == 1) {
secNumS = "0" + secNumS;}
if ((minNumS.length) == 1) {
minNumS = "0" + minNumS;}
if ((hourNumS.length) == 1) {
hourNumS = "0" + hourNumS;}

document.clock.DalarmTime.value = "" + hourNumS + ":" + minNumS + ":" + secNumS;

}



function resetValues(){

//var document.clock = document.clock;



document.clock.snoozeOptH.value = "";

document.clock.snoozeOptM.value = "";

document.clock.snoozeOptS.value = "";



document.clock.DalarmTime.value = "00:00:00";

}

function clearEntryFields(){

//var document.clock = document.clock;



document.clock.snoozeOptH.value = "";

document.clock.snoozeOptM.value = "";

document.clock.snoozeOptS.value = "";

}