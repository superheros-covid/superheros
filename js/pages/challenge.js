var Pages = Pages || {}
Pages.challenge=function() {
  $main.html($('#challenge').html());
  $body.attr('class', 'page-challenge bg-linear-gradient');

  $('#form-submit').on('click', function() {
    var taskOne = $('input[name=taskOne]').val();
    var taskTwo = $('input[name=taskTwo]').val();
    var taskThree = $('input[name=taskThree]').val();
    var tasksCounter = 0;
    if(taskOne.length) {
      localStorage.setItem('taskone', taskOne);
      tasksCounter += 1;
    }
    if(taskTwo.length) {
      localStorage.setItem('tasktwo', taskTwo);
      tasksCounter += 1;
    }
    if(taskThree.length) {
      localStorage.setItem('taskthree', taskThree);
      tasksCounter += 1;
    }
    if(tasksCounter == 0) {
      document.location.hash='dashboard';
    } else {
      localStorage.setItem('hasTask', 1);
      document.location.hash='challenge';
    }
  });
};