const body = document.getElementById("tbody")

let shop = []



fetch('./json/productos.json')
.then(response => response.json())
.then(productos => {
    productos.forEach((productos, indice) => {
        body.innerHTML += `
        <tr id="productos${indice}">
            <th scope="row">${indice + 1}</th>
            <td>${productos.nombre}</td>
            <td>${productos.genero}</td>
            <td>${productos.tipo}</td>
            <td><img src="./imagen/${productos.imagen}"></td>
            <td><button class="btn btn-dark"> Comprar</button></td>
        </tr>

        `
    }) 
})
if(localStorage.getItem("shop")){
    shop = JSON.parse(localStorage.getItem("shop"))
}else{
    localStorage.setItem("shop", JSON.stringify(shop))
}

async function mostrarProducto() {
    const productos = await fetch('./json/productos.json')
    const productosParceadors = await productos.json()
    return productosParceadors
}

mostrarProducto().then(productos => {
    
    productos.forEach((productos, indice) => {
        let local = document.getElementById(`productos${indice}`).lastElementChild
        local.addEventListener("click", () => {
            document.getElementById(`productos${indice}`)
            shop.push(productos)
            localStorage.setItem("shop", JSON.stringify(shop))
        })
    
    })
})



























