const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.querySelector(".flip-btn");
const output = document.querySelector(".outcome-value");

btn.addEventListener("click", () =>{
   let hexColor = "#";
   for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];   
   }
   console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
    output.textContent = hexColor;

})
function getRandomNumber(params) {
    return Math.floor(Math.random() * hex.length)
}