var Pages = Pages || {}
Pages.capacity=function() {
  $main.html($('#capacity').html());
  $body.attr('class', 'page-capacity bg-linear-gradient');
  var symptoms={
    fever: false,
    cough: false,
    fine: false
  };
  $main.find('#fever').on('click', function(){
    symptoms.fever = !symptoms.fever;
    setButtonsState();
  });
  $main.find('#cough').on('click', function(){
    symptoms.cough = !symptoms.cough;
    setButtonsState();
  });
  $main.find('#fine').on('click', function(){
    symptoms.fine = !symptoms.fine;
    setButtonsState();
  });
  function setButtonsState() {
    $main.find('#fever, #cough, #fine').removeClass('selected').removeAttr('disabled');
    if (symptoms.fine) {
      $main.find('#fever, #cough').attr('disabled', 'disabled');
      $main.find('#fine').addClass('selected');
    } else {
      if(symptoms.fever) {
        $main.find('#fever').addClass('selected');
        $main.find('#fine').attr('disabled', 'disabled');
      }
      if(symptoms.cough) {
        $main.find('#cough').addClass('selected');
        $main.find('#fine').attr('disabled', 'disabled');
      }
    }
    if(!symptoms.fever && !symptoms.fine && !symptoms.cough) {
      $main.find('#setTeam').attr('disabled', 'disabled');
    } else {
      $main.find('#setTeam').removeAttr('disabled');
    }
  }
  setButtonsState();
  $main.find('#setTeam').on('click', function () {
    if (symptoms.fine) {
      localStorage.setItem('team', 'blue');
    } else {
      if (symptoms.fever) {
        if (symptoms.cough) {
          localStorage.setItem('team', 'pink');
        } else {
          localStorage.setItem('team', 'orange');
        }
      } else {
        localStorage.setItem('team', 'yellow');
      }
    }
    document.location.hash="welcomeTeam"
  })
};
