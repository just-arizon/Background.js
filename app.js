const color = ["#00b894","#0984e3","#ff7675","#fdcb6e","#81ecec","#3B3B98","#182C61","#58B19F","#FD7272","#6D214F","#808e9b"];
const btn = document.querySelector(".flip-btn");
const output = document.querySelector(".outcome-value");

btn.addEventListener("click", function(){
    
    const randomNumber = getRandomNumber();
    console.log(randomNumber)

    document.body.style.backgroundColor = color[randomNumber];
    output.textContent = color[randomNumber];
});

function getRandomNumber(){
  return Math.floor(Math.random() * color.length);
}