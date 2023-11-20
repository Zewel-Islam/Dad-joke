const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "aDt0Mg6JI017psHD7Kyz41afG7wXRmz0E3an98CL";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading..";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Tell Me A Joke!";

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "No internet connection. Please try again later";
  }
}
btnEl.addEventListener("click", getJoke);
