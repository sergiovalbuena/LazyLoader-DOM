//TODO LO REALCIONADO AL 
//INTERSECTION OBSERVER 

const isIntersecting = (entry) => {
    return entry.isIntersecting;
};

const loadImage = (entry) => {
    const container = entry.target; 
    const imagen = container.firstChild;
    const url =  imagen.dataset.src 

    //Load img
    imagen.src = url;


    console.log("holis");
    //dejar de registrar la img para que solo cuente una unica vez
    observer.unobserve(container)
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage);
});

export const registerImage = (imagen) => {
    observer.observe(imagen);
};