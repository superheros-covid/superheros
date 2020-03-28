var Pages = Pages || {}
Pages.notFound=function() {
  console.log('Not found');
  $main.html($('#notFound').html());
};
