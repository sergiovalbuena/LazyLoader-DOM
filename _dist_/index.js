/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

const maximum = 122;
const minimum = 1;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum


//crear imagen
const createImageNode = () => {

    //crear el .div que engloba la imagen 
    const container = document.createElement('div');
    container.className= "";

    const imagen = document.createElement('img')
    imagen.className = 'mx-auto';
    imagen.width = '320'
    imagen.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(imagen);

    return container;
};

const nuevaImagen = createImageNode();
const mountNode = document.getElementById('images')


const addButton = document.querySelector('button');
//const accion = () => console.log ('hey');
const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
}

addButton.addEventListener("click", addImage);

//mountNode.appendChild(nuevaImagen);
/*
mountNode.append(
    nuevaImagen
);
*/