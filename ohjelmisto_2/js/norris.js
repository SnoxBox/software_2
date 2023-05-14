const randomBtn = document.getElementById("random-btn");
      const randomJoke = document.getElementById("random-joke");
      const searchForm = document.getElementById("search-form");
      const searchResults = document.getElementById("search-results");

      randomBtn.addEventListener("click", () => {
        fetch("https://api.chucknorris.io/jokes/random")
          .then((response) => response.json())
          .then((data) => {
            randomJoke.innerText = data.value;
          });
      });

      searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const searchTerm = document.getElementById("search-term").value;
        fetch(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`)
          .then((response) => response.json())
          .then((data) => {
            searchResults.innerHTML = "";
            data.result.forEach((joke) => {
              const article = document.createElement("article");
              const p = document.createElement("p");
              p.innerText = joke.value;
              article.appendChild(p);
              searchResults.appendChild(article);
            });
          });
      });