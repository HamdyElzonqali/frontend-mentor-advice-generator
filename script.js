let number = document.getElementById('number');
let advice = document.getElementById('advice');

function getAdvice(){
    fetch('	https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        advice.innerHTML = data.slip.advice;
        number.innerText = data.slip.id;
    });
}
