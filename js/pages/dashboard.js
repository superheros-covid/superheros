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

  if(localStorage.getItem('hasTask') == 1) {
    $main.find('#btn-tasks').show();
  }

  var save = 0;
  switch(team){
    case "blue": save=6.4; break;
    case "orange": save=0.6; break;
    case "pink": save=0.2; break;
    case "yellow": save=0.8; break;
  }
  localStorage.setItem('savePeople', save);
  if(save>2){
    message = "Si vous restez chez vous aujourd'hui, vous contribuerez à sauver "+ Math.round(save)+" vies.";
  } else {
    message = "Si vous restez chez vous aujourd'hui, vous contribuerez à sauver une vie";
  }
  $main.find('#life-counter').append(message);

};
