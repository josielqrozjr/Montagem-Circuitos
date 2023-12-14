// Carregar os cards com a informações do servidor

window.onload = async function() {
    const card = await fetch("php/database.php", {
        method: "GET"
    });

    const dados = await card.json();

    // Acessar os dados
    const docsPdf = dados.docs_pdf;
    const videoAulas = dados.video_aulas;

    for (let i = 0; i < docsPdf.length; i++) {
        let conteudo = `
            <div class="card">
                <div class="card-superior">
                    <div class="filter-glass"></div>
                    <i class="fa-brands fa-google-drive"></i>
                </div>
                <button>${docsPdf[i].titulo_rel}</button>
            </div>
        `;

        document.getElementById('cards').innerHTML += conteudo;
    }

    for (let i = 0; i < videoAulas.length; i++) {
        let videos = `
            <div class="card">
                <div class="card-video">
                    <iframe width="300" height="150" src="${videoAulas[i].link_video}" title="${videoAulas[i].titulo_video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <label>${videoAulas[i].titulo_video}</label>
            </div>
        `;

        document.getElementById('cards_videos').innerHTML += videos;
    }
}