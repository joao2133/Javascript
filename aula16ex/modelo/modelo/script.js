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

l.indexOf(Number(n)) != -1: Se o número n estiver na lista l, o indexOf() retornará um índice diferente de -1, e a condição será true.
else: Se n não estiver na lista, indexOf() será -1, e a condição será false.

* */



//adiciona o número no array valores caso ele passe nas verificações
function adicionar(){
   if (isNumero(num.value) & !inLista(num.value, valores)){
        //adiciona o número ao array 'valores']
        valores.push(Number(num.value)) //Converte o valor para número e o adiciona ao array valores.

        //Cria um novo item para o elemento 'select' e adiciona o número
        let item = document.createElement('option') //Cria um novo item de lista (<option>) para o select e define o texto para mostrar o número adicionado.

        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)    //Adiciona o novo item ao select

        //appendChild é um método que coloca um novo elemento como último filho de outro elemento

        //Limpa o campo de entrada e foca nele para o proximo número
        num.value = ''
        num.focus()//num.focus(): Coloca o cursor de volta no campo de entrada <input>

        //Limpa o resultado, pois a lista foi atualizada
        res.innerHTML = ''
   }else{
    window.alert('Valor inválido ou já encontrado na lista')
   }
}


function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores para finalizar!')
    }else{
        let total = valores.length
        let maior = math.max(valores) //Encontra o maior valor
        let menor = math.min(valores) //Encontra o menor valor
        let soma = valores.reduce((acc, val) => acc + val, 0) // soma todos os números
        let media = soma / total //Calcula a média

        //Exibe o resultado na div 'res'
        res.innerHTML = ''
        res.innerHTML = `<p>Total de números cadastrados: ${total}</p>`
        res.innerHTML = `<p>O maior número informado foi ${maior}</p>`
        res.innerHTML = `<p>O menor número informado foi ${menor}</p>`
        res.innerHTML = `<p>A soma de todos os valores é ${media}</p>`
        res.innerHTML = `<p>A media de todos os valores é ${media}</p>`
    }
}