var count = 0;
let mins = 0;
let hours = 0;
let para = document.querySelector('p');
let seconds = document.querySelector('.sec');
let minutes = document.querySelector('.min');
let hour = document.querySelector('.hour');
document.querySelector('.btn').addEventListener('click', start);
document.querySelector('.pause').addEventListener('click', stop);
document.querySelector('.clear').addEventListener('click', clear);


function counter(){
    if(count < 10) seconds.innerHTML = "0" + count;
    else seconds.innerHTML = count;
    if(count == 59){
      seconds.innerHTML = "00";
      count = 0;
      mins +=1;
      if(mins < 9) minutes.innerHTML = "0" + mins;
      else minutes.innerHTML = mins;  
    }
    if(mins == 59){
      minutes.innerHTML = "00";
      mins = 0;
      hours +=1;
      if(hours < 9) hour.innerHTML = "0" + hours;
      else hour.innerHTML = hours;
    }
    count += 1;
  };


function start(){
    let star = setInterval(counter,1000);
}

function stop(){
   window.alert(hours + " hr " + mins + " mins " + count + " secs ");
   location.reload();
}

function clear(){
  seconds.innerHTML = "00";
  minutes.innerHTML = "00";
  hour.innerHTML = "00";
  count = 0;
}