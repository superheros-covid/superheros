var Pages = Pages || {}
Pages.trophy=function() {
  $body.attr('class', 'bg-linear-gradient');
  $main.html($('#trophy').html());

  var team = teamNeeded();
  var savedLifes = parseFloat(localStorage.getItem('lifes') || 0);

  $main.find('.lifes-value').attr('class', 'circle lifes-value text-team-'+team);
  $main.find('.lifes-value')[0].childNodes[0].nodeValue= Math.round(savedLifes);

  $main.find('.trophy-wrapper-header').attr('class', 'trophy-wrapper-header bg-'+team);

  levels = [1, 3, 5, 10, 15, 20, 25, 30, 40, 50, 75, 100, 150, 200];
  trophies = [];
  for(i=0;i<this.levels.length;i++){
    if(levels[i] <= savedLifes){
      trophies.push(i);
    }

    if(levels[i] > savedLifes){break;}
  }

  var nbIterate = Math.min(4, trophies.length); /* Get only the 4 last trophy */
  for(i=0; i<nbIterate; i++){
    levelIndex = trophies.pop();
    imageIndex = levelIndex+1; /* levelIndex=0 <=> level 1 / image trophy_1.png */
    var img = new Image();
    img.src = '/img/colors_decline/'+team+'/trophy_'+imageIndex+'.png';
    $main.find('.trophy-wrapper').append(img); 
  }
};