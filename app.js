
var cardNumber= prompt("Ingrese el numero de su tarjeta, sin espacios"); 

//funcion de validacion de tarjeta de credito 
function isValidCard(numberCard){
var totalSum=0; //variable para sumar todos los numeros del array en el paso final 
if (numberCard.length == 0 ){
	alert("Dato invalido")
}else{
	var newArray=numberCard.split("");  //tomar los numeros ingresados y formar un array donde cada digito sera un elemento 
	for (var i=0; i<newArray.length ; i++){
		var removed = newArray.pop(); // generamos un array con los valores en orden inverso
		newArray.splice(i,0,removed);
	} 
	for (var j=0 ; j<newArray.length ; j++){
		if (j%2 == 1){ //comprobamos si la posicion en el array es impar 
			var parseValue= parseInt(newArray[j]);  // parseo el valor para trabajarlo como numero y poder hacer operaciones matematicas 
			var multiplyValue= parseValue*2; 
			if (multiplyValue >= 10){
				stringValue= multiplyValue.toString(); //convierto a string para que pueda ser tomado por el .substr
				var a= stringValue.substr(0,1); // extraigo de la posicion 0, 1 valor 
				var parseA= parseInt(a);// lo vuelvo a number 
				var b= stringValue.substr(1,1); 
				var parseB= parseInt(b);  
				concatValue= parseA + parseB;  // sumo ambos numeros 
				newArray.splice(j,1,concatValue); // reemplazo el valor en el array 
			}else if (multiplyValue < 10){
				newArray.splice(j,1,multiplyValue); // reemplazo el valor en el array 
		}else if (j%2 == 0){
			newArray=newArray; // si la posicion es par, el array se mantiene 
		}
	} 
	//ciclo para sumar todos los elementos del arreglo 
	for (var k=0 ; k<newArray.length ; k++){  
		parseValueArray= parseInt(newArray[k]) //parsear el elemento para que pueda ser sumado 
		totalSum = totalSum + parseValueArray; // sumo todos los elementos del array 
		 
	} 
	//comprobar validez de tarjeta con el modulo de 10
	if (totalSum % 10 === 0){
		alert("La tarjeta es valida"); 
	}else {
		alert("la tarjeta no es valida"); 
	}
	}
}

isValidCard(cardNumber); 
//fin 
// "4083952015263" numero tarjeta para probar 