var Pages = Pages || {}
Pages.register=function() {
  console.log('Register');
  $main.html($('#register').html());
  $('#form-submit').on('click', function() {
    var name = $('input[name=heroName]').val();
    if(name.length) {
      localStorage.setItem('name', name);
      document.location.hash='welcome';
    } else {
      alert('Tous les SuperHéros ont un surnom, pas vous ?')
    }
  });
};
