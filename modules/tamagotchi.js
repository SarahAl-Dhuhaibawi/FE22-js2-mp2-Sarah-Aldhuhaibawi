class Tamagotchi {
  #foodlevel;
  #happinesslevel;
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.#foodlevel = 10;
    this.#happinesslevel = 10;
  }

  hungerStart(foodLevelText, feedButton, playButton) {
    this.hungerId = setInterval(() => {
      this.#foodlevel -= 1;
      foodLevelText.innerText = "Food level : " + this.#foodlevel;

      if (this.#foodlevel === 0) {
        this.stopInterval();
        feedButton.disabled = true;
        playButton.disabled = true;
      }
    }, "1000");
  }

  happinessStart(happinessLevelText, playButton, feedButton) {
    this.happinessId = setInterval(() => {
      this.#happinesslevel -= 1;
      happinessLevelText.innerText =
        "Happiness level : " + this.#happinesslevel;

      if (this.#happinesslevel === 0) {
        this.stopInterval();
        playButton.disabled = true;
        feedButton.disabled = true;
      }
    }, "2000");
  }

  stopInterval() {
    clearInterval(this.hungerId);
    clearInterval(this.happinessId);
  }

  getFoodLevel() {
    return this.#foodlevel;
  }
  getHappinessLevel() {
    return this.#happinesslevel;
  }

  feedTamaBtn(foodLevelText) {
    this.#foodlevel++;
    foodLevelText.innerText = "Food Level : " + this.#foodlevel;
    if (this.#foodlevel === 10) {
      this.#foodlevel -= 1;
    }
  }

  playTamaBtn(happinessLevelText) {
    this.#happinesslevel++;
    happinessLevelText.innerText = "Happiness level : " + this.#happinesslevel;
    if (this.#happinesslevel === 10) {
      this.#happinesslevel -= 1;
    }
  }
}

export { Tamagotchi };
