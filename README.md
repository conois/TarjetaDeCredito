# Validacion de tarjeta de credito. 

####  Validacion en base a algoritmo de Luhn **
####  Este algoritmo necesita los numeros de la tarjeta de creditos en orden inverso, posterior a eso multiplica por 2 todos los valores almacenados en las posiciones pares (si el orden es de 1 en adelante). Si el resultado de esta multiplicacion es mayor o igual a 10 suma ambos digitos. Luego se suman todos los ditos y se saca el modulo de 10, si el resultado es 0 la tarjeta es valida, si es distinto a 0 la tarjeta no es valida. 

#### *Inicio*

Crear varible *cardNumber* y pedir al usuario que señale el numero de su tarjeta sin espacios 
> herramienta prompt() 

### _Funcion isValidCard_ 

#### *Inicio*  

1. Validar ingreso de datos, si el largo del valor ingresado es 0, ingreso de dato no valido. 

2. Formar un array con los datos ingresados.    

3. Dar vuelta el array. 

4. Ciclo para recorrer cada valor del array, desde 0 hasta el largo del array  

5. Verificar si la posicion es impar o impar con %2. 

6.
* Si la posicion es impar:   
- Parsear el valor y multiplicarlo por 2.    
- establecer condiciones:  
	* si es mayor o igual a 10: pasar el valor a string, sustraer el primer valor y parsearlo, reemplazar este valor en el array  
	* si es menor a 10 agregar el valor al array  

* Si la posicion es par: 
- dejar el array como estaba

7. Crear un ciclo para recorrer el array. Tomar cada valor y parsearlo, sumar el valor a una variable de almacenamiento. 

8. Verificar modulo de 10 por medio de condiciones   
- Si %10 es igual a 0, mensaje de " la tarjeta es valida"
- Si no, mensaje de "la tarjeta no valida"

#### *Fin* 

__Link Diagrama de flujo __ : 

#### Metodos y propiedades a usar  
> .split()   
> .splice()  
> .length  
> .pop() 
> parseInt () 
> .toString()
> .substr() 

![Alt text](http://i1255.photobucket.com/albums/hh640/Conois/Diagrama%20de%20flujo%20Tarjeta%20de%20Credito_zpsszsurytq.png) 