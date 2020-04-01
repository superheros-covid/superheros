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
    domElement.find(".btn-action")[0].show();
    domElement.find(".btn-action")[1].show();
  }
}

function cancel(taskId){
  var domElement = $main.find('#'+taskId);
  domElement.find(".btn-action")[0].hide();
  domElement.find(".btn-action")[1].hide();
  domElement.addClass("unactive")
}

function achieve(taskId){
  var finishedTasks = parseInt(localStorage.getItem('finishedTasks') || 0);
  var score = parseInt(localStorage.getItem('score') || 0);
  finishedTasks += 1;
  score += 10;
  localStorage.setItem('finishedTasks', finishedTasks);
  localStorage.setItem('score', score);

  $main.find('#'+taskId).hide();
  localStorage.setItem('task'+taskId, '');
}