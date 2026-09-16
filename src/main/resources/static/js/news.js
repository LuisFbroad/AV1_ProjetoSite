const newsList = document.getElementById("news_list");

const rssUrl = encodeURIComponent(
    "https://news.google.com/rss/search?q=Subnautica&hl=pt-BR&gl=BR&ceid=BR:pt-419"
);

const feedUrl = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`;

function escapeHtml(value) {
    const element = document.createElement("div");
    element.textContent = value || "";
    return element.innerHTML;
}

function formatDate(dateString) {
    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {
        return "Data não disponível";
    }

    return date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}

function removeHtml(value) {
    const element = document.createElement("div");
    element.innerHTML = value || "";
    return element.textContent || element.innerText || "";
}

function createNewsCard(news) {
    const title = escapeHtml(news.title);
    const description = escapeHtml(
        removeHtml(news.description).slice(0, 180)
    );
    const link = encodeURI(news.link);
    const date = formatDate(news.pubDate);

    return `
        <article class="news_items">
            <a
                class="news_thumb news_link"
                href="${link}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir notícia: ${title}">
                <span class="news_icon">◈</span>
            </a>

            <div class="news_content">
                <span class="news_date">${date}</span>

                <h3>
                    <a
                        class="news_title_link"
                        href="${link}"
                        target="_blank"
                        rel="noopener noreferrer">
                        ${title}
                    </a>
                </h3>

                <p>${description || "Leia a notícia completa na fonte original."}</p>

                <a
                    class="news_read_more"
                    href="${link}"
                    target="_blank"
                    rel="noopener noreferrer">
                    Ler notícia →
                </a>
            </div>
        </article>
    `;
}

function showNewsError() {
    newsList.innerHTML = `
        <article class="news_error">
            <h3>Não foi possível carregar as notícias</h3>
            <p>
                A fonte de notícias pode estar temporariamente indisponível.
                Use o botão acima para consultar as notícias diretamente.
            </p>
        </article>
    `;
}

async function loadNews() {
    try {
        const response = await fetch(feedUrl);

        if (!response.ok) {
            throw new Error("Falha ao consultar o feed");
        }

        const data = await response.json();

        if (!data.items || data.items.length === 0) {
            throw new Error("Nenhuma notícia encontrada");
        }

        newsList.innerHTML = data.items
            .slice(0, 5)
            .map(createNewsCard)
            .join("");
    } catch (error) {
        showNewsError();
    }
}

loadNews();