import { Base } from "./base.js";
export class Giphy extends Base {
  constructor(res) {
    super();
     this.res = res;
  }

//get products
getGiphy() {
    //console.log(obj.url)
let list = this.res.data.map((obj) => {console.log("kkk",obj)
console.log('button', document.getElementsByClassName("btn-add").value)

return `<img class="img" src=${obj.images.fixed_height.url}>`

});


return list.join("");
return list;


}

render() {
    this.setContent('items', this.getGiphy());
    console.log(document.getElementById('items'))
    
}}