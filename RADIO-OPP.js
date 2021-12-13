const radio = new Object();
radio.station = [];
radio.rnd = () =>
  Math.floor(Math.random() * (radio.station.length - 1 - 0 + 1) + 0);

for (let i = 0; i < 2; i++) {
  radio.station[i] = new Object();
  radio.station[i].name = [];
  radio.station[i].song = `song-${i}`;
  for (let j = 0; j < 2; j++) {
    radio.station[i].name[j] = new Object();
    radio.station[i].name[j].title = `title-${j}`;
    radio.station[i].name[j].artist = `artist-${j}`;
  }
}

for (let i = 0; i < 2; i++) {
  console.log(
    "WE HAVE AN ARRAY OF STATION'S NAME OBJECTS",
    radio.station[i].name
  );
  console.log(
    `THE SONG NAME OF THE STATION NUMBER ${i} IS : ${radio.station[i].song}`
  );
  for (let j = 0; j < 2; j++) {
    console.log(
      `THE TITLE OF THE SONG NUMBER ${j} OF THE STATION NUMBER ${i} IS : ${radio.station[i].name[j].title}`
    );
    console.log(
      `THE SINGER of THE TITLE OF THE SONG NUMBER ${j} OF THE STATION NUMBER ${i} IS : ${radio.station[i].name[j].artist}`
    );
  }
}

console.log(radio.rnd());

class Animal {
  constructor(name, color, age, legs) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.legs = legs;
  }
  animalEat() {
    return "EAT";
  }
  animalAttack() {
    return "ATTACK";
  }
}

const dog = new Animal("bobi", "brown", 5, 4);

console.log(dog.animalEat());

console.log(dog.animalAttack());
