var Pages = Pages || {}
Pages.gain=function() {
  console.log('gain');
  $main.html($('#gain').html());
  $body.attr('class', 'page-gain');
};
