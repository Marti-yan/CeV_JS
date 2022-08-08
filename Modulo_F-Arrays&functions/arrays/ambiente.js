let num = [3,6,2,4]
num.sort() // .reverse() ordena de tras para frente
console.log(`1 - Nosso vetor é: ${num} `)

num[3]=7 // adicionar o numero no index 3
console.log(`2 - Nosso vetor é: ${num} // foi alterado ou adicionado o valor NO INDEX 3`)

num.push(0) // adicionar o numero no array

console.log(`3 - Nosso vetor é: ${num} // foi adicionado o valor 0 no array `)

num.sort() // arrumar em ordem crescente!
console.log(`4 - Nosso vetor é:  ${num} // foi ordenado em ordem crescente com o sort() `)
console.log(`4 - o vetor tem ${num.length} posições`)
console.log(`5 - o numero na posição 0 é:  ${num[0]} `)

console.log()
console.log(num)
let pos = num.indexOf(2)
console.log(`6 - O valor está na posição ${pos}`)

let pos2 = num.indexOf(6)
    if (pos2 == -1){
        console.log("O valor não foi encontrado!")
    } else{
        console.log(`7 - O valor está na posição ${pos2}`)
    }

