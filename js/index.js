function showRepo() {
    let elem = document.getElementById("repo")
    let res = "<div class=\"github-cards\"> <table>"
    let array = []
    let len = 0
    fetch('https://api.github.com/users/Waz0x/repos')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; data[i]; i++) {
            array.push(data[i].name + (data[i].fork ? "<br> (forked)" : ""))
            len++
        }
        size = Math.trunc(Math.sqrt(len))
        for (let elements in array) {
            res = res + `${elements%size === 0 ? "<tr>" : ""}<td>
            <div class="card">
            <a href="${data[elements].html_url}" class="github-card" data-github="${data[elements].full_name}">
            <h3>${data[elements].name}</h3>
            <p id="truncated">${data[elements].description === null ? "Description not found :,(" : data[elements].description}</p>
            <span class="github-card__meta">
            <span class="github-card__language-icon" style="color: #B07219;">●</span> ${data[elements].language === null ? "Language not found :,(" : data[elements].language}
            </span>
            <span class="github-card__meta">
            <i class="fa fa-star" aria-hidden="true"></i>
            <span data-stars>
            ${data[elements].stargazers_count}
            </span>
            </span>
            <span class="github-card__meta">
            <i class="fa fa-code-fork" aria-hidden="true"></i>
            <span data-forks>
            ${data[elements].forks}
            </span>
            </span>
            </a>
            </div>
            </td>
            ${elements%size === size - 1 ? "</tr>" : ""}`
        }
        res = res + "</table></div>"
        elem.outerHTML = res
    })
    .catch(error => console.error(error))
}

window.onload = function() {
    showRepo();
};

jQuery.htmlPrefilter = function( html ) {
	return html;
};