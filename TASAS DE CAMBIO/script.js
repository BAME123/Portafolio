function convierta(){
    const URlTODA= 'https://v6.exchangerate-api.com/v6/d514e99fdcdc46743c6421da/latest/COP'// para acceder a toda las tasas
    const URLpares= 'https://v6.exchangerate-api.com/v6/d514e99fdcdc46743c6421da/pair/COP/USD/5000'
    // coge 5.000 pesos y los convierte en dolares
    
    
    fetch(URlTODA)// aca empieza
    .then(Response=>Response.json())
    .then(data=>{
        const resul= document.getElementById('resultados')
        const numero= document.getElementById('numero')
        let valornumero=numero.value;
        let selecci= document.getElementById('seleccion')
        let pasarseleatex=selecci.value;
        let tasa= data.conversion_rates[pasarseleatex];
        let result= valornumero*tasa
        resul.innerText=`su conversion DE ${valornumero} COP A ${pasarseleatex} es de ${result}`
        numero.value="";
        console.log(result);
    
        //console.log(data.conversion_rates);
        //const resultado=15000*tasa;
        //console.log(resultado);
    
    })
    .catch(error=>{
        console.log('Error en la api:',error);
    
    });  // aca acaba
    
    
    fetch(URLpares)
    .then(response=>response.json())
    .then(data=>{
    
        console.log("RESULTADO" , data);
    
    })
    .catch(error=>{
    
        console.log("no error:", error);
    })
    
    }