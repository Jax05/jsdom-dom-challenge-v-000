// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

document.addEventListener("DOMContentLoaded", () => {
  let startInterval = setInterval(incrementPerSecond, 1000);
  let counter = document.getElementById("counter");
  let minus = document.getElementById("minus");
  let plus = document.getElementById("plus");
  let heart = document.getElementById("heart");
  let pause = document.getElementById("pause");
  let submit = document.getElementById("submit");
  let likes = document.getElementsByClassName("likes")[0];
  let comments = document.getElementById("list");

  minus.addEventListener("click", decrement);
  plus.addEventListener("click", increment);
  pause.addEventListener("click", pauseButtonClicked);
  heart.addEventListener("click", likeButtonClicked);

  function incrementPerSecond() {
    if (pause.innerText == "pause") {
      counter.innerHTML++;
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

  function likeButtonClicked() {
    let like = document.createElement("li");
    like.innerText = counter.innerHTML + " was liked";

    likes.append(like);
  };

  // function addComment() {
    let form = document.getElementById("comment-form");
    let input = document.getElementById("comment-input");

    form.addEventListener("submit", function(event) {
      let comment = document.createElement("p");
      comment.innerText = input.value;

      event.preventDefault();
      comments.appendChild(comment);
    });
  // }

  startInterval;
});
