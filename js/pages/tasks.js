var Pages = Pages || {}
Pages.tasks=function() {
  $main.html($('#tasks').html());
  $body.attr('class', 'page-tasks');
  $body.attr('class', 'page-capacity bg-linear-gradient');
};