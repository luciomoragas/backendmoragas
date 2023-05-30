import express from "express"
import ProductManager from "./componentes/fileSystem.js";

const app = express()
app.use(express.urlencoded({ extended: true }));

const productos = new ProductManager
const readProducts = productos.readProducts();

app.get("/productos", async (req,res) => {
    let limit = parseInt(req.query.limit);
    if(!limit) return res.send(await readProducts)
    let allProducts = await readProducts
    let productLimit = allProducts.slice(0, limit)
    res.send(productLimit);
})

app.get("/productos/:id", async (req,res) => {
    let id =parseInt(req.params.id);
    let allProducts = await readProducts
    let productById = allProducts.find(productos => productos.id === id)
    res.send(productById)
    
})
const PUERTO = 8080;
const server = app.listen(PUERTO, () => {
    console.log(`Puerto ${server.address().port}`);
});

server.on("error", (error) => console.log(`Error puerto ${error}`))