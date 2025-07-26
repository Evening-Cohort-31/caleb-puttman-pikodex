import { pikomonCard } from "./pikomon.js";
import { database } from "./database.js";
import { focusedCard } from "./focusedCard.js";

// Retrieves the id of the selected pikomon
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const bigBox = document.querySelector("#parent")

let html = ""

// Saves the y scroll position to sessionStorage to keep user's scroll location after
// loading focused cards
window.addEventListener("beforeunload", () => {
    sessionStorage.setItem("scrollY", window.scrollY)
})

window.addEventListener("load", () => {
    const savedScroll = sessionStorage.getItem("scrollY");
    if (savedScroll !== null) {
        window.scrollTo(0, parseInt(savedScroll))
    }
})

// Dynamically loads either all cards, or a focused card in foreground based on whether
// id query is located in params 
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

