var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()

console.log(`agora são exatamente ${hora}:${minutos} horas`)
if (hora < 12 && hora > 5){
    console.log("bom dia")
} else if (hora <= 18){
    console.log("boa tarde")
} else if (hora <= 24) {
    console.log("boa noite")
} else {
    console.log("ta fazendo oq acordado boiola")
}