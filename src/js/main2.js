

// Set the date we're counting down to
var countDownDate = 1000*60*5;

// Update the count down every 1 second
var x = setInterval(function() {
    
  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((countDownDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((countDownDate % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((countDownDate % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("clock").innerHTML =  hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if ( 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "EXPIRED";
  }

  countDownDate -= 1000;
}, 1000);

