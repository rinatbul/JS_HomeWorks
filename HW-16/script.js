let numbers = '0123456789';
let uppercase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
let lowercase = 'qwertyuiopasdfghjklzxcvbnm';
let string = '';
let result = '';
$(document).ready(function(){
    // Adding css styles
    $('*').css('font-family', 'Arial')
    $('.main').css('width', '500px');
    // $('.main').css('margin', '0 auto');
    $('.main').css('padding', '20px');
    $('.main').css('background-color', 'RGB(251,242,233)');
    $('span').css('font-weight', 'bold');
    $('.input_number').css('width', '20px');
    $('.button').css('margin', '10px 0');
    
    $('.button').click(function(){
        $('.result').text('');
        result = '';
        let length = $('.input_number').val();

        for (let i = 0; i < length; i++ ){
            
            if ($('.numeric').prop('checked')){
                string += numbers;
                
            }
            if ($('.uppercase').prop('checked')) {
                string += uppercase;
                
            }
            if ($('.lowercase').prop('checked')) {
                string += lowercase;
                
            }
            result += string.charAt(Math.floor(Math.random() * string.length));
        }
    
        $('.result').text(result);
    });

})