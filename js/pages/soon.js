var Pages = Pages || {}
Pages.soon=function() {
  var team = teamNeeded();
  if (!team) {
    return;
  }
  console.log('soon');
  $body.attr('class', 'bg-linear-gradient page-soon');
  $main.html($('#soon').html());
};
