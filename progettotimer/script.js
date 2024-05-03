//bottone start & reset
var intervalId;
var running = false;


function startStopTimer() {
    var display = document.querySelector('#timer');

    if (!running) { 
        var duration = 60;
        var timer = duration, minutes, seconds;

        intervalId = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(intervalId);
                running = false;
                document.getElementById('toggleButton').textContent = "Start Timer";
            }
        }, 1000);

        running = true;
        document.getElementById('toggleButton').textContent = "Stop Timer";
    } else {
        clearInterval(intervalId);
        running = false;
        document.getElementById('toggleButton').textContent = "Start Timer";
    }
}


//bottone reset
function resetStopTimer() {
    clearInterval(intervalId); 
    var display = document.querySelector('#timer');
    display.textContent = "01:00";
}

//linea che diminuisce

function countdown() {
    let seconds = 60;
  
    const interval = setInterval(() => {
      console.log(`${seconds}s`);
      seconds--;
  
    if (seconds < 0) {
        clearInterval(interval);
    }
  }, 1000);
}
  
countdown();