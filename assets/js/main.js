
const navBar = document.getElementById("navBar")
const btnMenu = document.getElementById("btnMenu")
const heroMenu = document.getElementById("heroMenu")
const sections = document.querySelectorAll("section[id]")
const form = document.getElementById("form")


/*Formulario*/
form.addEventListener("submit", function(e){
    e.preventDefault()
    alert("enviando...")
    const email = "ximenabar96@gmail.com"
    const URL_BASE = "http://formsubmit.co/ajax/${email}"
    const input = e.currentTarget.elements

    const dataForm = {
        name: input.name.value,
        email: input.email.value,
        message: input.message.value
    }

    window.fetch(URL_BASE,{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(dataForm){
        })
        
        alert("tu mensaje se envió correctamente")
    e.currentTarget.reset()
})

/*  .then(function (response){
            return response.json()
        })
        .then(function(data){
            console.log(data)
        })
        .catch(function(err){
            console.log(err)
        })

    console.log(dataForm)
    e.currentTarget.reset()
})*/