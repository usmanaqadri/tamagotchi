class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 5;
    this.sleepiness = 5;
    this.boredom = 5;
    this.age = 0;
    this.stage = 0;
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
  if (tambo.hunger === 0) {
    return;
  }
  tambo.feed();
  document.getElementById("hunger").textContent = `Hunger: ${tambo.hunger}`;
});

// Putting pet to sleep

const sleepBtn = document.getElementById("sleep");
sleepBtn.addEventListener("click", () => {
  if (tambo.sleepiness === 0) {
    return;
  }
  tambo.lightsOut();
  document.getElementById(
    "sleepiness"
  ).textContent = `Sleepiness: ${tambo.sleepiness}`;
});

// Playing with pet

const playBtn = document.getElementById("play");
playBtn.addEventListener("click", () => {
  if (tambo.boredom === 0) {
    return;
  }
  tambo.play();
  document.getElementById("boredom").textContent = `Boredom: ${tambo.boredom}`;
});

// // INCREASING PET'S AGE EVERY X MINUTES

const getRandNum = (target) => Math.floor(Math.random() * target) + 1;
setInterval(() => {
  tambo.getOlder();
  document.getElementById("age").textContent = `Age: ${tambo.age}`;
}, getRandNum(3) * 1000 * 60);

// // INCREASING PET'S HUNGER, SLEEPINESS, AND BOREDOM METRICS
setInterval(() => {
  tambo.hunger++;
  document.getElementById("hunger").textContent = `Hunger: ${tambo.hunger}`;
}, getRandNum(10) * 1000);
setInterval(() => {
  tambo.sleepiness++;
  document.getElementById(
    "sleepiness"
  ).textContent = `Sleepiness: ${tambo.sleepiness}`;
}, getRandNum(10) * 1000);
setInterval(() => {
  tambo.boredom++;
  document.getElementById("boredom").textContent = `Boredom: ${tambo.boredom}`;
}, getRandNum(10) * 1000);

// // MORPHING PET A CERTAIN AGES

if (tambo.age === 3) {
  alert(`${tambo.name} is evolving!`);
  tambo.stage = 1;
}
if (tambo.stage === 1) {
  //do something on the dom to transform how it looks
}

if (tambo.age === 8) {
  alert(`${tambo.name} is evolving!`);
  tambo.stage = 2;
}
if (tambo.stage === 2) {
  //do something on the DOM to transform it
}
