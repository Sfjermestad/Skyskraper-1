// Set the date we're counting down to
var countDownDate = new Date("Jun 19, 2020 0:0:0").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
if (days.toString().length == 1){
    days = '0'+days
}
if (hours.toString().length == 1){
    hours = '0'+hours
}
if (minutes.toString().length == 1){
    minutes = '0'+minutes
}
if (seconds.toString().length == 1){
    seconds = '0'+seconds
}

// Display the result in the element with id="app"
app.timer = days + " " + hours + " " + minutes + " " + seconds;

// If the count down is finished, write some text 
if (distance < 0) {
    clearInterval(x);
    app.timer = "EXPIRED";
}
}, 1000);


// // Set the date we're counting down to
// var countDownDate = new Date("Jun 19, 2020 0:0:0").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

// // Get today's date and time
// var now = new Date().getTime();

// // Find the distance between now and the count down date
// var distance = countDownDate - now;

// // Time calculations for days, hours, minutes and seconds
// var days = Math.floor(distance / (1000 * 60 * 60 * 24));
// var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// // Display the result in the element with id="demo"
// document.getElementById("demo").innerHTML = days + ":" + hours + ":"
// + minutes + ":" + seconds;

// // If the count down is finished, write some text 
// if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
// }
// }, 1000);