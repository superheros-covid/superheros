var Pages = Pages || {}
Pages.gain=function() {
  var team = teamNeeded();
  if (!team) {
    return;
  }
  console.log('gain');
  $main.html($('#gain').html());
  $body.attr('class', 'page-gain');
  $main.find('.colored-badge').attr('src', '/img/colors_decline/'+team+'/badge.png');
};
