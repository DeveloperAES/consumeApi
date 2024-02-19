const listaPersonajes = document.querySelector('#listaPersonajes');
const URL = "https://rickandmortyapi.com/api/character";

fetch(URL)
  .then(response => response.json())
  .then(data => mostrarPersonajes((data.results)))
  .catch(error => console.error('Ha ocurrido un error:', error));


function mostrarPersonajes(data){
    data.forEach(personaje => {
        const div = document.createElement('div');
        div.classList.add('personaje');
        div.innerHTML= `
        <div class="personaje-img">
            <img src="${personaje.image}" alt="">
        </div>
        <div class="personaje-info">
            <div class="info-name">
                <h2>${personaje.name}</h2>
                <p>Alive - ${personaje.species}</p>
            </div>
            <div class="info-ubicacion">
                <p>Last known location:</p>
                 <a href="#">${personaje.location["name"]} </a>
            </div>
             <div class="info-aleas">
                <p>Gender:</p>
                <a href="#">${personaje.gender}</a>
            </div>
        </div> `
        listaPersonajes.append(div)
    });
    
}


