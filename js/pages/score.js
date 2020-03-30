var Pages = Pages || {}
Pages.score=function() {
  $body.attr('class', 'bg-linear-gradient page-soon');
  $main.html($('#score').html());
};