class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 5;
    this.sleepiness = 5;
    this.boredom = 5;
    this.age = 0;
  }
  feed() {
    this.hunger--;
  }
  lightsOut() {
    this.sleepiness--;
  }
  play() {
    this.boredom--;
  }
}

const tambo = new Tamagotchi("Tambo");

const h1El =
  document.getElementById("tamagotchi").firstElementChild.textContent;
console.log(h1El);
