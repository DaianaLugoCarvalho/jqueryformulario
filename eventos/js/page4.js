// **4.** No arquivo page4.html, no clique do botão faça com que cada card apareça utilizando efeitos de slide. Um diferente efeito para cada card.

$(function(){

    $('button').click(function(){
        $('.card1').slideDown(3000);
        $('.card2').slideDown(9000);
        $('.card3').slideDown(15000);
    })

})




