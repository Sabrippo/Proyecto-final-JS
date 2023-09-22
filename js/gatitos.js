// document.addEventListener('DOMContentLoaded', function() {
// const gatitos = [
//     {
//         nombre: 'PEPPER',
//         descripcion: 'Súper cariñoso y tranquilo.',
//         raza: 'Atigrado',
//         edad: '2 años',
//         vacunas: 'Trivalente',
//         castrado: 'Si',
//         imagen: '/img/Gato1.jpg',
//         src: 'infoGatitos.html',
//         id:'1',
//     },
//     {
//         nombre: 'LUCY',
//         descripcion: 'Se lleva bien con otros gatos.',
//         raza: 'Tabby',
//         edad: '6 años',
//         vacunas: 'Trivalente, leucemia',
//         castrado: 'Si',
//         imagen: '/img/Gato2.jpg',
//         src: 'infoGatitos.html',
//         id:'2',
//     },    
//     {
//         nombre: 'SIN NOMBRE',
//         descripcion: 'Son  hermanos, se adoptan juntos. Una hembra y un macho.',
//         raza: 'Tabby',
//         edad: '2 meses',
//         vacunas: 'Desparasitados.',
//         castrado: 'No.',
//         imagen: '/img/Gato3.jpg',
//         src: 'infoGatitos.html',
//         id:'3',
//     },    
//     {
//         nombre: 'ARTURO',
//         descripcion: 'No le gusta dormir solo, se lleva bien con otros gatos.',
//         raza: 'Europea mixta',
//         edad: '2 años',
//         vacunas: 'Desparasitado. Leucemia.',
//         castrado: 'No.',
//         imagen: '/img/Gato4.jpg',
//         src: 'infoGatitos.html',
//         id:'4',
//     },    
//     {
//         nombre: 'MIGUEL',
//         descripcion: 'Es miedoso, no le gusta el ruido.',
//         raza: 'Munchkin',
//         edad: '5 años',
//         vacunas: 'Desparasitado. Leucemia. Trivalente.',
//         castrado: 'Si.',
//         imagen: '/img/Gato5.jpg',
//         src: 'infoGatitos.html',
//         id:'5',
//     },  
//     {
//         nombre: 'PEQUE',
//         descripcion: 'Muy juguetón, le gusta la compañía.',
//         raza: 'Jengibre',
//         edad: '4 meses',
//         vacunas: 'Desparasitado.',
//         castrado: 'No.',
//         imagen: '/img/Gato6.jpg',
//         src: 'infoGatitos.html',
//         id:'6',
//     },      
//     {
//         nombre: 'MANCHITA',
//         descripcion: 'No se lleva bien con otros gatos, sí con los perros y los niños.',
//         raza: 'Bengala.',
//         edad: '3 años',
//         vacunas: 'Desparasitado. VIH.',
//         castrado: 'Sí.',
//         imagen: '/img/Gato7.jpg',
//         src: 'infoGatitos.html',
//         id:'7',
//     }, 
//     {
//         nombre: 'SIN NOMBRE',
//         descripcion: 'Es muy cariñoso y asustadizo.',
//         raza: 'Siberiano',
//         edad: '3 meses',
//         vacunas: 'Desparasitado.',
//         castrado: 'No.',
//         imagen: '/img/Gato8.jpg',
//         src: 'infoGatitos.html',
//         id:'8',
//     },       
//     {
//         nombre: 'ATILIO',
//         descripcion: 'Le encanta treparse por todos lados.',
//         raza: 'Atigrado.',
//         edad: '1 año.',
//         vacunas: 'Desparasitado.',
//         castrado: 'No.',
//         imagen: '/img/Gato9.jpg',
//         src: 'infoGatitos.html',
//         id:'9',
//     },  
//     {
//         nombre: 'BLANQUITA',
//         descripcion: 'Muy tranquilo y dormilón, te sigue a todos lados.',
//         raza: 'Persa silver.',
//         edad: '4 años.',
//         vacunas: 'Desparasitado. Trivalente, rabia, leucemia.',
//         castrado: 'Sí.',
//         imagen: '/img/Gato10.jpg',
//         src: 'infoGatitos.html',
//         id:'10',
//     },            
// ];

// //ARMO LISTA DE GATITOS//
// const listaDeGatitos = document.querySelector("#listaDeGatitos");
// const listadoGatitos = (gatitos) => {
    
//     gatitos.forEach((gatito) => {
      
//       const li = document.createElement("li");
//       li.innerHTML = `<span>${gatito.nombre}. ${gatito.descripcion}</span>`; 
      
//       const botonVer = document.createElement("button");
//         botonVer.innerHTML = "Ver gatito"; 
//         botonVer.onclick = function() {
           
//             window.location.href = gatito.src;
//         };        
//         listaDeGatitos.appendChild(li);
//         li.appendChild(botonVer);
//     });
// };
// listadoGatitos(gatitos);



//  //CREO CARD DE GATITOS// OK NO CAMBIAR!!!
//  let tarjeta = document.querySelector('.tarjeta');
//  gatitos.forEach((gatito)=> {
//  let tarjetaGatito = document.createElement('div');
//  tarjetaGatito.className = 'tarjeta';
//  tarjetaGatito.innerHTML = `
//   <h2>Nombre: ${gatito.nombre}</h2>
//   <p>Edad: ${gatito.edad}</p>
//   <p>Raza: ${gatito.raza}</p>
//   <p>Vacunas: ${gatito.vacunas}</p>
//   <p>Castrado: ${gatito.castrado}</p>
//   <img
//     src="${gatito.imagen}"
//     style="width: 50%"
//   />
//   </div>`;

  
  
//  nombre.textContent = gatito.nombre;
//  raza.textContent = gatito.raza;
//  edad.textContent = gatito.edad;
//  vacunas.textContent = gatito.vacunas;
//  castrado.textContent = gatito.castrado;
//  imagen.src = gatito.imagen;
 
 
//  card.appendChild(nombre);
//  card.appendChild(raza);
//  card.appendChild(edad);
//  card.appendChild(vacunas);
//  card.appendChild(castrado);
//  card.appendChild(imagen);
  
//  tarjeta.appendChild(tarjetaGatito);


// });
// });
fetch("datos.json")
.then((respuesta) => respuesta.json())
.then((datos)=>console.log(datos));