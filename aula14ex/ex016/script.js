function contar(){
    var ini = document.getElementById("txti")
    var fim = document.getElementById("txtf")
    var passo = document.getElementById("txtp")
    var resultado = document.getElementById("res")

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resultado.innerHTML = "impossivel contar"
        window.alert("ERRO falta dados")
    }else{
        resultado.innerHTML = "contando: <br>"
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <=0){
            window.alert("Passo invalido Considerando passo 1")
            p=1
        }
        if(i < f){    
            for( let c = i; c <= f ; c += p){ // contagem crescente 
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }else{
            for(let c = i; c >= f ; c -= p){ // contagem descresente
                resultado.innerHTML += `${c} \u{1F449}`
            }
            
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}