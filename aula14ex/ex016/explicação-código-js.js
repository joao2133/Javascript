lógica do loop for que realiza a contagem:

4. Contagem com for
A linha do código:

for (let c = i; c <= f; c += p) {
    res.innerHTML += `${c}`     
}
pode ser decomposta nas seguintes partes:

Estrutura do for
A estrutura de um loop for é:

for (inicialização; condição; incremento) {
    // código a ser repetido
}
No caso do código que você enviou:

inicialização (let c = i): A variável c é inicializada com o valor de i, que representa o ponto de início da contagem, fornecido pelo usuário.

condição (c <= f): Essa condição determina até onde a contagem deve ir. O loop continuará rodando enquanto c for menor ou igual a f (valor final). Assim que c ultrapassa f, o loop para.

incremento (c += p): Após cada execução do bloco, c é incrementado pelo valor de p (passo), que também foi fornecido pelo usuário. O += é um operador de incremento: ele soma p ao valor atual de c e armazena o resultado de volta em c.

Como o for funciona no código
Primeira iteração:

c começa com o valor inicial i.
Verifica-se a condição (c <= f). Se for verdadeira, o código dentro do bloco { ... } será executado.
O valor de c é exibido em res.innerHTML usando a concatenação ${c}, o que permite incluir o valor de c no conteúdo HTML.
Segunda iteração:

O valor de c é atualizado com o incremento p, então c agora é c + p.
Novamente, a condição c <= f é verificada. Se for verdadeira, o código dentro do bloco { ... } será executado.
O valor atualizado de c é concatenado em res.innerHTML, que acumula os valores da contagem.
Continuação:

Esse processo se repete até que a condição c <= f se torne falsa.
Exemplo Prático
Imagine que o usuário define:

i = 1 (início)
f = 10 (fim)
p = 2 (passo)
O loop for executaria da seguinte maneira:

Primeira iteração:

c = 1
1 <= 10 é verdadeiro, então res.innerHTML recebe 1.
c é incrementado para 3 (1 + 2).
Segunda iteração:

c = 3
3 <= 10 é verdadeiro, então res.innerHTML recebe 3.
c é incrementado para 5.
Terceira iteração:

c = 5
5 <= 10 é verdadeiro, então res.innerHTML recebe 5.
c é incrementado para 7.
Esse processo continua até que c ultrapasse 10, quando o loop termina.

Concatenando o Resultado
Dentro do bloco do for, a linha:

res.innerHTML += `${c}`

adiciona o valor atual de c ao conteúdo de res.innerHTML. Assim, o resultado final de res.innerHTML será uma sequência dos números contados (ex: 1 3 5 7 9).