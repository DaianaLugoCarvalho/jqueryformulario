// **4.** No arquivo page4.html, no clique do botão faça com que cada card apareça utilizando efeitos de slide. Um diferente efeito para cada card. 
// 3. Na página 4, após o click do botão que faz os cards aparecerem, remova a classe "btn-primary" e adicione "btn-secondary", e desabilite o botão.
// 4. Ainda na página 4, ao clica sobre um card de um personagem o mesmo deve desaparecer.

$(function(){

    $('button').click(function(){
        $('.card1').slideDown(2000);
        $('.card2').slideDown(4000);
        $('.card3').slideDown(6000);
    })
    
    
    // $('button').click(function(){
    //     $('.card1').slideUp(3000);
    //     $('.card2').slideUp(6000);
    //     $('.card3').slideUp(9000);
    // })

    

    // quando clicar na Div Card1 a classe cardRemove vai ser removida
    // $(".card1").click(function(){
    //     $('.card-remove1').remove();
    // });


    // $(".card2").click(function(){
    //     $('.card-remove2').remove();
    // });


    // $(".card3").click(function(){
    //     $('.card-remove3').remove();
    // });

                //>>>>>> OUTRA FORMA DE REMOVER<<<<<</////

    //vai ficar ouvindo o click, e o this vai remover o clicado
    $('.card').click(function(){
        $(this).remove();
    })

    

})











