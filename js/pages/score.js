var Pages = Pages || {}
Pages.score=function() {
  $body.attr('class', 'bg-linear-gradient');
  $main.html($('#score').html());
};