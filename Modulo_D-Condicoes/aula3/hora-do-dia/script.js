function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById('imagem')
    img.src = "manha.jpg"
    var data = new Date()
    var hora =  data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas`
    if (hora >= 0 && hora < 12) {
        img.src = "./IMG/manha.jpg"
    } else if (hora >= 12 && hora < 18) {
        img.src = "./IMG/tarde.jpg"
    } else {
        img.src = "./IMG/noite.jpg"
    }
}
