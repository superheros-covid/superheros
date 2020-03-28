var Pages = Pages || {}
Pages.welcome=function() {
  console.log('welcome');
  $body.attr('class', 'bg-linear-gradient');
  $main.html($('#welcome').html());
};
