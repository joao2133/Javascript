let valores = [5, 8, 2, 9, 3, 5, 1, 3, 2,]

//o codigo abaixo serve para mostrar os arrays com um laço de repetição (simplificando, cajo haja muitos arrays)
for(let pos=0; pos<valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//uma versão mais simplificada do código acima:

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
 