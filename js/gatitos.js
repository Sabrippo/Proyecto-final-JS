const gatitos = [
    {
        nombre: 'Pippo',
        descripcion: 'Súper cariñoso y tranquilo',
        raza: 'De la M',
        edad: 'Rock',
        vacunas: '2017-10-27',
        castrado: 'Random',
        imagen: 'https://example.com/imagenes/charly_garcia.jpg',
        src: 'gatito1.html',
    },
    {
        nombre: 'Dobby',
        descripcion: 'Se lleva bien con otros gatos',
        raza: 'Solista',
        edad: 'Rock',
        vacunas: '2017-10-27',
        castrado: 'Random',
        imagen: 'https://example.com/imagenes/charly_garcia.jpg',
        src: 'gatito2.html',
    },
    {
        nombre: 'Frodo',
        descripcion: 'Muy juguetón, no se queda quieto',
        raza: 'Solista',
        edad: 'Rock',
        vacunas: '2017-10-27',
        castrado: 'Random',
        imagen: 'https://example.com/imagenes/charly_garcia.jpg'
    },
];
// const section = document.querySelector('#container');  
// function createList(gatito) {

//     const {nombre, raza, edad, vacunas, castrado, imagen} = gatito;

//     let card = document.createElement('div');
//     card.classList.add('card');

//     let nombreGatito = document.createElement('h2');
//     let nombreTexto = document.createTextNode(nombre);
//     nombreGatito.appendChild(nombreTexto);


//     let razaGatito = document.createElement('h2');
//     let razaTexto = document.createTextNode(raza);
//     razaGatito.appendChild(razaTexto);

//     let edadGatito = document.createElement('h2');
//     let edadTexto = document.createTextNode(edad);
//     edadGatito.appendChild(edadTexto);


//     let vacunasGatito = document.createElement('h2');
//     let vacunasTexto = document.createTextNode(vacunas);
//     vacunasGatito.appendChild(vacunasTexto);

//     let castradoGatito = document.createElement('h2');
//     let castradoTexto = document.createTextNode(castrado);
//     castradoGatito.appendChild(castradoTexto);

//     let imagenGatito = document.createElement('img');
//     imagenGatito.setAttribute('src', imagen);
//     imagenGatito.setAttribute('alt', nombre);

//     card.append(nombreGatito,razaGatito, edadGatito, vacunasGatito, castradoGatito, imagenGatito)
//     section.appendChild(card);
// }

// gatitos.forEach( (gatito) => {
//     createList(gatito);
// })

//ARMO LISTA DE GATITOS//
const listaDeGatitos = document.querySelector("#listaDeGatitos");
const listadoGatitos = (gatitos) => {
    
    gatitos.forEach((gatito) => {
      
      const li = document.createElement("li");
      li.innerHTML = `<span>${gatito.nombre}. ${gatito.descripcion}</span>`; 
      
      const botonEditar = document.createElement("button");
        botonEditar.innerHTML = "Ver gatito"; 
        botonEditar.onclick = function() {
            // Redirigir a gatito1.html
            window.location.href = `${gatito.src}`;
        };        
        listaDeGatitos.appendChild(li);
      li.appendChild(botonEditar);
    });
};
listadoGatitos(gatitos);


