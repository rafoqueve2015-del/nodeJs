const modulo=require("./calcularIMC.js");

const pesoPrueba=80;
const alturaPrueba=1.76;

console.log("IMC Versión 1.0");
const instructor=modulo.calcularIMC_1_0(pesoPrueba,alturaPrueba);
console.log(`El IMC V1 es : ${instructor.toFixed(2)}`);

console.log("IMC Versión 2.0");
const instructor2= modulo.calcularIMC_2_0(80,1.76);
console.log(`El IMC V2 es : ${instructor2.toFixed(2)}`);

console.log("IMC Versión 3.0");
modulo.calcularIMC_3_0(pesoPrueba,alturaPrueba);


