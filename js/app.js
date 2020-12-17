// Tu código aquí
let button = document.querySelector('#submitBtn')

button.onclick = getValue

const form = document.querySelector('#message-form')

form.addEventListener('submit', function(e){
    console.log("Información sobre el objeto event: ", e)
    e.preventDefault() // Curioso sobre lo que hace esto? Mira como se comporta el formulario cuando haces clic en "Enviar" si esta línea está comentada. 

    console.log("Hemos hecho clic en el botón de submit!")

})

function getValue(){
    var message = document.querySelector("#message").value;

    if (message === "") {
        message = "Enter a value";
        document.querySelector(".feedback").style.display = "block";
        document.querySelector(".feedback").innerHTML = message;
        document.querySelector(".feedback").style.transitionDuration = "5s";
        window.setTimeout(function () {
            document.querySelector(".feedback").style.display = "none";
        }, 2000)
    }else{ 
        document.querySelector(".message-content").innerHTML = message;
    }
}