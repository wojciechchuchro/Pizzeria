/* Local Storage */

function addAplication() {
    let name = document.getElementById("input__first").value
    let last = document.getElementById("input__last").value
    let email = document.getElementById("input__email").value

    let values = `Name: ${name}, LastName: ${last}, Email: ${email},`

    let key = document.getElementById("key").value
    localStorage.setItem(key, values)
}


function showAplication() {
    let output = document.getElementById("content")
    let key, text = ''
    key = localStorage.key(0)

    text = `<p> ${localStorage.getItem(key)} PhoneNumber: ${localStorage.key(0)} </p>`
    console.log(text)
    output.innerHTML = text
}