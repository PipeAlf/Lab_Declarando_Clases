//! Andrés Alfonso

class Empleado{
    constructor(nombre,edad,salarioBase){
        this.nombre = nombre;
        this.edad = edad;
        this.salarioBase = salarioBase;
    }
    calcularSalario(){
        console.log("El salario base es de: ", this.salarioBase);
    }
}

class Gerente extends Empleado{
    constructor(nombre, edad, salarioBase,bonificacion){
        super(nombre,edad,salarioBase);
        this.bonificacion = bonificacion;
    }
    calcularSalario(){
        let salarioGerente= this.salarioBase + this.bonificacion;
        console.log("El salario de gerente es de: ", salarioGerente);
    }
}

class Desarrollador extends Empleado{
    constructor(nombre,edad,salarioBase,lenguaje){
        super(nombre,edad,salarioBase);
        this.lenguaje=lenguaje;
    }
}

const developer1= new Desarrollador("Andres",29,500,"Java");
developer1.calcularSalario();


const gerente1= new Gerente("Ana",25,1500,200);
gerente1.calcularSalario();

const developer2= new Desarrollador("Daniella",23,800,"JS");
developer2.calcularSalario();

const gerente2= new Gerente("Nath",27,1300,200);
gerente2.calcularSalario();