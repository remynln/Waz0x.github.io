function showRepo() {
    var elem = document.getElementById("repo")
    var res = "<table>"
    var array = []
    var len = 0
    fetch('https://api.github.com/users/Waz0x/repos')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; data[i]; i++) {
            array.push(data[i].name + (data[i].fork ? "<br> (forked)" : ""))
            len++
        }
        size = Math.trunc(Math.sqrt(len))
        for (var elements in array) {
            res = res + `
            ${elements%size === 0 ? "<tr>" : ""}
            <td>
                <a href="${data[elements].html_url}">${data[elements].name + (data[elements].fork ? "<br> (forked)" : "")}</a>
            </td>
            ${elements%size === size - 1 ? "</tr>" : ""}
            `
        }
        res = res + "</table>"
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