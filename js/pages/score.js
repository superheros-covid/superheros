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


  tv_score = parseInt(localStorage.getItem('tv_score') || 0);
  com_score = parseInt(localStorage.getItem('com_score') || 0);
  spo_score = parseInt(localStorage.getItem('spo_score') || 0);
  art_score = parseInt(localStorage.getItem('art_score') || 0);
  hom_score = parseInt(localStorage.getItem('hom_score') || 0);

  var categoryDone = 0;
  if(tv_score > 4) {
    var img = new Image();
    img.src = '/img/colors_decline/'+team+'/badge_tv.png';
    $main.find('.medails-wrapper').append(img);
    categoryDone += 1;
  }
  if(com_score > 4) {
    var img = new Image();
    img.src = '/img/colors_decline/'+team+'/badge_speak.png';
    $main.find('.medails-wrapper').append(img);
    categoryDone += 1;
  }
  if(spo_score > 4) {
    var img = new Image();
    img.src = '/img/colors_decline/'+team+'/badge_sport.png';
    $main.find('.medails-wrapper').append(img);
    categoryDone += 1;
  }
  if(art_score > 4) {
    var img = new Image();
    img.src = '/img/colors_decline/'+team+'/badge_art.png';
    $main.find('.medails-wrapper').append(img);
    categoryDone += 1;
  }
  if(hom_score > 4) {
    categoryDone += 1;
    if(categoryDone>4) {
      var img = new Image();
      img.src = '/img/colors_decline/'+team+'/badge_.png';
      $main.find('.medails-wrapper').append(img);
    } else {
      var img = new Image();
      img.src = '/img/colors_decline/'+team+'/badge_home.png';
      $main.find('.medails-wrapper').append(img);
    }
  }

};