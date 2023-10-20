function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")

    // if(html.classList.contains('light') ){
    //     html.classList.remove('light')
    // }
    // else{
    //     html.classList.add('light')
    // }
   

    // Pegar a imagem:
    const img = document.querySelector("#profile img")
    // Substituir a imagem
    if (html.classList.contains("light")){
        // se for verdade, fica a a imagem light mode.
        img.setAttibute('src', './Assets/test.jp')
    }else{
        // Se
        img.setAttribute('src', './Assets/Avatar_Allan.png' )
    }

}