var Pages = Pages || {}
Pages.challenge=function() {
  $main.html($('#challenge').html());
  $body.attr('class', 'page-challenge bg-linear-gradient');
  $main.find('.colored-roue').attr('src', '/img/colors_decline/'+team+'/roue.png');

  $('#roue').on('click', function() {
    taskIds = ["one", "two", "three"];
    for(let i=0;i<taskIds.length; i++){
      id = taskIds[id];
      var storedTask = localStorage.getItem('task'+id);
      if (storedTask == null){
        randomTask = getRandomActivity();
        $('input[name=task'+id+']').val(randomTask);
      }
    }

  });

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function validateTask(id){
    var taskInput = $('input[name=task'+id+']').val();
    if(taskInput.length) {
      localStorage.setItem('task'+id, taskInput);

      tasksCounter = parseInt(localStorage.getItem('hasTask') || 0);
      tasksCounter += 1;
      localStorage.setItem('hasTask', tasksCounter);

      if(tasksCounter == 0) {
        document.location.hash='challenge';
      }
    }
  }

  function getRandomActivity(){
    activities = ["Regardez un film/épisode de série", "Écoutez un podcast", "Débutez un cours en ligne (MOOC)", "Lisez le chapitre d’un livre", "Raconter à l’écrit votre confinement", "Faites 10 minutes de méditation", "Téléphoner à un proche", "Faites un peu de repassage", "Nettoyez les vitres", "Passez l’aspirateur", "Faites une séance de fitness/yoga", "Réfléchissez à vos futurs projets", "Triez et rangez un placard", "Faites quelques photos de votre quotidien", "Faites un peu de couture", "Dessinez ou faites de la peinture", "Grand nettoyage de printemps", "Démarrez un projet personnel", "Créez un album de vos meilleurs photos", "Triez vos vetements"];
    randomId = getRandomArbitrary(0, activities.length);
    return activities[randomId];
  }

  $('#form-submit').on('click', function() {
    var taskOne = $('input[name=taskone]').val();
    var taskTwo = $('input[name=tasktwo]').val();
    var taskThree = $('input[name=taskthree]').val();
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