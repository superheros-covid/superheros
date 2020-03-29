var Pages = Pages || {}
Pages.challenge=function() {
  $main.html($('#challenge').html());
  $body.attr('class', 'page-challenge bg-linear-gradient');
};