
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
        muestroGatito.innerHTML = `
        <h2>Nombre: ${gatitoElegido.nombre}</h2>
        <p>Edad: ${gatitoElegido.edad}</p>
        <p>Raza: ${gatitoElegido.raza}</p>
        <p>Vacunas: ${gatitoElegido.vacunas}</p>
        <p>Castrado: ${gatitoElegido.castrado}</p>
        <img src="${gatitoElegido.imagen}"style="width: 50%"/>`;
        
        contenedor.appendChild(muestroGatito);
        
    }
    

});