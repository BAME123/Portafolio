class calcu{/// CALCULADORAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    constructor(numer1,nume2){
     this.num1=numer1;
     this.num2=nume2;
 }
 suma(){
    let res=this.num1+this.num2
     return res;
 }
 resta(){
     let res=this.num1-this.num2
      return res;
  }
  multi(){
     let res=this.num1*this.num2
      return res;
  }
}
function boton(){

let numerouno=null;
let numerodos=null;
let operador= null; 
const unos= document.querySelectorAll(".numero")
//console.log("hola soy yo"  , unos);
const conver= Array.from(unos);
//console.log("hola amiguis " , conver);
const opiracion=document.querySelectorAll(".ope")
const oper_array= Array.from(opiracion);
//console.log(oper_array);
const resultado = document.getElementById("res")

function clasesumar(){
 if(numerouno!==null && numerodos!== null && operador !== null){
 const obje= new calcu(parseInt(numerouno),parseInt(numerodos))

switch(operador){

     case '+':
     const sumarg= obje.suma();
     resultado.innerText= "El resultado de la suma es " + sumarg; break;

     case '-':
     const restag= obje.resta();
     resultado.innerText= "El resultado de la resta es " +restag; break;

     case '*':
     const multo= obje.multi();
     resultado.innerText= "El resultado de la multiplicación es " +multo; break;

 default:
 alert("Ingrese un operador")

}numerouno=null; numerodos=null; operador=null;
}
 }

oper_array.forEach(ele=>{

 ele.addEventListener('click',()=>{
     const oper_text= ele.textContent;
     if(operador===null){
         operador=oper_text;

     }else{console.log("Ya ingresatse")}

 })
})

 conver.forEach(element => {
 element.addEventListener('click',()=>{

     const sacado= element.textContent
     if(numerouno ===null){

         numerouno=sacado;
     }
     else{
         numerodos=sacado;

     }

     clasesumar();
     //console.log("numero es:", numerouno ,numerodos);

 });
});

}
boton();/// CALCULADORAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA