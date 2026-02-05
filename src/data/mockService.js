import products from "./productos.js"

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 1000)
  })
}

export default getData
