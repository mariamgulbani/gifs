import { Giphy } from "./giphy.js";
// import { Products } from "./products.js";
// import { baseUrl } from "./config.js";



fetch(`https://api.giphy.com/v1/gifs/trending?limit=10&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json`)
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
