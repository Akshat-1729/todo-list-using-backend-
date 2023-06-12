const bgElements = document.querySelectorAll(".cat");
const textElements = document.querySelectorAll(".cat h3");
const task =document.querySelectorAll('.task-info h3');
const date =document.querySelectorAll('.task-info p');
const ticks=document.querySelectorAll('.tick-box');

for (let i = 0; i < textElements.length; i++) {
  if (textElements[i].innerText == "Work") {
    bgElements[i].style.backgroundColor = "rgb(255,85,85)";
  }
  else if(textElements[i].innerText=="Personal"){
    bgElements[i].style.backgroundColor="rgb(38,198,81)";
  }
  else if(textElements[i].innerText=="Other"){
    bgElements[i].style.backgroundColor="rgb(228,197,30)";
  }
  else if(textElements[i].innerText=="College"){
    bgElements[i].style.backgroundColor="rgb(81,81,255)";
  }
  else if(textElements[i].innerText=="Cleaning"){
    bgElements[i].style.backgroundColor="rgb(187,55,78)";
  }
}
for(let i=0;i<ticks.length;i++){
    ticks[i].addEventListener('change',function(){
        if(ticks[i].checked){
            date[i].style.textDecoration="line-through";
            task[i].style.textDecoration="line-through";
        }
        else{
            date[i].style.textDecoration="none";
            task[i].style.textDecoration="none";
        }
    })
}
