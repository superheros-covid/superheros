var Pages = Pages || {}
Pages.home=function() {
  console.log('Home');
  $main.html($('#home').html());
  if(typeof localStorage ==='undefined') {
    $('.sh-actions').html('Votre navigateur n\'est pas supporté :\'(');
  }
};
