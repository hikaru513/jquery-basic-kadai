$(function() {
 
    $('#change-color').on({
      'click': () => {
        $('#target').css('color', 'red');
      },
    });

    $('#change-text').on({
        'click': () => {
            const p = $('p').text();
            console.log(p);
            $('p').text('Hello!');
  
        },
      });
    $('#fade-out').on('click', function() {
        $('#target').fadeOut();
      });
    $('#fade-in').on('click', function() {
        $('#target').fadeIn();
  });
 });
