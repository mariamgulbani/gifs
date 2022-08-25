import { Giphy } from "./giphy.js";
import { baseUrl } from "./config.js";
import{key} from"./config.js"



//trending sort
fetch(`${baseUrl}trending?${key}`)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
     console.log("res", res);
    

    let giphyPage = new Giphy(res);
    function setC() {
      giphyPage.render();
    }
    document.getElementById("trend").addEventListener("click", setC);
    
  });

 //buttons sort

let elem = document.getElementsByClassName("btn-add");
for (let i = 0; i < elem.length; i++){
  console.log(elem[i])
  let arr = elem[i];
  arr.addEventListener('click', ()=> {
    for (let j = 0; j < elem.length; j++){
      elem[j].classList.remove('active');
    }
    arr.classList.add('active');
    console.log("act",document.activeElement.value)
    fetch(`${baseUrl}search?q=${document.activeElement.value}&${key}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
  
      let giphyPage = new Giphy(res);
      function setC() {
        giphyPage.render();
      }
      elem[i].addEventListener('click',setC)
    }
    );
  })


}

let val;
    function getVal() {
       val = document.getElementById('user-search').value;
      console.log(val);
    
fetch(`${baseUrl}search?q=${val}&${key}`)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
     console.log("res", res);
    

    let giphyPage = new Giphy(res);
    function setC() {
      giphyPage.render();
    }
    console.log(val);

  
    document.getElementById("submit").addEventListener("click", setC);
    

    console.log("mmm",document.getElementById('user-search').value)
  });
}
document.getElementById("submit").addEventListener("click", getVal);





