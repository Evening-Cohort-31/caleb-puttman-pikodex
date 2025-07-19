import { pikomonCard } from "./pikomon.js";
import { database } from "./database.js";

const container = document.querySelector('#container')

let html = ""


for ( let pikomon of database) {
    html += pikomonCard(pikomon)
}

container.innerHTML = html

