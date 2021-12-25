/* eslint-disable */

//SINGLETON PATTERN

class CeiaDeNatal{
   
    static INSTANCE;

    
    constructor(){
       this.pratos = ["Peru"]
    }

    putPrato(prato){
        this.pratos.push(prato)
    }

    showPratos(){
        return this.pratos
    }

    static getInstance(){
     if(!this.INSTANCE){
            this.INSTANCE = new CeiaDeNatal();
            
        }
        return CeiaDeNatal.INSTANCE;
    }
}

//O método getInstance verifica se a classe já foi instanciada, 
// caso já tenha sido, ele não cria uma nova instância.
//Ele mantém aquela já feita. 
//Por tanto se eu tenho dois objetos criados através do método getInstance(), 
//um está diretamente ligado ao outro
//É bom quando eu preciso trabalhar com a mesma classe em arquivos diferentes,
//atualizando propriedades dentro dela

const ceia = CeiaDeNatal.getInstance()

ceia.putPrato('arroz')
console.log(ceia.showPratos())

ceia.putPrato('farofa')
console.log(ceia.showPratos())

const ceia2 = CeiaDeNatal.getInstance()

console.log(ceia2.showPratos())

ceia2.putPrato('macarrao com bife')

console.log(ceia.showPratos())

//testado no Quokka