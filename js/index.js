function showRepo() {
    var elem = document.getElementById("repo")
    var res = ""
    var array = []
    fetch('https://api.github.com/users/Waz0x/repos')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; data[i]; i++) {
            array.push(data[i].name)
        }
        console.log(array)
        for (var elements in array) {
            res = res + "<br>" + `<a href="${data[elements].html_url}">` + array[elements] + "</a>" + "<br>"
        }
        elem.outerHTML = res
    })
    .catch(error => console.error(error))
}

window.onload = function() {
    showRepo();
};