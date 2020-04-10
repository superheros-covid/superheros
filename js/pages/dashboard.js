var Pages = Pages || {}
Pages.dashboard=function() {
  var team = teamNeeded();
  if (!team) {
    return;
  }
  $main.html($('#dashboard').html());
  $body.attr('class', 'page-dashboard');
  $main.find('.colored-reward').attr('src', '/img/colors_decline/'+team+'/reward.png');
  $main.find('.colored-trophy').attr('src', '/img/colors_decline/'+team+'/trophy.png');

  /* Profile */
  var savedLifes = parseFloat(localStorage.getItem('lifes') || 0);
  heroLevel = 1;
  heroLevels = [0, 5, 20, 75, 200];
  for (i=0; i<heroLevels.length;i++){
    if(savedLifes >= heroLevels[i]){
      heroLevel = i + 1;
    }
  }
  $main.find('.colored-profile').attr('src', '/img/colors_decline/'+team+'/profile_'+heroLevel+'.png');

  if(localStorage.getItem('hasTask') > 0) {
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
