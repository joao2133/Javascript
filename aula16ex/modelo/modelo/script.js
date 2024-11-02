//Declaração de Variáveis
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


//verifica se um valor (n) é um número entre 1 e 100
function isNumero(n){
    if (Number(n) >= 1  && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

/*
num.value é uma forma de acessar o que o usuário digitou no campo de entrada e é fundamental para capturar a entrada do usuário em aplicações web. É importante lembrar que o valor é retornado como uma string, e a conversão pode ser necessária para cálculos e outras operações numéricas.

* */


/*
O método indexOf() é usado para procurar o índice de um elemento no array. Ele:

Retorna o índice do elemento no array se o valor for encontrado.
Retorna -1 se o valor não for encontrado.
No contexto desta função, l.indexOf(Number(n)) != -1 significa:

Se Number(n) estiver no array l, indexOf() retornará seu índice (como 0, 1, 2, etc.).
Se Number(n) não estiver no array l, indexOf() retornará -1.
* */


//verifica se um número já está presente na lista.
// (n) número que queremos verificar se já está na lista,
// (l) Este é o array (ou lista) onde faremos a busca para ver se (n) já foi adicionado,
// No código, o array valores é passado para esse parâmetro l.
function inLista(n, l){ 
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
/*

l.indexOf(Number(n)) != -1: Se o número (n) estiver na lista (l), o indexOf() retornará um índice diferente de -1, e a condição será true.
else: Se n não estiver na lista, indexOf() será -1, e a condição será false.

* */



//adiciona o número no array valores caso ele passe nas verificações
function adicionar(){
   if (isNumero(num.value) && !inLista(num.value, valores)){ //verifica se o valor (num.value), e verifica se num.value está presente no array valores

// O operador ! (negação, ou NÃO) inverte o valor retornado. Ou seja, !inLista(num.value, valores) será true apenas se num.value não estiver em valores.

        //adiciona o número ao array 'valores']
        valores.push(Number(num.value)) //Converte o valor para número e o adiciona ao array valores.

        //Cria um novo item para o elemento 'select' e adiciona o número
        let item = document.createElement('option') //Cria um novo item de lista (<option>) para o select e define o texto para mostrar o número adicionado.

        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)    //Adiciona o novo item ao select
    
        //appendChild é um método que coloca um novo elemento como último filho de outro elemento

        //Limpa o resultado, pois a lista foi atualizada
        res.innerHTML = ''
   }else{
    window.alert('Valor inválido ou já encontrado na lista')
   }
   //Limpa o campo de entrada e foca nele para o proximo número
   num.value = ''
   num.focus()//num.focus(): Coloca o cursor de volta no campo de entrada <input>
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores para finalizar!')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]  
        let soma = 0
        let media = 0
        /*
        Por Que Usamos valores[0]?
                Usamos valores[0] para definir os valores iniciais de maior e menor porque:

                Precisamos de um ponto de partida: Ao buscar o maior e o menor valor em um array, precisamos de um valor inicial para comparar com os outros elementos do array.
                Escolher o primeiro valor: Usar valores[0] como valor inicial é uma maneira simples de começar, pois garantimos que maior e menor têm um valor válido do array.
        * */
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        media = soma / total

        /*
        O Que Acontece Durante o Loop?
                À medida que o loop percorre os elementos do array, ele compara cada valor com maior e menor e os atualiza quando encontra um valor maior ou menor.

                Passo a passo do loop:

                Quando o loop compara 8 com maior (5), atualiza maior para 8.
                Depois, compara 3 com menor (5), então menor é atualizado para 3.
                Continua até que todos os elementos sejam verificados, encontrando 12 como o maior e 3 como o menor.
                Ao usar valores[0] no início, começamos com um valor real do array, o que permite ao código funcionar corretamente para qualquer array, mesmo que tenha apenas um elemento.
        * */

        //Exibe o resultado na div 'res'
        res.innerHTML = ''
        res.innerHTML += `<p>Total de números cadastrados: ${total}.</p>`
        res.innerHTML += `<p>O maior número informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor número informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A media de todos os valores é ${media}.</p>`
    }
}