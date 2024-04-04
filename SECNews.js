document.addEventListener("DOMContentLoaded", function() {
    const secNewsContainer = document.getElementById("sec-news-content");

    // Example data (replace with your actual SEC news data)
    const secNewsData = [
        { title: "SEC announces new regulations", date: "March 20, 2024", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { title: "SEC investigates financial fraud", date: "March 18, 2024", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        // Add more news articles as needed
    ];

    // Function to render SEC news articles
    function renderSecNews() {
        secNewsContainer.innerHTML = ""; // Clear previous content

        secNewsData.forEach(article => {
            const newsItem = document.createElement("div");
            newsItem.classList.add("sec-news-item");
            newsItem.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.date}</p>
                <p>${article.content}</p>
            `;
            secNewsContainer.appendChild(newsItem);
        });
    }

    // Render SEC news on page load
    renderSecNews();
});
