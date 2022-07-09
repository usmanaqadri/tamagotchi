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

// // DISPLAYING INITIAL TAMOGATCHI STATS

document.getElementById("age").textContent += tambo.age;
document.getElementById("hunger").textContent += tambo.hunger;
document.getElementById("sleepiness").textContent += tambo.sleepiness;
document.getElementById("boredom").textContent += tambo.boredom;

// // RENAME TAMOGATCHI

// Grabbing the "Change Name" button and adding event listener
const renameBtn = document.getElementById("rename");
renameBtn.addEventListener("click", rename);

// not using arrow functions so that these can stay lumped together in one section. Standard function declarations are hoisted
function rename() {
  tambo.name = document.querySelector("input").value;
  document.querySelector("input").value = "";
  document.getElementById("tamagotchi").firstElementChild.textContent =
    tambo.name;
}

// // UPDATING TAMOGATCHI STATS

const feedBtn = document.getElementById("feed");
feedBtn.addEventListener("click", () => {
  tambo.feed();
  document.getElementById("hunger").textContent = `Hunger: ${tambo.hunger}`;
  console.log(tambo);
});
const sleepBtn = document.getElementById("sleep");
sleepBtn.addEventListener("click", () => {
  tambo.lightsOut();
  document.getElementById(
    "sleepiness"
  ).textContent = `Sleepiness: ${tambo.sleepiness}`;
});
const playBtn = document.getElementById("play");
playBtn.addEventListener("click", () => {
  tambo.play();
  document.getElementById("boredom").textContent = `Boredom: ${tambo.boredom}`;
});
