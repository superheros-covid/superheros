var Pages = Pages || {}
Pages.welcomeTeam=function() {
  var team = teamNeeded();
  if (!team) {
    return;
  }
  console.log('welcomeTeam');
  $body.attr('class', 'bg-linear-gradient page-welcomeTeam');
  $main.html($('#welcomeTeam').html());
  $main.find('.colored-mask').attr('src', '/img/colors_decline/'+team+'/mask.png');
  $main.find('.text-color-team').html(ucFirst(getTeamName(true, false)))
};
