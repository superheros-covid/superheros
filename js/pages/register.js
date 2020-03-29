var Pages = Pages || {}
Pages.register=function() {
  console.log('Register');
  $body.attr('class', 'bg-linear-gradient');
  $main.html($('#register').html());
  $('#form-submit').on('click', function() {
    var name = $('input[name=heroName]').val();
    if(name.length) {
      localStorage.setItem('name', name);
      localStorage.setItem('startdate', Date());
      document.location.hash='welcome';
    } else {
      alert('Tous les SuperHéros ont un surnom, pas vous ?')
    }
  });
};
