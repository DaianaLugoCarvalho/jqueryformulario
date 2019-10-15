// **3.** No arquivo page3.html, no clique do botão programe toogle para cada card, com tempos diferentes para cada um.Insira um botao que insira mais uma fileira de cards.

$(function(){

    $('button').click(function(){

        $('.img1').fadeToggle(3000);
        $('.img2').fadeToggle(4000);
        $('.img3').fadeToggle(5000);


        // $('.card:eq(0)').toggle(3000);
        // $('.card:eq(1)').toggle(4000);
        // $('.card:eq(2)').toggle(5000);
    })


    $('.outrobotao').click(function(){
        $('.img1').remove();
        $('.img1').slideToggle('1000');
        $('.img2').slideToggle('1000');
        $('.img3').slideToggle('1000');
        

    })

   

})



