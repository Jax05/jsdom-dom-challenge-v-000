// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

document.addEventListener("DOMContentLoaded", () => {
  let startInterval = setInterval(incrementPerSecond, 1000);
  let counter = document.getElementById("counter");
  let minus = document.getElementById("minus");
  let plus = document.getElementById("plus");
  let heart = document.getElementById("heart");
  let pause = document.getElementById("pause");
  let submit = document.getElementById("submit");

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

  function pauseButtonClicked() { // terrible code needs revision
    if (pause.innerText == "pause") {
      pause.innerText = "resume";

      submit.disabled = true;
      heart.disabled = true;
      plus.disabled = true;
      minus.disabled = true;

      clearInterval(startInterval);
    } else {
      pause.innerText = "pause";

      submit.disabled = false;
      heart.disabled = false;
      plus.disabled = false;
      minus.disabled = false;

      startInterval = setInterval(incrementPerSecond, 1000);
    }
  };

  startInterval;
});
