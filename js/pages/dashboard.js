var Pages = Pages || {}
Pages.dashboard=function() {
  var team = teamNeeded();
  if (!team) {
    return;
  }
  $main.html($('#dashboard').html());
  $body.attr('class', 'page-dashboard');
  $main.find('.colored-profile').attr('src', '/img/colors_decline/'+team+'/profile.png');
  $main.find('.colored-reward').attr('src', '/img/colors_decline/'+team+'/reward.png');
  $main.find('.colored-trophy').attr('src', '/img/colors_decline/'+team+'/trophy.png');
};
