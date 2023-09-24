
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
        muestroGatito.classList.add("card", "d-flex", "flex-row","align-items-start");
        muestroGatito.innerHTML = `
        <img src="${gatitoElegido.imagen}" class="card-img" style="width: 50%;">
        <div class="card-body"> 
        <h2 class="card-title">Me llamo ${gatitoElegido.nombre}</h2>
        <p class="card-text">Tengo ${gatitoElegido.edad}</p>
        <p class="card-text">Soy un gatito ${gatitoElegido.raza}</p>
        <p class="card-text">Tengo vacunas ${gatitoElegido.vacunas}</p>
        <p class="card-text">Estoy castrado? ${gatitoElegido.castrado}</p>
        </div>
        `;
        contenedor.appendChild(muestroGatito);
        
    }
    

});