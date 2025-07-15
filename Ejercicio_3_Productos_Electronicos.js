//! Andrés Alfonso

class Producto{
    constructor(nombre,precio,marca){
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
    }
    descripcion(){
        console.log("El producto: ", this.nombre);
        console.log("De marca: ",this.marca);
        console.log("Tiene un precio de: ", this.precio);
    }
}

class Telefono extends Producto{
    constructor(nombre,precio,marca,almacenamiento,ram){
        super(nombre,precio,marca);
        this.almacenamiento = almacenamiento;
        this.ram = ram;
    }
    descripcion(){
        super.descripcion();
        console.log("Almacenamiento de: ",this.almacenamiento, "Gb");
        console.log("RAM: ", this.ram," Gb ");
    }
}

class Laptop extends Producto{
    constructor(nombre,precio,marca,procesador,pulgadas){
        super(nombre,precio,marca);
        this.procesador = procesador;
        this.pulgadas = pulgadas;
    }
    descripcion(){
        super.descripcion();
        console.log("Procesador: ",this.procesador);
        console.log("Pulgadas: ", this.pulgadas);
    }
}

const producto1 = new Telefono("Z4 Flip",2500000,"Samsung","128","8");
producto1.descripcion();

const producto2 = new Laptop("Pavilon",1800000,"HP","Intel Core i3","24");
producto2.descripcion();