class ProductManager {
    constructor() {
        this.products = [];
        this.newID = 1 
    }

    addProduct(title,description,price,thumbnail,code,stock){
    const productoExist =this.products.find(
        (producto) => producto.code === code
        );
    if (productoExist) {
        console.log(
            `El cuadro de ${title} tiene un error, el codigo ${code} ya se repite`
        );
        return;
    }

    if (!title || !description || !price || !thumbnail || !code || !stock){
    console.log(
        `Se deben agregar todos los campos en el cuadro de ${title} que esta ingresando`
    );
    } else {

    const producto = {
        id:this.newID++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
    }
    this.products.push(producto);
    {
        console.log(`El cuadro de ${producto.title} fue subido de manera exitosa`);
    }
}
}
getProduct() {
    return this.products;
}
getProductById(id) {
    const productoId = this.products.find((producto) => producto.id === id); {
        if (!productoId) {
            console.log(`"NOT FOUND"`);
        }
        else {
            console.log(`El cuadro con el Id ${id} fue encontrado`);
            return productoId;
        }
    }
}
}

const producto = new ProductManager()
producto.addProduct('Maradona', 'Zurdo', '1000', 'Argentina', 'cod1', 5);
producto.addProduct('Pele', 'Derecho', '800', 'cod2', 7);
producto.addProduct('Di Stefano', 'Derecho', '500', 'Argentina', 'cod3', 10);
producto.addProduct('Messi', 'Zurdo', '300', 'Argentina', 'cod3', 8);

console.log(producto.getProduct());
producto.getProductById(2);
producto.getProductById(5);