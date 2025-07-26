// Creates a focused html card
export const focusedCard = (pikomon) => {
        let html = `
    <a href="/" class="backdrop"></a>
    <div class="piko-card focused">
            <div>
                <img class="piko-img" src=${pikomon.imageUrl} alt="An image of the pikomon: ${pikomon.name}">
            </div>
            <div class="piko-info">
                <section class="piko-name">
                    <h3>${pikomon.name}</h3>
                </section>
                <article class="info-text">
                    <p>Pikodex Entry #${pikomon.id}</p>
                    <p class="piko-category">Category: ${pikomon.category}</p>
                    <p class="piko-abilities">Abilities: ${pikomon.abilities}<p>
                    <p class="piko-weakness">Weakness: ${pikomon.weakness}</p>
                </article>
                
            </div>
        </a>
    </div>`

    return html
}