
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
        <h2 class="card-title1">Me llamo ${gatitoElegido.nombre}</h2>
        <p class="card-text"> ${gatitoElegido.descripcion}</p>
        <p class="card-text">Tengo ${gatitoElegido.edad}</p>
        <p class="card-text">Soy un gatito ${gatitoElegido.raza}</p>
        <p class="card-text">Tengo vacunas ${gatitoElegido.vacunas}</p>
        <p class="card-text">${gatitoElegido.castrado}</p>
        </div>
        `;
        contenedor.appendChild(muestroGatito);          
    }
    
    document.getElementById("pregunta").onclick = function() {
        alert("Por favor, envianos un email a deBigotes@gmail.com");
    
        
    }

});