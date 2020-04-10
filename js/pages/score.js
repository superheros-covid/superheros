var Pages = Pages || {}
Pages.score=function() {
  $body.attr('class', 'bg-linear-gradient');
  $main.html($('#score').html());

  $main.find('.score-value').attr('class', 'circle score-value text-team-'+team);

  var team = teamNeeded();

  var defaultBadge = new Image();
  defaultBadge.src = '/img/colors_decline/'+team+'/badge_1.png';
  $main.find('.medails-wrapper').append(defaultBadge);

  medailsLevel = [5, 10, 20, 30, 40, 50, 100];
  var score = parseFloat(localStorage.getItem('score') || 0);

  medails = [];
  for(i=0;i<this.medailsLevel.length;i++){
    if(medailsLevel[i] <= score){
      medails.push(medailsLevel[i]);
    }
    if(medailsLevel[i] > score){break;}
  }

  bestMedails = medails.pop();
  var img = new Image();
  img.src = '/img/colors_decline/'+team+'/badge_'+bestMedails+'.png';
  $main.find('.medails-wrapper').append(img);
};