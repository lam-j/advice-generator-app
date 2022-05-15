const adviceURL = "https://api.adviceslip.com/advice";
const dice = document.querySelector(".dice");
const advice = document.getElementById("advice-text");
const idNumber = document.getElementById("advice-number");

async function fetchAdvice() {
    const res = await fetch(adviceURL);
    var data = await res.json();

    advice.innerHTML = `" ${data.slip.advice} "`;
    idNumber.innerHTML = data.slip.id;
}

dice.addEventListener("click", (e) => {
    e.preventDefault();
    fetchAdvice();
});

fetchAdvice();
