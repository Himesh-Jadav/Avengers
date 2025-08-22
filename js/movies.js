const movies = [
  {name: "The Avengers (2012)", img: "images/avengers.jpg", desc: "Earth's mightiest heroes assemble for the first time." },
  {name: "Avengers: Age of Ultron (2015)", img: "images/age of ultron.jpg", desc: "The Avengers face a new enemy created by Stark." },
  {name: "Avengers: Infinity War (2018)", img: "images/infinity war.jpg", desc: "The Avengers battle Thanos for the Infinity Stones." },
  {name: "Avengers: Endgame (2019)", img: "images/endgame.jpg", desc: "The final showdown against Thanos." }
];

const container = document.getElementById("movie-list");

movies.forEach(movie => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${movie.img}" alt="${movie.name}">
    <h3>${movie.name}</h3>
    <p>${movie.desc}</p>
  `;
  container.appendChild(card);
});
