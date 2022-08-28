import { Base } from "./base.js";
export class Giphy extends Base {
	constructor(res) {
		super();
		this.res = res;
	}

	//get gifs
	getGiphy() {
		let list = this.res.data.map((obj) => {
			return `<img class="img" src=${obj.images.fixed_height.url}>`;
		});

		return list.join("");
		return list;
	}

	render() {
		this.setContent("items", this.getGiphy());
	}
}