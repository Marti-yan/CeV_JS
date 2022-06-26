/*var idade = 18
if (idade < 16) {
    console.log("não vota")
} else {
    if (idade < 18) {
        console.log("voto opcional")
    } else {
        console.log("voto obrigatorio")
    }
}*/
var idade = 66
console.log(`você possui ${idade} anos`)
if (idade < 16) {
    console.log("não vota")
} else if (idade < 18 || idade >=65) {
    console.log("voto opcional")
} else {
    console.log("voto obrigatorio")
}