function soma(n1,n2) { // parametros fixos
    return n1 + n2;
}
//console.log(soma(5,2))

function soma2 (v1=0,v2=0) { // parametros opcionais
    return v1 + v2;
}
console.log(soma(5),soma2(5))