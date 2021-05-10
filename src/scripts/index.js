// variable selector
const time = document.querySelector(".time");
const body = document.querySelector("body");

// function for time
const startTime = () => {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  // check if min or sec are < 10
  if (m < 10) {
    m = `0${m}`;
  }
  if (s < 10) {
    s = `0${s}`;
  }

  // time format hh:mm:ss
  time.innerHTML = `${h} : ${m} : ${s}`;

  // displays the current time without reloading
  setTimeout(startTime);
};

// event listener
body.addEventListener("load", startTime());
