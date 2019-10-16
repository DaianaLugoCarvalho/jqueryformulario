// **1.** No arquivo page1.html, faça uma instrução jQuery que selecione todos elementos img da página que possuem alt e os imprima no log do console.

$(function(){

    // $(document).ready(function(){
    //     $("img").parent('.alt');
    // });  


    // $(document).ready(function(){
    //     $("img").attr("alt");
    // });

    
    $(document).ready(function() {
        let dado = $('img').find().attr('alt');

        console.log(dado);
    });
    
})







       
        

