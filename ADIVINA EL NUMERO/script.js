//ADIVINANZAS DE ///////////////////////////////////////////////////adivinanzad
class adiviniar{
    constructor(adv1,adv2){
        this.ad1=adv1;
        this.ad2=adv2;

    }
comparar(){
    if(this.ad1==this.ad2){

        return `los valores ${this.ad1} y ${this.ad2} son iguales felicidades!`
    }else{
        return `los valores ${this.ad1} y ${this.ad2} no son iguales lo siento`
    }
}

}
let numerousuario=null;

function alea(){

const adivino= document.getElementById("Adivino")
let numeroalea= Math.floor(Math.random()*10+1);
//console.log(numeroalea)
if(numeroalea!==null && numerousuario !== null){
const crearo= new adiviniar(numeroalea,numerousuario)
const elcomparar= crearo.comparar();
adivino.innerText=elcomparar;
numerousuario=null;

}
}

const elnoderli= document.querySelectorAll(".adi")
const adiarray= Array.from(elnoderli);
adiarray.forEach(cada=>{
    cada.addEventListener('click',()=>{
        cada.style.color="blue";
        setTimeout(()=>{
            cada.style.color="aliceblue";},500 //3 segundos
        );
        const numeroad= parseInt(cada.textContent);
        if(numerousuario===null){
            numerousuario=numeroad;
        }else{alert("Ya ingresaste un número")}
        alea();
    })
})
////////////////////////adivinanzas
