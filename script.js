// const show=document.querySelector("#date")

// // let nsss=new Date()
// // show.innerText=nsss;
// // let countdown= new Date("Oct 12,2025 00:00:00").getTime()

// // let min = nsss.getMinutes()
// // show.innerText=min;


// let countdownDate = new Date("Oct 9, 2025 00:00:00").getTime();

// let x = setInterval(() => {
//   let now = new Date().getTime();        // current time
//   let distance = countdownDate - now;    // bacha hoya time
//   let time = distance.getTime()
//   show.innerText=time;
// })


let countdownDate = new Date("Oct 12, 2025 00:00:00").getTime();

let x = setInterval(() => {
  let now = new Date().getTime();      
  let distance = countdownDate - now;    

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.querySelector(".timerd p").innerText = days;
  document.querySelector(".timerh p").innerText = hours;
  document.querySelector(".timerm p").innerText = minutes;
  document.querySelector(".timers p").innerText = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".main-timer").innerHTML = "<h2>Countdown Finished 🚀</h2>";
  }
}, 1000);
