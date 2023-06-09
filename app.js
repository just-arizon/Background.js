const color = ["rgb(0, 184, 148)","rgb(9, 132, 227)","rgb(255, 118, 117)","rgb(253, 203, 110)","rgb(129, 236, 236)","rgb(59, 59, 152)","rgb(24, 44, 97)","rgb(88, 177, 159)","rgb(253, 114, 114)","rgb(109, 33, 79)","rgb(128, 142, 155)"];
const btn = document.querySelector(".flip-btn");
const output = document.querySelector(".outcome-value");

btn.addEventListener("click", function(){
    
    const randomNumber = getRandomNumber();
    // console.log(randomNumber) 

    document.body.style.backgroundColor = color[randomNumber];
    output.textContent = color[randomNumber];
});

function getRandomNumber(){
  return Math.floor(Math.random() * color.length);
}