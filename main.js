function Animal(familia, especie, nuPatas, sonsEmitidos, nuOlhos) {
    this.familia = familia;
    this.especie = especie;
    this.nuPatas = nuPatas;
    this.sonsEmitidos = sonsEmitidos;

    let _nuOlhos = nuOlhos;
    // let _sonsEmitidos = sonsEmitidos;

    this.dizFamilia = function() {
        console.log(this.especie);
    }

    this.dizEspecie = function() {
        console.log(this.especie);
    }

    this.dizNuPatas = function () {
        console.log(this.nuPatas)
    }

    this.dizSonsEmitidos = function () {
        console.log(this.sonsEmitidos)
    }

    this.getNuOlhos = function() {
        return _nuOlhos;
    }

    this.setNuOlhos = function() {
        if (typeof valor === 'number') {
            _nuOlhos = valor;
        }       
    }

    this.modifica = function() {
        const maisOlhos = this.getNuOlhos();
        this.setNuOlhos(maisOlhos);        
    }
}

function Cachorro(familia) {
    Animal.call(this, familia, "PitBull", 4,'auau',2);
   
    this.modifica = function() {
        const maisOlhos = this.getNuOlhos();
        this.setNuOlhos(maisOlhos);        
    }
}

function Aranha(familia) {
    Animal.call(this, familia, "tarantula", 6,'', 8);

    this.modifica = function() {
        const maisOlhos = this.getNuOlhos();
        this.setNuOlhos(maisOlhos);        
    }
}

const animalCachoro = new Animal("Canino");
const animalAranha = new Animal("Araquinidio");

animalCachoro.dizFamilia();
animalCachoro.dizEspecie();
animalCachoro.dizNuPatas();
animalCachoro.dizSonsEmitidos();
animalCachoro.modifica();
console.log(animalCachoro.getNuOlhos());

animalAranha.dizFamilia();
animalAranha.dizEspecie();
animalAranha.dizNuPatas();
animalAranha.dizSonsEmitidos();
animalAranha.modifica();
console.log(animalAranha.getNuOlhos());
