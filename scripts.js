let hours = new Date().getHours();
let greeting;

function greet() { 
  if (hours < 6) {
    greeting = `Hey there, night owl!`;
  } else if (hours < 12) {
    greeting = `Good morning!`;
  } else if (hours < 18) {
    greeting = `Good afternoon!`;
  } else {
    greeting = `Good evening!`;
  }

  document.querySelector(`.goodTime`).innerHTML = `<strong>${greeting}</strong><br><br> Current timestamp is:<br>` + Date();
}