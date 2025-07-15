class Vehiculo{
    constructor(marca,modelo,año){
        this.marca=marca;
        this.modelo=modelo;
        this.año=año;
    }
    obtenerDetalles(){
        console.log("El vehículo es de la marca ", this.marca, "de modelo ", this.modelo, "del año ", this.año);
    }
}

class Coche extends Vehiculo{
    constructor(marca,modelo,año,numeroPuertas){
        super(marca,modelo,año);
        this.numeroPuertas=numeroPuertas;
    }
    obtenerDetalles(){
        console.log("El vehículo es de la marca ", this.marca, "de modelo ", this.modelo, "del año ", this.año, " tiene ",this.numeroPuertas, "puertas");
    }
}

class Moto extends Vehiculo{
    constructor(marca,modelo,año,cilindrada){
        super(marca,modelo,año);
        this.cilindrada=cilindrada;
    }
    obtenerDetalles(){
        console.log("El vehículo es de la marca ", this.marca, "de modelo ", this.modelo, "del año ", this.año, " tiene ",this.cilindrada, "de cilindraje");
    }
}

const Vehiculo1 = new Vehiculo("Hyundai", "Venue", 2023);
Vehiculo1.obtenerDetalles();

const carro1= new Coche("Porsche","Boxster",2024,2);
carro1.obtenerDetalles();

const moto1= new Moto("Suzuki","R7",2024,1200);
moto1.obtenerDetalles();