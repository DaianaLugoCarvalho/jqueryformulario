$(function(){

      

        $("#eventType").change(function(){
            let selected = $("#eventType :selected").val();


            if (selected === "Teatro") {
                $('.esconder-teatro').hide();
                $('.mostrar-teatro').show();         
                
                
            }  if (selected === "Cinema") {
                $('.esconder-cinema').hide();  
                $('.mostrar-cinema').show(); 
                   
            }  if (selected === "Debate Literário") {
                $('.esconder-debate').hide();  
                $('.mostrar-debate').show(); 

            }  if (selected === "Dança") {
                $('.esconder-danca').hide();  
                $('.mostrar-danca').show(); 

            }  if (selected === 'Artes visuais e exposições'){
                $('.esconder-artes').hide();  
                $('.mostrar-artes').show();

            }  if (selected === 'Música'){
                $('.esconder-musica').hide();  
                $('.mostrar-musica').show();
                
            } if (selected === '-- Selecione --'){
                $('.esconder-teatro, .mostrar-teatro, .esconder-cinema, .mostrar-cinema, .esconder-debate, .mostrar-debate, .esconder-danca, .mostrar-danca, .esconder-artes, .mostrar-artes, .esconder-musica, .mostrar-musica ').hide();
            }           
       

        }); 


        

        $('#free').click(function () {
            $('#price').toggle()
        })  
        
        
        $('.btn').submit(function () {
            
            if ( )
            
        })

});