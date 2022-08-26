import { Giphy } from "./giphy.js";
import { baseUrl } from "./config.js";
import { key } from "./config.js";

//trending sort
fetch(`${baseUrl}trending?${key}`)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    let giphyPage = new Giphy(res);
    function setC() {
      giphyPage.render();
    }
    document.getElementById("trend").addEventListener("click", setC);
  });

//buttons sort

let elem = document.getElementsByClassName("btn-add");
for (let i = 0; i < elem.length; i++) {
  let arr = elem[i];
  arr.addEventListener("click", () => {
    for (let j = 0; j < elem.length; j++) {
      elem[j].classList.remove("active");
    }
    arr.classList.add("active");
    fetch(`${baseUrl}search?q=${document.activeElement.value}&${key}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let giphyPage = new Giphy(res);
        giphyPage.render();
      });
  });
}
//search sort
let val = document.getElementById("user-search").value;
function getVal() {
  val = document.getElementById("user-search").value;

  fetch(`${baseUrl}search?q=${val}&${key}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      let giphyPage = new Giphy(res);
      giphyPage.render();
    });
}

document.getElementById("submit").addEventListener("click", getVal);
