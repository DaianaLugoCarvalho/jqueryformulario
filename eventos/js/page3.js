// **3.** No arquivo page3.html, no clique do botão programe toogle para cada card, com tempos diferentes para cada um.Insira um botao que insira mais uma fileira de cards.
// 1. Na página 3, crie um segundo botão que insira mais um fileira de cards.
// 2. Ainda na página 3, no hover no nome do personagem, altere a cor do texto.

$(function () {

    function onoffhover (){

        //para desligar e ligar a função de passar o mouse, para que funcione em nos cards que forem criados ao clicar no botão 2
        $('.card-title').off('mouseenter').on('mouseenter',      
        function (){
            $(this).css('color', 'red');
        })

    
        $('.card-title').on('mouseleave').on('mouseleave',        
        function (){
            $(this).css('color', 'yellow');
        }
        )
    }

    onoffhover ()




    $('.btn1').click(function () {

        $('.img1').fadeToggle(3000);
        $('.img2').fadeToggle(4000);
        $('.img3').fadeToggle(5000);


        // $('.card:eq(0)').toggle(3000);
        // $('.card:eq(1)').toggle(4000);
        // $('.card:eq(2)').toggle(5000);
    })


    $('.btn2').click(function () {
        //isso vai trazer todo o conteudo da .div-copy
        let content = $('.div-copy').html();
        //depois dele quero inserir um conteudo html
        $('.div-copy').after('<div class="row">' + content + '</div>')

        // $('.div-copy').after $('.div-copy').clone=(true)

        onoffhover ();


    })


    


})



