import { promises as fs } from "fs";

export default class ProductManager {
  constructor() {
    this.patch = "./productos.json";
    this.products = [];
  }

  static id = 0;

  addProduct = async (titulo, descripcion, precio, imagen, code, stock) => {
    ProductManager.id++;
    let newProduct = {
      titulo,
      descripcion,
      precio,
      imagen,
      code,
      stock,
      id: ProductManager.id,
    };

    this.products.push(newProduct);

    await fs.writeFile(this.patch, JSON.stringify(this.products));
  };

  readProducts = async () => {
    let solucion = await fs.readFile(this.patch, "utf-8");
    return JSON.parse(solucion);
  };

  getProducts = async () => {
    let solucion2 = await this.readProducts();
    return console.log(solucion2);
  };

  getProductsById = async (id) => {
    let solucion3 = await this.readProducts();
    if (!solucion3.find((product) => product.id === id)) {
      console.log("Producto no encontrado");
    } else {
      console.log(solucion3.find((product) => product.id === id));
    }
  };

  deleteProductsById = async (id) => {
    let solucion3 = await this.readProducts();
    let productFilter = solucion3.filter((product) => product.id != id);
    await fs.writeFile(this.patch, JSON.stringify(productFilter));
    console.log("Producto eliminado");
  };

  updateProducts = async ({ id, ...producto }) => {
    await this.deleteProductsById(id);
    let productoanterior = await this.readProducts();
    let modificados = [{ ...producto, id }, ...productoanterior];
    await fs.writeFile(this.patch, JSON.stringify(modificados));
  };
}

const productos = new ProductManager();

/*productos.addProduct("Cuadro Maradona", "Diego Armando Maradona", 10000, "imagen1", "C1", 20);
productos.addProduct("Cuadro Messi", "Lionel Andres Messi", 20000, "imagen2", "C2", 10);
productos.addProduct("Cuadro Ronaldo", "Cristiano Ronaldo", 30000, "imagen3", "C3", 5);
productos.addProduct("Cuadro Dybala", "Paulo Dybala", 5000, "imagen4", "C4", 12);
productos.addProduct("Cuadro Di Maria", "Angel Di Maria", 7000, "imagen5", "C5", 2);
productos.addProduct("Cuadro Kane", "Harry Kane", 2000, "imagen6", "C6", 5);*/

//productos.getProducts();

//productos.getProductsById(3);

//productos.deleteProductsById(1);

/*productos.updateProducts({
  titulo: 'Cuadro Ronaldo',
  descripcion: 'Cristiano Ronaldo',
  precio: 50000,
  imagen: 'imagen3',
  code: 'C3',
  stock: 5,
  id: 3,
});*/