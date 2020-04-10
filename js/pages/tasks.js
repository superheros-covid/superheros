var Pages = Pages || {}
Pages.tasks=function() {
  $main.html($('#tasks').html());
  $body.attr('class', 'page-tasks bg-linear-gradient');

  /* show only non-empy task */
  if (localStorage.getItem('taskone').length) {
    $main.find('#one').show();
  }
  if (localStorage.getItem('tasktwo').length) {
    $main.find('#two').show();
  }
  if (localStorage.getItem('taskthree').length) {
    $main.find('#three').show();
  }

 };

function start(taskId){
  var domElement = $main.find('#'+taskId);
  if (domElement.hasClass('completed') == false){
    domElement.removeClass("unactive")
    domElement.find(".btn-action")[0].hidden = false;
    domElement.find(".btn-action")[1].hidden = false;
  }
}

function cancel(taskId){
  var domElement = $main.find('#'+taskId);
  domElement.find(".btn-action")[0].hidden = true;
  domElement.find(".btn-action")[1].hidden = true;
  domElement.addClass("unactive")
}

function achieve(taskId){
  incrementLocalStorageEntry('finishedTasks', 1);
  incrementLocalStorageEntry('score', 5);
  incrementLocalStorageEntry('hasTask', -1);

  $main.find('#'+taskId).hide();
  taskLabel = localStorage.getItem('task'+taskId);
  localStorage.setItem('task'+taskId, '');

  if(taskLabel.search('film') > 0){
    incrementLocalStorageEntry('art_score', 1);
  } else {
    if(taskLabel.search('Téléphoner') > 0){
      incrementLocalStorageEntry('com_score', 1);
    } else {
      if(taskLabel.search('yoga') > 0 || taskLabel.search('méditation') > 0){
        incrementLocalStorageEntry('spo_score', 1);
      } else {
        var artActivitiesKeywords = new RegExp('podcast|livre|photo|peinture|projet|cours|écrit', 'g');
        if (artActivitiesKeywords.test(taskLabel)) {
          incrementLocalStorageEntry('art_score', 1);
        } else {
          incrementLocalStorageEntry('hom_score', 1);
        }
      }
    }
  }
}