const sumar = (num1,num2)=>{
	return parseInt(num1) + parseInt(num2);
}
const restar = (num1,num2)=>{
	return parseInt(num1) - parseInt(num2);
}
const dividir = (num1,num2)=>{
	return parseInt(num1) / parseInt(num2);
}
const multiplicar = (num1,num2)=>{
	return parseInt(num1) * parseInt(num2);
}
const potencia = (num1,exp)=>{
    return parseInt(num1)**(exp);
}
const raizCuadrada = (num1)=>{
    return Math.sqrt(num1);
}
const raizCubica = (num1)=>{
    return Math.cbrt(num1);
}


alert("¿Que operación deseas realizar?");
let operacion = prompt("1: suma,  2: resta,  3: división,  4: multiplicación, 5: potencia, 6: raíz cuadrada, 7: raíz cubica");

if (operacion == 1) {
	let numero1 = prompt("primer número para sumar");
	let numero2 = prompt("segundo número para sumar");
	resultado = sumar(numero1,numero2);
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 2) {
	let numero1 = prompt("primer número para restar");
	let numero2 = prompt("segundo número para restar");
	resultado = restar(numero1,numero2)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 3) {
	let numero1 = prompt("primer número para dividir");
	let numero2 = prompt("segundo número para dividir");
	resultado = dividir(numero1,numero2)
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 4) {
	let numero1 = prompt("primer número para multiplicar");
	let numero2 = prompt("segundo número para multiplicar");
	resultado = multiplicar(numero1,numero2)
	alert(`tu resultado es ${resultado}`);
}
else if(operacion == 5){
	let numero1 = prompt("primer número para multiplicar");
	let numero2 = prompt("segundo número para multiplicar");
    resultado = potencia(numero1,numero2)
    alert(`tu resultado es ${resultado}`);
}
else if(operacion == 6){
    let numero1 = prompt("ingrese el numero para calcular su raiz cuadrada");
    resultado = raizCuadrada(numero1)
    alert(`tu resultado es ${resultado}`);
}
else if(operacion == 7){
    let numero1 = prompt("ingrese el numero para cancular su raiz cubica")
    resultado = raizCubica(numero1)
    alert(`tu resultado es ${resultado}`);
}
else{
	alert("no se ha encontrado la operación");
}
