import products from "./productos.js"

const mypromise = new Promise ( (resolve, reject) => {
    console.log("iniciando promesa")
    setTimeout( () => {resolve("Promesa terminada")}, 1000)
})


function getData(){
    const promiseData = new Promise ( (resolve, reject) => {
    console.log("Solicitando datos a la base de datos")
    setTimeout( () => {resolve("products")}, 1000)
})
    return promiseData
}


export default getData;