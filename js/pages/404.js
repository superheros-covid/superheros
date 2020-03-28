var Pages = Pages || {}
Pages.notFound=function() {
  console.log('Not found');
  $body.attr('class', 'bg-linear-gradient');
  $main.html($('#notFound').html());
};
