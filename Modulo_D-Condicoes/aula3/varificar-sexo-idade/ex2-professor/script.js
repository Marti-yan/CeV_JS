function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('fano').value
    var res = document.querySelector('div#res')

    if (fano.length == 0 || fano > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0  &&  idade < 10){
                //Criança
                img.setAttribute('src', '../img/crianca-homem.jpg')
            } else if (idade < 21 ){
                // Jovem
                img.setAttribute('src', '../img/jovem-homem.jpg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', '../img/adulto-homem.jpg')

            } else{
                //idoso
                img.setAttribute('src', '../img/idoso-homem.jpg')
            }


        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0  &&  idade < 10){
                //Criança
                img.setAttribute('src', '../img/crianca-mulher.jpg')
            } else if (idade < 21 ){
                // Jovem
                img.setAttribute('src', '../img/jovem-mulher.jpg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', '../img/adulto-mulher.jpg')
            } else{
                //idoso
                img.setAttribute('src', '../img/idoso-mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    };
};