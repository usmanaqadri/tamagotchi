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
  getOlder() {
    this.age++;
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

// Feeding your pet

const feedBtn = document.getElementById("feed");
feedBtn.addEventListener("click", () => {
  tambo.feed();
  document.getElementById("hunger").textContent = `Hunger: ${tambo.hunger}`;
  console.log(tambo);
});

// Putting pet to sleep

const sleepBtn = document.getElementById("sleep");
sleepBtn.addEventListener("click", () => {
  tambo.lightsOut();
  document.getElementById(
    "sleepiness"
  ).textContent = `Sleepiness: ${tambo.sleepiness}`;
});

// Playing with pet

const playBtn = document.getElementById("play");
playBtn.addEventListener("click", () => {
  tambo.play();
  document.getElementById("boredom").textContent = `Boredom: ${tambo.boredom}`;
});

// // INCREASING PET'S AGE EVERY X MINUTES

const getRandNum = () => Math.floor(Math.random() * 10) + 1;
setInterval(() => {
  tambo.getOlder();
  document.getElementById("age").textContent = `Age: ${tambo.age}`;
}, getRandNum() * 1000);
