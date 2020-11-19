let daysContent = document.querySelector('span[data-value= "days"]')
let hoursContent = document.querySelector('span[data-value= "hours"]')
let minutesContent = document.querySelector('span[data-value= "mins"]')
let secondsContent = document.querySelector('span[data-value= "secs"]')



  let myDate = "January 1 2021";

function getTimeBetween(date){
  let newYearTime = new Date(date)
  let time = +newYearTime - Date.now()

  const days = Math.floor((time / (1000 * 60 * 60 * 24)));
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const secs = Math.floor((time % (1000 * 60)) / 1000);

  daysContent.textContent = `${days}`
  hoursContent.textContent = hours
  minutesContent.textContent = mins
  secondsContent.textContent = secs
}

let interval = setInterval(()=>{
  getTimeBetween(myDate)
}, 1000)