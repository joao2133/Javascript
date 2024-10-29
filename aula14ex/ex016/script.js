function contar(){
    let ini =  document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //window.alert('[ERRO] Faltam dados!')]
        res.innerHTML = 'Impossível Contar!'
    }else{
        res.innerHTML = 'Contando: <br> '
        let i = Number(ini.value) /* Convertendo as variaveis para numero*/
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo invalido! Considerando Passo 1')
            p = 1
        }

        // =+ na linha 19 é concatenação. Concatenação em JavaScript é a operação de unir o conteúdo de duas ou mais strings.

        if (i < f){
            //Contagem crescente
            for (let c = i; c <=f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`     
            }
        }else{
            //Contagem Regressiva
            for (let c = i; c >= f; c-=p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}