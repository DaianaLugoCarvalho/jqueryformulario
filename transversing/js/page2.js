// **2.** No arquivo page2.html, faça uma instrução jQuery que selecione o input text pelo atributo, depois navegue até seu elemento pai e adicione a classe "alert alert-info" nele.

// **3.** No arquivo page2.html, faça uma instrução jQuery que ao clicar  selecione o item de lista, e:

// * Adicione a classe "list-group-item-info" no item.
// * Adicione a classe "list-group-item-dark" nos demais itens.

$(function(){

$('input[type="text"]').parent().addClass('alert alert-info');

// OUTRA FORMA DE PEGAR O INPUT TEXT///
// $('input').filter('[type="text"]')


// OUTRA FORMA DE PEGAR O INPUT TEXT///
// $('input:text')



$('.list-group-item').on('click', function(){
    $(this).removeClass('list-group-item-dark').addClass('list-group-info');
    $(this).siblings().removeClass('list-group-item-info').addClass('list-group-item-dark')
})





})