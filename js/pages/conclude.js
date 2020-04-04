var Pages = Pages || {}
Pages.conclude=function() {
  $body.attr('class', 'bg-linear-gradient');
  $main.html($('#conclude').html());

  $main.find('.colored-cmask').attr('src', '/img/colors_decline/'+team+'/cmask.png');
  $main.find('.colored-virus').attr('src', '/img/colors_decline/'+team+'/virus.png');
  $main.find('.colored-trophy').attr('src', '/img/colors_decline/'+team+'/trophy.png');
  $main.find('.colored-number').attr('class', 'text-team-'+team);
};
