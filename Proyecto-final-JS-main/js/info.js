
document.addEventListener ("DOMContentLoaded", () => {
    const contenedor = document.querySelector("#contenedor");  
    
    const urlParams = new URLSearchParams(window.location.search);
    const idGatito = urlParams.get("id");
    
    const cadaGatito = JSON.parse(localStorage.getItem("gatitos"));
     
    const gatitoElegido = cadaGatito.gatitos.find(
        (gatito) => gatito.id  == idGatito
        );      
                
   
    if (gatitoElegido) {

        const muestroGatito = document.createElement ("div");
        muestroGatito.classList.add ("esteGatito");
        muestroGatito.classList.add("card", "d-flex", "flex-column","mx-auto", "text-center", "border-0");
        muestroGatito.innerHTML = `
        <img src="${gatitoElegido.imagen}" class="card-img" style="width: 40%;">
        <div class="card-body text-center mx-auto"> 
        <h2 class="card-title">Me llamo ${gatitoElegido.nombre}</h2>
        <p class="card-text">Tengo ${gatitoElegido.edad}</p>
        <p class="card-text">Soy un gatito ${gatitoElegido.raza}</p>
        <p class="card-text">Tengo vacunas ${gatitoElegido.vacunas}</p>
        <p class="card-text">Estoy castrado? ${gatitoElegido.castrado}</p>
        </div>
        `;
        contenedor.appendChild(muestroGatito);          
    }
    document.getElementById("pregunta").onclick = function() {
        var email = prompt("Por favor, dejanos tu email");
    
        if (email !== null && email.includes("@") && email.includes(".com")) {
            localStorage.setItem("email", email);
            alert("Muchas gracias!! Nos contactaremos a la brevedad.");
        } else if (email !== null) {
            alert("El correo electrónico ingresado no es válido.");
        }
    }

});