let num = document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
    }else{
        alert("Valor invalido ou ja existente na lista")  
    }

    num.value = ""
    num.focus()
} 

function finalizar(){
    if (valores.length == 0){
        alert("adicione valores antes de finalizar!")
    }else{
        let total = valores.length
        let menor = valores[0]                                 
        let maior = valores[0]                            
        let soma = 0
        let media = 0                                    

        for(let i in valores){
            soma += valores[i]
            if (valores[i] > maior){
                maior = valores[i]
            }
            if (valores[i] < menor){
                menor = valores[i]
            }
        } 

        media = soma/total
        console.log(valores)
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo temos um total de ${total} valores adicionados</p>`
        res.innerHTML += `<p>O maior valor informado foi: ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi: ${menor}</p>`
        res.innerHTML += `<p>A soma foi: ${soma}</p>`
        res.innerHTML += `<p>A media foi: ${media}</p>`

    }
}






