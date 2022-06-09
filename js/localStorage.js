/* Local Storage */

function addAplication() {
    let value = document.getElementById("value").value
    let key = document.getElementById("key").value
    localStorage.setItem(key, value)
}


function showAplication() {
    let output = document.getElementById("colourOutput")
    let key, text = ''

    for (let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i)){
            key = localStorage.key(i)
            text += `<p style="background-color:#${localStorage.key(i)};">${localStorage.getItem(key)}, kod koloru: ${localStorage.key(i)}</p>`
        }
    }
    output.innerHTML = text
}