function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 & hora < 13){
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#a0aeaf'
    }else if (hora >= 12 & hora <= 18) {
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background ='#bea084'
    }else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background ='#0b0601'
    }
}