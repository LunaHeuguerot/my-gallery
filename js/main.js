const url = "https://source.unsplash.com/random/";
const container = document.querySelector('.container');
const filas = 3;

const btn = document.querySelector('.change-mode');
const btn2 = document.querySelector('.refresh');

for(let i = 0; i<filas*3; i+=1){
    const img = document.createElement('img'); // = new Image()

    img.setAttribute('src', `${url}${getSize()}`);
    container.appendChild(img);
}

function getSize(){
    return `${numeroAleatorio()}x${numeroAleatorio()}`
}

function numeroAleatorio() {
    return Math.floor(Math.random()*10) + 300;
}

btn.addEventListener('click', ()=> {
    // document.body.classList.toggle('dark-mode');
    document.documentElement.classList.toggle('dark-mode');
})

btn2.addEventListener('click', ()=>{
    location.href="../index.html"
})

// document.querySelector('p').className = "pepe ";
// document.querySelector('p').className += "juan";
// document.querySelector('p').classList.add('pedro');
// document.querySelector('p').classList.remove('pepe');
// document.querySelector('p').classList.toggle('pepe'); //si está la clase lo pone sino la saca

