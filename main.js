import { Giphy } from "./giphy.js";
import { baseUrl } from "./config.js";
import { key } from "./config.js";
import { Topic } from "./topic.js";

//topics array create and render function

let topics = ["Internet Cats", "Meme's", "Typing", "Space", "Rick and Morty"];
let topicPage = new Topic(topics);
topicPage.render();

function setTopics() {
	topicPage.render();
}

//trending sort
let trendbtn = document.getElementById("trend");
fetch(`${baseUrl}trending?${key}`)
	.then((res) => {
		return res.json();
	})
	.then((res) => {
		let giphyPage = new Giphy(res);

		function setTrend() {
			giphyPage.render();
		}
		trendbtn.addEventListener("click", setTrend);
	});

//search results

let val = document.getElementById("gif-search").value;

function getVal() {
	val = document.getElementById("gif-search").value;

	fetch(`${baseUrl}search?q=${val}&${key}`)
		.then((res) => {
			return res.json();
		})
		.then((res) => {
			let giphyPage = new Giphy(res);
			giphyPage.render();
		});
}

//variable for submit button

let submitbtn = document.getElementById("submit");
submitbtn.addEventListener("click", getVal);
submitbtn.addEventListener("click", arrAdd);
submitbtn.addEventListener("click", setTopics);

submitbtn.addEventListener("click", () => {
	submitbtn.classList.add("active");
	trendbtn.classList.remove("active");
});

trendbtn.addEventListener("click", () => {
	trendbtn.classList.add("active");
	submitbtn.classList.remove("active");
});

//buttons sort topics, add active

function sortResult() {
	let elem = document.getElementsByClassName("btn-add");
	for (let i = 0; i < elem.length; i++) {
		let arr = elem[i];
		arr.addEventListener("click", () => {
			for (let j = 0; j < elem.length; j++) {
				elem[j].classList.remove("active");
				trendbtn.classList.remove("active");
				submitbtn.classList.remove("active");
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
}
sortResult();
submitbtn.addEventListener("click", sortResult);

//array push and shift function

function arrAdd() {
	if (topics.length <= 5 && val !== "") {
		topics.push(`${val}`);
	} else if (topics.length > 5 && val !== "") {
		topics.push(`${val}`);
		topics.shift();
	}
}