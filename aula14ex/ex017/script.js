function tabuada(){
    //Declaração da Função
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    //Verificação do Campo de Entrada
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        //Conversão do Valor:
        let n = Number(num.value)
        //limpa o conteúdo do elemento tab para remover qualquer tabuada anterior.
        tab.innerHTML = ''
        //Laço de Repetição para a Tabuada
        for(c =1; c<=10; c++){
            let item = document.createElement('option') //Um novo elemento <option> é criado
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)//anexa item ao final da lista de filhos de tab
        }
    }
}
