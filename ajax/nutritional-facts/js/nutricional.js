// **2.** Faça um código jQuery para o site de informações nutricionais, que leia o arquivo nutrition.xml e após obter seus dados crie uma tabela. Para cada tag \<food> no arquivo XML, crie uma linha na tabela com o nome do alimento e suas informações nutricionais de maneira que a tabela fique como a tabela abaixo:

// | Nome | Porção | Calorias | Carboidratos | Fibras | Proteínas | Vitamina A | Vitamina C |
// | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
// | Bagels, New York Style | 104 g | 300 | 54 | 3 | 11 | 0 | 0 |
// | Beef Frankfurter, Quarter Pound | 115 g | 370 | 8 | 0 | 13 | 0 | 2 |
// | Eggs | 50 g | 70 | 1 | 0 | 6 | 6 | 0 |
     
        $(function () {
            $.ajax({
                type: "GET",
                url: "./resources/nutrition.xml",
                dataType: "xml",
                success: function (data) {
                    $(data).find('food').each(function () {
                        let html = '<tr>' +
                            '<th scope="row">' + $(this).find('name').text() + '</th>' +
                            '<td>' + $(this).find('serving').text() + ' ' + $(this).find('serving').attr('units') + '</td>' +
                            '<td>' + $(this).find('calories').attr('total') + '</td>' +
                            '<td>' + $(this).find('carb').text() + '</td>' +
                            '<td>' + $(this).find('fiber').text() + '</td>' +
                            '<td>' + $(this).find('protein').text() + '</td>' +
                            '<td>' + $(this).find('vitamins a').text() + '</td>' +
                            '<td>' + $(this).find('vitamins c').text() + '</td>' +
                            '</tr>';
        
                        $('tbody').append(html);
                    });
                },
                error: function () {
                    alert('Deu um erro... Que tristeza');
                }
            })
        











})