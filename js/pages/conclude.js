var Pages = Pages || {}
Pages.conclude=function() {
  $body.attr('class', 'bg-linear-gradient');
  $main.html($('#conclude').html());

  var team = teamNeeded();
  $main.find('.colored-cmask').attr('src', '/img/colors_decline/'+team+'/cmask.png');
  $main.find('.colored-virus').attr('src', '/img/colors_decline/'+team+'/virus.png');
  $main.find('.colored-trophy').attr('src', '/img/colors_decline/'+team+'/trophy.png');
  $main.find('.colored-number').attr('class', 'text-team-'+team);

  $main.find('.colored-number').attr('class', 'text-team-'+team);

  /* Increment life counter */
  var savePeople = parseFloat(localStorage.getItem('savePeople') || 0);
  var displaySave = 1;
  if(savePeople>1){
    displaySave = Math.round(savePeople);
  }
  $main.find('#lifeCount').text(Math.round(displaySave));

  var dateLastTrophy = localStorage.getItem('lastTrophy');
  var today = new Intl.DateTimeFormat('en-US').format(new Date());

  if (dateLastTrophy != today){
    var lifes = parseFloat(localStorage.getItem('lifes') || 0);
    lifes += savePeople;
    localStorage.setItem('lifes', lifes);
    localStorage.setItem('lastTrophy', today);
  }
};
