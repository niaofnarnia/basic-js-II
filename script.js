//Bienvenida a Javascript básico parte II, donde veremos condicionales y bucles.

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//CONDICIONALES

//Ejercicio 1: Escribe un condicional if/else que imprima en la consola 'Eres mayor de edad' cuando la constante age tenga el valor correspondiente, si no es así, debe imprimir 'No eres aún mayor de edad'

//const age = 18; 
const age = 12; //Ejercicio 2: Cambia el valor de age a 12 para mirar el resultado del ejercicio anterior.
//Escribe tu código aquí
if (age >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("No eres aún mayor de edad");
}

//Ejercicio 3: Escribe un condicional if/else que lea la constante pet y si es un perro, que imprima en la consola "Tengo un perro", si es un gato, que imprima en la consola "Tengo un gato", si es un pájaro, que imprima en la consola "Tengo un pájaro" y si no es ninguno de los 3 que imprima "No tengo una mascota convencional"

//const pet = "perro";
const pet = "serpiente"; //Ejercicio 4: cambia el valor de pet a "serpiente" y mira el resultado en consola para comprobar que tu código funciona bien.
//Escribe tu código aquí

if (pet === "perro") {
    console.log("Tengo un perro");
} else if (pet === "gato"){
    console.log("Tengo un gato");
} else if (pet === "pájaro"){
    console.log("Tengo un pájaro");
} else {
    console.log("No tengo una mascota convencional")
}

//Ejercicio 5: Haz el mismo ejercicio 3, pero con el condicional switch.

//Escribe tu código aquí
switch (pet) {
    case "perro":
        console.log("Tengo un perro");
        break;
    case "gato":
        console.log("Tengo un gato");
        break;
    case "pájaro":
        console.log("Tengo un pájaro");
        break;
    default:
        console.log("No tengo una mascota convencional");
}

//Ejercicio 6: Usando un operador ternario, escribe un programa que lea la constante weather e imprima en consola si es soleado "Me vestiré con un vestido" y si no es así que imprima "Me vestiré con pantalón"

//const weather = "soleado"
const weather = "frío"; //Ejercicio 7: cambia el valor de weather a "frío" y mira el resultado en consola para comprobar que tu código funciona bien.


const result = weather === "soleado" //Escribe tu código aquí;
    ? "Me vestiré con un vestido" //value if true
    : "Me vestiré con pantalón" //value if false
console.log(result)

//Ejercicio 8: Escribe un programa que al darle la constante 'value' imprima en consola "Es un número" cuando el valor sea de tipo number, "Es un string" cuando el valor sea de tipo string o si no es ni uno ni otro que imprima "No es ni número ni string". Puedes hacerlo con cualquier tipo de condicional.

const value = '1' // string

//Escribe tu código aquí
if (typeof value === "number") {
    console.log("Es un número");
} else if (typeof value === "string") {
    console.log("Es un string");
} else {
    console.log("No es ni número ni string");
}
//BUCLES

//Ejercicio 9: Imprime en consola una lista del 0 al 10 con el bucle for

//Escribe tu código aquí
for (let num = 0; num <= 10; num++) {
    console.log(num);
}

//Ejercicio 10: Con un bucle for in imprime en pantalla todos los nombres, apellidos y su aporte a la sociedad de las programadoras de la historia contenidas en el array llamado 'programmers', Deberás imprimir el índice y la información de cada una de ellas de la siguiente manera: '0: Ada Lovelace, su aporte fue la máquina analítica'. 

const programmers = [
    {
        name: 'Ada',
        lastname: 'Lovelace',
        knowledge: 'la máquina analítica'
    },
    {
        name: 'Margaret',
        lastname: 'Hamilton',
        knowledge: 'el programa espacial Apolo'
    },
    {
        name: 'Grace',
        lastname: 'Hopper',
        knowledge: 'el lenguaje Cobol'
    },
    {
        name: 'Hedy',
        lastname: 'Lamarr',
        knowledge: 'el wifi'
    }     
]

//Escribe tu código aquí
for (let x in programmers) {
    let programmer = programmers[x]
    let text = x + ": " + programmer.name + " " + programmer.lastname + ", su aporte fue " + programmer.knowledge;
    console.log(text);
}

//Ejercicio 11: Con un bucle for of imprime en consola "Hola, mi nombre es ... " y reemplaza los tres puntos con cada nombre del array dado.

const names = ['Carla', 'Alex', 'Judith', 'Maria', 'Noelia']

//Escribe tu código aquí
for (let name of names) {
    console.log("Hola, mi nombre es " + name);
}
//Ejercicio 12: Con un bucle while imprime en consola una lista del 1 al 5.

//Escribe tu código aquí
let list = 1;
while (list <= 5) {
    console.log(list);
    list++;
}

//Ejercicio 13: Realiza el mismo ejercicio anterior pero con un bucle do while.

//Escribe tu código aquí
let list2 = 1;
do {
    console.log(list2);
    list2++;
} while (list2 <= 5);


//Ejercicio 14: Saludo Personalizado
//Crea una función llamada saludar que tome un parámetro llamado nombre y devuelva un saludo personalizado. Luego, llama a la función con diferentes nombres y muestra el resultado en la consola.

//Escribe tu código aquí
function saludar(nombre) {
    return "¡Hola " + nombre + "!";
}

console.log(saludar("Caterina"));
console.log(saludar("Roberta"))


//Ejercicio 15: Calcular el Área de un Rectángulo
//Crea una función llamada calcularAreaRectangulo que tome dos parámetros (ancho y alto) y devuelva el área del rectángulo. Luego, llama a la función con diferentes valores de ancho y alto y muestra el resultado en la consola.

//Escribe tu código aquí
function calcularAreaRectangulo(ancho, alto) {
    let area = ancho * alto;
    return area;
}

console.log("Rectángulo 1: " + calcularAreaRectangulo(13, 13) + " cm2");
console.log("Rectángulo 2: " + calcularAreaRectangulo(45, 9) + " cm2");
