const gallery = document.getElementById("gallery");
import data from "../data/data.json";

console.log(data);

data.forEach((item) => {
  const div = document.createElement("div");
  const title = document.createElement("h2");
  const button = document.createElement("a");
  div.classList.add("gallery-card");
  title.classList.add("gallery-card-title");
  button.classList.add("gallery-card-btn");

  title.innerText = item.title;
  button.innerText = item.text;
  div.style.backgroundImage = `url(${item.src})`;
  div.classList.add("bg-img-style");

  div.appendChild(title);
  div.appendChild(button);
  gallery.appendChild(div);
});
