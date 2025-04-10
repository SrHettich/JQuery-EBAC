

$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#botao-cancelar').click(() => {
        $('form').slideUp()
    })

    $('form').submit(function(e){
        e.preventDefault()
        
        const urlImg = $('#url-img').val()
        const novoItem = $('<li style="display: none"></li>')

        $(`<img src="${urlImg}"/>`).appendTo(novoItem)
        $(`            
            <div class="overlay-img-link">
                <a href="${urlImg}" target="_blank" title="Ver imagem em tela cheia">
                    Ver imagem em tamanho real
                </a>
            </div>
         `).appendTo(novoItem)

         $(novoItem).appendTo('ul')
         $(novoItem).fadeIn()
         $('#url-img').val('')
    })
})