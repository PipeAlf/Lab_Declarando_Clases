//! Andrés Alfonso

class Figura{
    constructor(color){
        this.color = color;
    }
    area(){
        return 0;
    }
}

class Rectangulo extends Figura{
    constructor(color,base,altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }
    area(){
        let arearect=0;
        arearect= this.base * this.altura;
        console.log("El rectangulo es de color: ", this.color);
        console.log("El área del rectangulo es de: ", arearect, " m^2");
    }
}

class Circulo extends Figura{
    constructor(color,radio){
        super(color);
        this.radio = radio;
    }
    area(){
        let areacirc=0;
        const pi = Math.PI
        areacirc= pi* this.radio*this.radio;
        console.log("El circulo es de color: ", this.color);
        console.log("El área del circulo es de: ", areacirc.toFixed(2)," mm^2")
    }
}

const fig1 = new Rectangulo("Rojo",3,2);
fig1.area();

const fig2 = new Circulo("Negro",5);
fig2.area();