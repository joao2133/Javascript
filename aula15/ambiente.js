let num = [5, 8, 2, 9, 3]
console.log(num)
console.log(`O array tem ${num.length} posições.`)
console.log(`O array em ordem crescente é ${num.sort()}`)
num.push(11)
console.log(`O ultimo comando adiciona mais um elemento no final`)
console.log(num)
console.log(`agora vou mostrar o primeiro elemento: ${num[0]}`)

let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encotrado!')
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
