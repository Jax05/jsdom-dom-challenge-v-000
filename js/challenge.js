// As a user, I should see the timer increment every second once the page has loaded.
// As a user, I can manually increment and decrement the counter using the plus and minus buttons.
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

  minus.addEventListener("click", decrement);
  plus.addEventListener("click", increment);

  function incrementPerSecond() {
    if (counter.innerHTML < 5) {
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

  startInterval;
});

// function oneSecIncrementer() {
//   setInterval(function(){
//     let pause = document.getElementById('pause')
//     if(pause.innerText == "pause"){
//       let counter = document.getElementById('counter');
//       counter.innerHTML++;
//     }
//   }, 1000);
// }
// window.onload = oneSecIncrementer();
