// Creates html card
export const pikomonCard = (pikomon) => {
    let html = `
    <div class="piko-card">
        <a href="?id=${pikomon.id}" style="text-decoration: none; color: inherit;">
            <div>
                <img class="piko-img" src=${pikomon.imageUrl} alt="An image of the pikomon: ${pikomon.name}">
            </div>
            <div class="piko-info">
                <section class="piko-name">
                    <h3>${pikomon.name}</h3>
                </section>

                
            </div>
        </a>
    </div>`

    return html
}