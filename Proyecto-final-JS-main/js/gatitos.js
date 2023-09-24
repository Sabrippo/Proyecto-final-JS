fetch("datos.json")
.then((respuesta) => respuesta.json())
.then((datos)=> localStorage.setItem("gatitos", JSON.stringify(datos)));

document.addEventListener ("DOMContentLoaded", () => {
    const informacion = document.querySelector("#informacion");
    const infoGatitos = JSON.parse(localStorage.getItem("gatitos"));
    if (infoGatitos){
        infoGatitos.gatitos.forEach((gatito) => { 
            const divGatito = document.createElement("div");
            divGatito.classList.add ("div-item");
            divGatito.classList.add("card");
            divGatito.classList.add("mx-auto");
            divGatito.innerHTML = `                
            <img src="${gatito.imagen}" class="card-img-top" alt="${gatito.nombre}"> 
            <div class="card-body"> 
                <h5 class="card-title">${gatito.nombre}</h5>
            </div>
        `;

        divGatito.addEventListener('click', () => {
            verGatitoSeleccionado(gatito);
        });       
        informacion.appendChild(divGatito);              
        });        
}
});

function verGatitoSeleccionado(gatito){
    window.location.href = `infoGatitos.html?id=${gatito.id}`;
}