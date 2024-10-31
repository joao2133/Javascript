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
    
   }else{
    window.alert('Valor inválido ou já encontrado na lista')
   }
}


function finalizar(){

}