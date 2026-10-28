function calcularIMC(peso,altura){
    const imc=peso/(altura*altura);
    return imc;
}

//implementación de la función calcularIMC v2
function calcularIMCV2(peso,altura){
    
    if(peso===undefined || altura===undefined)
        {
            console.log("Error es obligatorio el peso y la altura");
            return;
        }

    if(typeof peso!=='number' || typeof altura!=='number' )
        {
            console.log("Error los valores para peso y altura deben ser numéricos");
            return;
        }
    const imc=peso/(altura*altura);
        
    
    return imc;
}

//implementación del procedimiento calcularIMC v3
function calcularIMCV3(peso,altura){
    
    if(peso===undefined || altura===undefined)
        {
            console.log("Error es obligatorio el peso y la altura");
            return;
        }

    if(typeof peso!=='number' || typeof altura!=='number' )
        {
            console.log("Error los valores para peso y altura deben ser numéricos");
            return;
        }
    const imc=peso/(altura*altura);
    console.log(`El IMC V3 es : ${imc.toFixed(2)}`)

    clasificadorIMC(imc);
}

function clasificadorIMC(imc)
{
    var clasificacion="";
    switch(true)
    {
        case imc<18.5:
           clasificacion="Bajo peso" ;
           break;

        case imc>=18.5 && imc<=24.9 :
           clasificacion="Peso ideal o normal" ;
           break;
        
        case imc>=25 && imc<=29.9 :
           clasificacion="Sobrepeso" ;
           break;

        case imc>=30:
           clasificacion="Obesidad" ;
           break;
    }
    console.log(clasificacion);
}
//exportar funcionalidades del archivo calcularIMC.js (modalidad antigua)
//module.exports.calcularIMC=calcularIMC; 
//module.exports.calcularIMCV2=calcularIMCV2
//module.exports.calcularIMCV3=calcularIMCV3
//module.exports.clasificador=clasificadorIMC

//Una nueva forma de exportar
//funcionalidades
module.exports=
{
    calcularIMC_1_0:calcularIMC,
    calcularIMC_2_0:calcularIMCV2,
    calcularIMC_3_0:calcularIMCV3
}
