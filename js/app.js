const adviceId = document.querySelector(".advice-id");
const adviceContent = document.querySelector(".advice");
const dice = document.querySelector(".dice-container");

const getAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice", {
    method: "GET",
    "Content-Type": "application/json",
  });
  const data = await response.json();
  updateTextOnPage(data);
};

const updateTextOnPage = (data) => {
  adviceId.textContent = data.slip.id;
  adviceContent.textContent = `“${data.slip.advice}”`;
};

document.body.addEventListener("load", getAdvice());
dice.addEventListener("click", () => getAdvice());
