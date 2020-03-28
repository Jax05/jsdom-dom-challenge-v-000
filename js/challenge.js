// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
// As a user, I can pause the counter, which should
// pause the counter
// disable all buttons except the pause button
// the pause button should then show the text "resume."
// When 'resume' is clicked, it should restart the counter and re-enable the buttons.
//
// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

document.addEventListener("DOMContentLoaded", () => {
  let startInterval = setInterval(incrementPerSecond, 1000);
  let counter = document.getElementById("counter");
  let minus = document.getElementById("minus");
  let plus = document.getElementById("plus");
  let heart = document.getElementById("heart");
  let pause = document.getElementById("pause");
  let buttons = document.getElementsByTagName("button");

  minus.addEventListener("click", decrement);
  plus.addEventListener("click", increment);
  pause.addEventListener("click", pauseButtonClicked);

  function incrementPerSecond() {
    if (pause.innerText == "pause") {
      counter.innerHTML++; // it's not letting me use counter.innerHTML in a variable for whatever reason
    } else {
      clearInterval(startInterval);
    }
  };

  function increment() {
    counter.innerHTML++;
  };

  function decrement() {
    counter.innerHTML--;
  };

  function pauseButtonClicked() {

    if (pauseNotActive) {
      for (let i = 0; i < buttons.length; i++){
        if (buttons[i].id != "pause") {
          buttons[i].disabled = true;
        }
      }
      pause.innerText = "resume";
    } else {
        buttons.disabled = false;
        pause.innerText = "resume";
    }
    //
    // function pauseActive() {
    //
    // };
    //
    function pauseNotActive() {
      pause.innerText = "pause";
    };
  };

  startInterval;
  console.log(buttons);
});
