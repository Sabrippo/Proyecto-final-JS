document.addEventListener('DOMContentLoaded', function() {
const gatitos = [
    {
        nombre: 'Pippo',
        descripcion: 'Súper cariñoso y tranquilo',
        raza: 'Persa',
        edad: '2 años',
        vacunas: 'Trivalente',
        castrado: 'Si',
        imagen: 'https://.jpg',
        src: 'gatito1.html',
    },
    {
        nombre: 'Dobby',
        descripcion: 'Se lleva bien con otros gatos',
        raza: 'Siberiano',
        edad: '6 años',
        vacunas: 'Trivalente, leucemia',
        castrado: 'Si',
        imagen: 'https://.jpg',
        src: 'gatito2.html',
    },    
];

//ARMO LISTA DE GATITOS//
const listaDeGatitos = document.querySelector("#listaDeGatitos");
const listadoGatitos = (gatitos) => {
    
    gatitos.forEach((gatito) => {
      
      const li = document.createElement("li");
      li.innerHTML = `<span>${gatito.nombre}. ${gatito.descripcion}</span>`; 
      
      const botonVer = document.createElement("button");
        botonVer.innerHTML = "Ver gatito"; 
        botonVer.onclick = function() {
           
            window.location.href = gatito.src;
        };        
        listaDeGatitos.appendChild(li);
        li.appendChild(botonVer);
    });
};
listadoGatitos(gatitos);



 //CREO CARD DE GATITOS//
const infoGatito = document.querySelector("#infoGatito");
const nombreGatito = window.location.pathname.split('/').pop().split('.')[0];
const gatito = gatitos.find(g => g.src === `${nombreGatito}.html`);

if(gatito) {
  
  const card = document.createElement("card");
  const nombre = document.createElement("H1");
  const raza = document.createElement("p");
  const edad = document.createElement("p");
  const vacunas = document.createElement("p");
  const castrado = document.createElement("p");
  const imagen = document.createElement("img");
  const src = document.createElement("src");  
  
 nombre.textContent = gatito.nombre;
 raza.textContent = gatito.raza;
 edad.textContent = gatito.edad;
 vacunas.textContent = gatito.vacunas;
 castrado.textContent = gatito.castrado;
 imagen.src = gatito.imagen;
 
 
 card.appendChild(nombre);
 card.appendChild(raza);
 card.appendChild(edad);
 card.appendChild(vacunas);
 card.appendChild(castrado);
 card.appendChild(imagen);
  
 infoGatito.appendChild(card);
}else {
    console.error(`No se encontró información para el gatito ${nombreGatito}`);
}
});

