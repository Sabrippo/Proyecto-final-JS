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
            divGatito.innerHTML = `
                <h2>Nombre: ${gatito.nombre}</h2>`;

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