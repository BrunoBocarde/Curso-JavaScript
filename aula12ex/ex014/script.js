function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date
    var hora = 13//data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora <12){
        // Bom dia 
        img.src = 'manha.png'
        document.body.style.backgroundColor = '#b3b8bc'
    }else if (hora >=12 && hora <18){
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#a96745'
    }else{
        //boa noite
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#121622'
    }
}
