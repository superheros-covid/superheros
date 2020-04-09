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

  levels = [3, 5, 10, 15, 20, 25, 30, 40, 50, 75, 100, 150, 200];
  if(savePeople>1){
    displaySave = Math.round(savePeople);
  }
  $main.find('#lifeCount').text(Math.round(displaySave));

  var datelastConclude = localStorage.getItem('lastConclude');
  var today = new Intl.DateTimeFormat('en-US').format(new Date());

  if (datelastConclude != today){
    var oldLifes = parseFloat(localStorage.getItem('lifes') || 0);
    newLifes = oldLifes + savePeople;
    localStorage.setItem('lifes', newLifes);
    localStorage.setItem('lastConclude', today);
  }

  oldLevel = 0;
  newLevel = 0;
  for(i=0;i<this.levels.length;i++){
    if(levels[i] <= oldLifes){oldLevel = levels[i];}
    if(levels[i] <= newLifes){newLevel = levels[i];}
    if(levels[i] > newLifes){break;}
  }
  if(newLevel > oldLevel) {
    $main.find('#new-trophy').append("Félicitation! Vous avez obtenu un nouveau trophé! ");
  }
};
