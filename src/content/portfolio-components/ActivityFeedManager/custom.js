var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var manager = {
  firstName:"John", 
  lastName:"Arbuckle", 
  email:"John.Arbuckle@quicksearch.se",
  role:"Manager",
  actionManager:0
};

$('#inputFirstName').val(manager.firstName);
$('#Userbutton span').text(manager.firstName);
$('#inputLastName').val(manager.lastName);
$('#inputEmail').val(manager.email);
$('#inputRoleName').val(manager.role);

//Hämtar namnet på användaren
  $('#SaveName').click(function() {
    var UserName = $('#inputFirstName').val();
    $("#Userbutton span").text(UserName);
  });

$(document).ready(function () {

  //Gör så att knapparna funkar 
  $('.group .btn').bind('click', function() {
  //Tar bort alla 'aktiv' classer från knapparna i gruppen
    $(this).siblings().removeClass('active')
    // lägger till active klassen
    $(this).addClass('active');
    var statetext = $(this).text();
    var statecolor = $(this).attr('id');
    var lastClass = $('a.active #currentstate').attr('class').split(' ').pop();
    $("a.active #currentstate").removeClass(lastClass).addClass('badge-' + statecolor).attr({'title': statetext, 'data-original-title': statetext});
  });

  //Aktiverar tooltips från Bootstrap
  $('[data-toggle="tooltip"]').tooltip()

  //Triggar modal elementet när man klickar på sitt namn 
  $('#Userpage').on('shown.bs.modal', function () {
    $('#Userbutton').trigger('focus')
  })

});

$(document).ready(function(){
    $("#team").click(function(){
        $("div[type='global']").hide();
        $(this).siblings().removeClass('active')
        $(this).addClass('active');
    });
    $("#global").click(function(){
        $("div[type='global']").show();
        $(this).siblings().removeClass('active')
        $(this).addClass('active');
    });
});

//Progressbaren!

var data = {
    "progress": {
        "1": {
            "progressState": [{
                "num": "1",
            }, {
                "num": "2",
            }, {
                "num": "3",
            }, {
                "num": "4",
            }]
        }
    }
}
    
var numProgress = 0, number=0;
for (var sect in data.progress){
    var questions = data.progress[sect].progressState;
    for (var j = 0; j < questions.length; j++){
        numProgress++;
    }
}

function updateProgress() {
  number++;
  var width = number / numProgress * 100;
  $('.progress-bar').css({'width':width + '%'}).text(width + '%');
}

function lowerProgress() {
  number--;
  var width = number / numProgress * 100;
  $('.progress-bar').css({'width':width + '%'}).text(width + '%');
}

  $('.group .btn-outline-success').on('click', function(){
    updateProgress();
  });

  $('.group .btn-outline-danger').on('click', function(){
    lowerProgress();
  });

