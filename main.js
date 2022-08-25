import { Giphy } from "./giphy.js";
// import { Products } from "./products.js";
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

 //search sort

// fetch(`${baseUrl}trending?${key}`)
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//      console.log("res", res);
    

//     let giphyPage = new Giphy(res);
//     function setC() {
//       giphyPage.render();
//     }
//     document.getElementById("submit").addEventListener("click", setC);
    
//   });

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
    fetch(`https://api.giphy.com/v1/gifs/search?q=${document.activeElement.value}&limit=10&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json`)
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
  // arr.addEventListener('click',setC)


}


//   fetch(`https://api.giphy.com/v1/gifs/search?q=${document.activeElement.value}&limit=10&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json`)
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {

//     let giphyPage = new Giphy(res);
//     function setC() {
//       giphyPage.render();
// //     }
//     //  document.getElementsByClassName("btn-add").addEventListener("click", setC);
//     // document.getElementById("buttons").classList.add("active");
// //add active on click
// //     let elem = document.getElementsByClassName("btn-add");
// // for (let i = 0; i < elem.length; i++){
// //   console.log(elem[i])
// //   let arr = elem[i];
// //   arr.addEventListener('click', ()=> {
// //     for (let j = 0; j < elem.length; j++){
// //       elem[j].classList.remove('active');
// //     }
// //     arr.classList.add('active');
// //     console.log("act",document.activeElement.value)
// //   })
//  elem[i].addEventListener('click',setC)
 
// // }





//   }
//   );



