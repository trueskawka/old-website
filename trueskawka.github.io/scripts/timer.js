$(function() {
  var workTime = 52 * 60 - 1;
  var breakTime = 17 * 60;
  var clicked = 0;
  var timeInterval;

  var audio = $("#audio").attr("data-audio");

  getTime(workTime + 1);

  $("#start").on('click', function() {
    if (!clicked) {
      timeInterval = setInterval(function(){
        if (workTime) {
          $("#name").html("<p>Work</p>");
          document.title = "Work";
          getTime(workTime);
          workTime = decreaseTime(workTime);
          if (!workTime) {
            bell(audio);
          }
        } else if (breakTime) {
          $("#name").html("<p>Play</p>");
          document.title = "Play";
          getTime(breakTime);
          breakTime = decreaseTime(breakTime);
          if (!breakTime) {
            bell(audio);
          }
        } else {
          workTime = 52 * 60;
          breakTime = 17 * 60;
        }
      }, 1000);
      clicked = 1;
    }
  });

  $("#reset").on('click', function() {
    clearInterval(timeInterval);
    clicked = 0;
    workTime = 52 * 60 - 1;
    breakTime = 17 * 60;
    $("#name").html("<p>Start</p>");
    document.title = "Start";
    getTime(workTime + 1);
  });

  function displaySeconds(seconds) {
    var secondsDisplay;

    if (seconds == 60) {
      secondsDisplay = '00';
    } else if (seconds < 10) {
      secondsDisplay = '0' + seconds;
    } else {
      secondsDisplay = seconds;
    }

    return secondsDisplay;
  }

  function displayTime(minutes, seconds) {
    $("#contents").html("<p>" + minutes + ":" + displaySeconds(seconds) + "</p>");
  }

  function getTime(time) {
    var seconds = time % 60;
    var minutes = parseInt(time/60);

    displayTime(minutes, seconds);
  }

  function decreaseTime(time) {
    return time -= 1;
  }

  function bell(path) {
    new Audio(path).play()
  }
});
