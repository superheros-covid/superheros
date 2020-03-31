var Pages = Pages || {}
Pages.tasks=function() {
  $main.html($('#tasks').html());
  $body.attr('class', 'page-tasks bg-linear-gradient');

  /* show only non-empy task */
  if (localStorage.getItem('taskone').length) {
    $main.find('#one').hidden = false;
  }
  if (localStorage.getItem('tasktwo').length) {
    $main.find('#two').hidden = false;
  }
  if (localStorage.getItem('taskthree').length) {
    $main.find('#three').hidden = false;
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
  var finishedTasks = parseInt(localStorage.getItem('finishedTasks') || 0);
  var score = parseInt(localStorage.getItem('score') || 0);
  finishedTasks += 1;
  score += 10;
  localStorage.setItem('finishedTasks', finishedTasks);
  localStorage.setItem('score', score);

  var domElement = $main.find('#'+taskId);
  domElement.removeClass("undone");
  domElement.addClass("completed");
  domElement.find(".btn-action")[0].hidden = true;
  domElement.find(".btn-action")[1].hidden = true;
  domElement.hidden = true;
  localStorage.setItem('task'+taskId, '');
}