var Pages = Pages || {}
Pages.home=function() {
  console.log('Home');
  $main.html($('#home').html());
  $body.attr('class', 'bg-linear-gradient');
  if(typeof localStorage ==='undefined') {
    $('.sh-actions').html('Votre navigateur n\'est pas supporté :\'(');
  }

};
