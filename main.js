import { Tamagotchi } from "./modules/tamagotchi.js";

document.querySelector("#add-tamagotchi").addEventListener("click", addTama);

const container = document.querySelector(".container");
container.classList.add("container");

function addTama(event) {
  event.preventDefault();

  const card = document.createElement("div");
  container.appendChild(card);
  card.style.borderRadius = "18px";
  card.style.padding = "1rem 1.5rem";

  const inputName = document.querySelector("#name");
  const inputTamaName = inputName.value;
  inputName.value = "";

  const option = document.querySelector("#options");
  const optionchoosen = option.value;

  if (optionchoosen == "lion") {
    card.style.backgroundColor = "orange";
  } else if (optionchoosen == "bear") {
    card.style.backgroundColor = "green";
  } else if (optionchoosen == "rabbit") {
    card.style.backgroundColor = "pink";
  }

  const newTamagotchi = new Tamagotchi(inputTamaName, optionchoosen);

  const tamagotchiName = document.createElement("h4");
  card.appendChild(tamagotchiName);
  tamagotchiName.innerText = inputTamaName + " " + "The" + " " + optionchoosen;

  const foodLevelText = document.createElement("p");
  card.appendChild(foodLevelText);
  foodLevelText.innerText = "Food level :" + newTamagotchi.getFoodLevel();


  const feedButton = document.createElement("button");
  card.appendChild(feedButton);
  feedButton.innerText = "Feed";

  const happinessLevelText = document.createElement("p");
  card.appendChild(happinessLevelText);
  happinessLevelText.innerText = "Happiness level :" + newTamagotchi.getHappinessLevel();

  const playButton = document.createElement("button");
  card.appendChild(playButton);
  playButton.innerText = "Play";

  newTamagotchi.hungerStart(foodLevelText, feedButton, playButton);
  newTamagotchi.happinessStart(happinessLevelText, feedButton, playButton);

  feedButton.addEventListener("click", () => {
    newTamagotchi.feedTamaBtn(foodLevelText);
  });
  playButton.addEventListener("click", () => {
    newTamagotchi.playTamaBtn(happinessLevelText);
  });
}
