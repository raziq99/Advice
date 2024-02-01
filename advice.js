const URL = "https://api.adviceslip.com/advice";
const adviceEl = document.getElementById("text");
const adviceId = document.getElementById("id");
const adviceButtonEl = document.getElementById("klik");
async function GetAdvice() {
  const response = await fetch(URL, { cache: "no-cache" });
  return await response.json();
}

let button = document.getElementById("klik");
button.addEventListener("click", async () => {
  adviceButtonEl.setAttribute("disabled", true);

  const { slip } = await GetAdvice();
  adviceEl.innerText = slip.advice;
  adviceId.innerText = slip.id;

  adviceButtonEl.removeAttribute("disabled");
});
