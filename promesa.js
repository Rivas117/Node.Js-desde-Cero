const { promisify } = require("util")
function pedirPizzaCallback(callback) {
    console.log("Pedido Realizado, Esperando la Pizza...");
    setTimeout(() => {
        let exito = true;
        if (exito) {
            callback(`Pizza recibida.`)
        } else {
            callback("Mala noticias, Problemas con tu pedido.")
        }
    }, 3000);
}

const pedirPizza = promisify(pedirPizzaCallback)
async function pedirPizzaAwait() {
    try {
        const mensajeExito = await pedirPizza();
        console.log(mensajeExito)
    } catch (mensajeError) {
        console.log(mensajeError)
    }
}


pedirPizzaAwait();