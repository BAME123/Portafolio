const clavedelaAPI= '22sAL2iu9L2yRlrljCWj0rHgEBqVQPzgNhlynT0hbUCzMkThTsi3Z7Vq';
const ursl= "https://api.pexels.com/v1/search?query=nature&per_page=50";

fetch(ursl,{
    method:'GET',
    headers:{
        'Authorization': clavedelaAPI
    }

})
.then (response=>response.json())
.then(data=>{

    //console.log(data.photos)
    const fotos= data.photos;
    const carouselInner= document.getElementById('conten')
    fotos.forEach(element => {
        console.log(element.src);

        let crearDIV= document.createElement('div')
        crearDIV.classList.add('carousel-item')
        let creaIMG= document.createElement('img')
        creaIMG.src=element.src.large;

        crearDIV.appendChild(creaIMG)
        carouselInner.appendChild(crearDIV)

    });

})