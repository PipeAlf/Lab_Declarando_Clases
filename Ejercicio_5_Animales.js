//! Andrés Alfonso

class Animal{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    emitirSonido(){
        console.log(this.nombre," tiene ", this.edad, " años.");
    }
}

class Perro extends Animal{
    constructor(nombre,edad){
        super(nombre,edad);
    }
    emitirSonido(){
        super.emitirSonido();
        console.log("Hace: Guau!");
    }
}

class Gato extends Animal{
    constructor(nombre,edad){
        super(nombre,edad);
    }
    emitirSonido(){
        super.emitirSonido();
        console.log("Hace: Miau!");
    }
}

const animal1 = new Perro("Pato","12");
animal1.emitirSonido();

const animal2 = new Gato("Chimuelo","2");
animal2.emitirSonido();