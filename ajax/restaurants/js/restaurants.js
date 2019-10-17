// **1.** Faça um código jQuery para o site de restaurantes, que leia o arquivo restaurants.xml e após obter seus dados crie uma lista. Para cada tag \<restaurant>, crie um \<li> com o nome e endereço do restaurante. Mude a cor do item de acordo com o tipo de restaurante. Crie um link em cada item que direcione ao Google Maps, com o endereço especificado através da longitude e latitude.

$(function () {

 // Type for tal a cor sera tal.
    $.ajax({     

        type: "GET",
        url: "./resources/restaurants.xml",
        dataType: "xml",
        success: function (data) {            
            $(data).find('restaurant').each(function () {
                let html = '<li class="list-group-item list-group-item-light">' +
                    '<div class="d-flex w-100 justify-content-between">' +
                    '<h5 class="mb-1">'+$(this).attr('name')+'</h5>' +
                    '</div>' +                   
                    '<p class="mb-1"> Endereço</p>' +                    
                    '<h5 class="mb-1">'+$(this).attr('address') + '</h5>' +                   
                    '<small><a href="http://maps.google.com/maps/?q=' + $(this).attr('lat')  + ',' +  $(this).attr('lng') + '" target="_blank">Ver no mapa </a></small>' +
                    '</li>';                              

                $('.list-group').append(html);
            })
        },

        error: function ( jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
            alert('Deu um erro... Que tristeza');
        }    
    })
})

