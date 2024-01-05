console.log("Hello world!")

array = [2, 3, 0, "prueba", [99, 93, 92]]

array.push("nuevo")

array.forEach(elem => {
    if (Array.isArray(elem)) {
        elem.forEach(el => {console.log(el)});
    } else {
        console.log(elem)
    }
});

const primer_array = [1, 3, 5]

const segundo_array = primer_array.concat(9)

segundo_array.forEach(elem => {console.log(elem)})

// convertir array en lista para jsx
const array_txt = array.map(value => '<li>' + value + '</li>')

array_txt.forEach(elem => {console.log(elem)});

//asignacion de desestructuracion
let a,b,rest;
[a,b] = [2,4];
[a,b, ...rest] = [2,4,5,6,7,8];

console.log(rest);


//objetos sin usar clases
const persona = {
    name: {
        first: 'John',
        last: 'Douglas'
    },
    age: 20
}

console.log("name: " + persona.name.first + " " + persona.name.last + " | age: " + persona.age)

persona['pais'] = 'ARG'

console.log(persona)

//funciones flecha
const sum = (p1,p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result = sum(3213,444)
console.log(result)

const badResult = sum(3,'3') //concatena en vez de sumarse
console.log(badResult)


const square = p => { //funcion con un solo parametro
    console.log(p)
    return p * p
}

console.log(square(0.3333333))

const log = p => Math.log(p) //funcion con una sola expresion y parametro

console.log(log(2.71828))




