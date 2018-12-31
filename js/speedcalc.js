function addValues() {

var position1 = document.clock.position1.value;
var position2 = document.clock.position2.value;
var waitDuration = document.clock.waitDuration.value;

var resultSpeed = Math.round((position1 - position2) * 10000) / 10000;

var timeInterval = waitDuration;


// format the output
var resultSpeed = parseFloat(resultSpeed).toString();

var minMult = 60 / timeInterval;
var speedPerMinute = Math.round((resultSpeed * minMult) * 10000) / 10000;
var speedPerHour = Math.round((speedPerMinute * 60) * 10000) / 10000;



document.clock.baseSpeed.value = "" + resultSpeed;
document.clock.speedPerMinute.value = "" + speedPerMinute;
document.clock.speedPerHour.value = "" + speedPerHour;

}



function resetValues(){

document.clock.position1.value = "";
document.clock.position2.value = "";
document.clock.waitDuration.value = "";

document.clock.baseSpeed.value = "";
document.clock.speedPerMinute.value = "";
document.clock.speedPerHour.value = "";

}



function clearEntryFields(){

document.clock.position1.value = "";
document.clock.position2.value = "";
document.clock.waitDuration.value = "";

}