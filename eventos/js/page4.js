// **4.** No arquivo page4.html, no clique do botão faça com que cada card apareça utilizando efeitos de slide. Um diferente efeito para cada card.

$(function(){

    $('button').click(function(){
        $('.card1').slideDown(3000);
        $('.card2').slideDown(6000);
        $('.card3').slideDown(9000);
    })
    
    $('button').click(function(){
        $('.card1').slideUp(3000);
        $('.card2').slideUp(6000);
        $('.card3').slideUp(9000);
    })



})








