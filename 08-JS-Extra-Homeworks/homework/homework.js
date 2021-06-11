// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Debe devolver una matriz, donde cada elemento representa un par 
  //clave-valor en forma de matriz.

  // Escribe una función que convierta un objeto en una matriz, donde 
  //cada elemento representa 
  // un par clave-valor en forma de matriz (array).
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
   //Escribe tu código aquí
  return Object.entries(objeto)
}


function numberOfCharacters(string) {
  //Debe devolver un objeto con los caracteres y el número
  //de veces aparecen como un par clave-valor
  
  //La función recibe un string. Recorre el srting y devuelve el caracter 
  //con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, 
  //c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  
  var objeto = {}; 
    for(var i in string){
        objeto[string[i]] = ( objeto[string[i]] || 0 ) + 1; // Incrementamos el valor 
    }                                                       //si el elemento ya existe 
  return objeto;
}



function capToFront(s) {
  //Debe devolver todas las letras mayúsculas al principio de la palabra.

  //Realiza una función que reciba como parámetro un string y mueva todas las 
  //letras mayúsculas al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let caps = ''
  let min = ''
  for (let i = 0; i < s.length; i++){
    if (s[i].toUpperCase() === s[i]){
      caps = caps + s[i]
    } else {
      min = min +s[i]
    }
  }
  return caps + min
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo 
  //tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || 
  //Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let palabras = str.split(' ')

  let reversed = palabras.map(function(elemento){
    return elemento.split('').reverse().join('')
  })
  let result = reversed.join(' ')
  return result
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let strNumero = new String(numero)
  for (let i = 0; i < strNumero.length; i++){
    for (let j = strNumero.length -1; j >= 0; j--){
      if (strNumero[i] !== strNumero[j]){
      return "No es capicua"
    }
    i++
  }
 }
 return "Es capicua"
}



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  let cadenaSinABC = ''
    for (let i = 0; i < cadena.length; i++){
      if(cadena[i].toLowerCase() !=='a' && cadena[i].toLowerCase() !=='b' && cadena[i].toLowerCase() !=='c'){
        cadenaSinABC = cadenaSinABC + cadena[i];
    }
  }

    return cadenaSinABC
    
  
}



function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden 
  //creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || 
  //Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  let sortedArray = [];
  let aux = ''
  
  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
      if (arr[i].length > arr[j].length){
        aux = arr[i]     // Se guardó en el auxiliar
        arr[i] = arr[j]  // Copio lo que tengo en j a i
        arr[j] = aux     // Recupero el 'i' del auxiliar y lo pongo en 'j'
      }
    }
  }
return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una
  // función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. 
  //(Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  let result = []
  for (let i=0; i<arreglo1.length;i++){
    for (let j=0; j<arreglo2.length;i++){
      if (arreglo1[i] === arreglo2[j]){
        result.push(arreglo1[i])
      }
    }
  }
  return result
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

