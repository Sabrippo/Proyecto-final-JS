document.addEventListener('DOMContentLoaded', function() {
const gatitos = [
    {
        nombre: 'PEPPER',
        descripcion: 'Súper cariñoso y tranquilo.',
        raza: 'Atigrado',
        edad: '2 años',
        vacunas: 'Trivalente',
        castrado: 'Si',
        imagen: '/img/Gato1.jpg',
        src: 'gatito1.html',
    },
    {
        nombre: 'LUCY',
        descripcion: 'Se lleva bien con otros gatos.',
        raza: 'Tabby',
        edad: '6 años',
        vacunas: 'Trivalente, leucemia',
        castrado: 'Si',
        imagen: '/img/Gato2.jpg',
        src: 'gatito2.html',
    },    
    {
        nombre: 'SIN NOMBRE',
        descripcion: 'Son  hermanos, se adoptan juntos. Una hembra y un macho.',
        raza: 'Tabby',
        edad: '2 meses',
        vacunas: 'Desparasitados.',
        castrado: 'No.',
        imagen: '/img/Gato3.jpg',
        src: 'gatito3.html',
    },    
    {
        nombre: 'ARTURO',
        descripcion: 'No le gusta dormir solo, se lleva bien con otros gatos.',
        raza: 'Europea mixta',
        edad: '2 años',
        vacunas: 'Desparasitado. Leucemia.',
        castrado: 'No.',
        imagen: '/img/Gato4.jpg',
        src: 'gatito4.html',
    },    
    {
        nombre: 'MIGUEL',
        descripcion: 'Es miedoso, no le gusta el ruido.',
        raza: 'Munchkin',
        edad: '5 años',
        vacunas: 'Desparasitado. Leucemia. Trivalente.',
        castrado: 'Si.',
        imagen: '/img/Gato5.jpg',
        src: 'gatito5.html',
    },    
    {
        nombre: 'MANCHITA',
        descripcion: 'No se lleva bien con otros gatos, sí con los perros y los niños.',
        raza: 'Bengala.',
        edad: '3 años',
        vacunas: 'Desparasitado. VIH.',
        castrado: 'Sí.',
        imagen: '/img/Gato7.jpg',
        src: 'gatito7.html',
    }, 
    {
        nombre: 'SIN NOMBRE',
        descripcion: 'Es muy cariñoso y asustadizo.',
        raza: 'Siberiano',
        edad: '3 meses',
        vacunas: 'Desparasitado.',
        castrado: 'No.',
        imagen: '/img/Gato8.jpg',
        src: 'gatito8.html',
    },       
    {
        nombre: 'ATILIO',
        descripcion: 'Le encanta treparse por todos lados.',
        raza: 'Atigrado.',
        edad: '1 año.',
        vacunas: 'Desparasitado.',
        castrado: 'No.',
        imagen: '/img/Gato9.jpg',
        src: 'gatito9.html',
    },  
    {
        nombre: 'BLANQUITA',
        descripcion: 'Muy tranquilo y dormilón, te sigue a todos lados.',
        raza: 'Persa silver.',
        edad: '4 años.',
        vacunas: 'Desparasitado. Trivalente, rabia, leucemia.',
        castrado: 'Sí.',
        imagen: '/img/Gato10.jpg',
        src: 'gatito10.html',
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

