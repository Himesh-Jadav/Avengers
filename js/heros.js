const heroes = [
  { name: "Iron Man", img: "images/iron man.jpeg", desc: "Genius, billionaire, philanthropist." },
  { name: "Captain America", img: "images/Captain America.jpeg", desc: "The First Avenger." },
  { name: "Thor", img: "images/thor.jpeg", desc: "God of Thunder from Asgard." },
  { name: "Hulk", img: "images/hulk.jpeg", desc: "The strongest Avenger." },
  { name: "Black Widow", img: "images/Black Widow.jpeg", desc: "Elite spy and assassin." },
  { name: "Spider man", img: "images/spiderman.jpeg", desc: "Young hero with spider-like agility, strength, responsibility." },
  { name: "Black Panther", img: "images/black panther.jpeg", desc: "Wakanda’s king, Vibranium suit, skilled warrior protector." },
  { name: "Vision", img: "images/vision.jpeg", desc: "Android powered by Vibranium and the Mind Stone." },
  { name: "Ant man", img: "images/ant man.jpeg", desc: "Shrinks, grows, and fights using Pym Particle suit." },
  { name: "Hawkeye", img: "images/hawkeye.jpeg", desc: "Master archer and marksman." },
  { name: "Dr Strange", img: "images/dr strange.jpeg", desc: "Master sorcerer protecting Earth with mystic arts." },
];

const container = document.getElementById("hero-list");

heroes.forEach(hero => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${hero.img}" alt="${hero.name}">
    <h3>${hero.name}</h3>
    <p>${hero.desc}</p>
  `;
  container.appendChild(card);
});
