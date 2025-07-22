import { pikomonCard } from "./pikomon.js";
import { database } from "./database.js";
import { focusedCard } from "./focusedCard.js";

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const bigBox = document.querySelector("#parent")

let html = ""

window.addEventListener("beforeunload", () => {
    sessionStorage.setItem("scrollY", window.scrollY)
})

window.addEventListener("load", () => {
    const savedScroll = sessionStorage.getItem("scrollY");
    if (savedScroll !== null) {
        window.scrollTo(0, parseInt(savedScroll))
    }
})

if (!id) {
    html += `<div id="container">`
    for ( let pikomon of database) {
        html += pikomonCard(pikomon)
    }
    html += `</div>`
} else {
    html += `<div id="focused">`
    const focused = database.find(mon => mon.id === id)
    html += focusedCard(focused)
    html += `</div>`
    html += `<div id="container" class="unfocused">`
    for (let pikomon of database) {
        //if (id !== pikomon.id) {
            html += pikomonCard(pikomon)
        //}
    }
    html += "</div>"
    
}

bigBox.innerHTML = html

