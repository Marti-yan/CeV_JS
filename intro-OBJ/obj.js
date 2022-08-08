let amigo = {
    nome: 'Yan', 
    sexo: 'M', 
    idade: 18, 
    peso: 95.5,
    engordar(p=0){
        console.log('engordou')
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`O ${amigo.nome} pesa ${amigo.peso}Kg`)












