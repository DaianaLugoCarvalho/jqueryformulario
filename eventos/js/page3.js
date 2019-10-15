// **3.** No arquivo page3.html, no clique do botão programe toogle para cada card, com tempos diferentes para cada um.

$(function(){

    $('button').click(function(){

        $('.img1').fadeToggle(3000);
        $('.img2').fadeToggle(4000);
        $('.img3').fadeToggle(5000);
    })
})



