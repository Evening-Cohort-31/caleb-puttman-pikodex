export const pikomonCard = (pikomon) => {
    let html = `
    <div class="piko-card">
        <div class="piko-img">
            <img src=${pikomon.imageUrl} alt="An image of the pikomon: ${pikomon.name}">
        </div>
        <div>
            <section class="piko-name">
                <h3>${pikomon.name}</h3>
            </section>
            <article class="piko-info info-text">
                <p>Pikodex Entry #${pikomon.id}</p>
                <p class="piko-category">Category: ${pikomon.category}</p>
                <p class="piko-abilities">Abilities: ${pikomon.abilities}p>
                <p class="piko-weakness">Weakness: ${pikomon.weakness}</p>
            </article>
            
        </div>
    </div>`

    return html
}




