const adviceId = document.querySelector("#adviceId");
const adviceText = document.querySelector("#adviceText");
const btn = document.querySelector("#btn");

const url = "https://api.adviceslip.com/advice";

const fetchAdvice = () =>{
    fetch(url).then(response =>{
    return response.json()
}).then(adviceData=>{
    adviceId.textContent = adviceData.slip.id;
    adviceText.textContent = adviceData.slip.advice
}).catch(error => console.log(error))}

btn.addEventListener('click' , fetchAdvice)