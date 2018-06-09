document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady(){
  cordova.plugins.backgroundMode.setDefaults({
    title: "PPAPP",
    text: "Your portal to UC"
  });
  cordova.plugins.backgroundMode.enable();
  cordova.plugins.backgroundMode.excludeFromTaskList();
}
var swiper = new Swiper('.swiper-container', {});
swiper.allowSlidePrev=false;
$('#a').click(function(){
  swiper.allowSlidePrev=true;
  swiper.allowSlideNext=true;
  swiper.slideTo(0, 400);
  swiper.allowSlidePrev=false;
});
$('#b').click(function(){
  swiper.allowSlidePrev=true;
  swiper.allowSlideNext=true;
  swiper.slideTo(1, 400);
});
$('#c').click(function(){
  swiper.allowSlidePrev=true;
  swiper.allowSlideNext=true;
  swiper.slideTo(2, 400);
});
$('#d').click(function(){
  swiper.allowSlidePrev=true;
  swiper.allowSlideNext=true;
  swiper.slideTo(3, 400);
});
$('#soa').click(function(){
  swiper.allowSlidePrev=true;
  swiper.allowSlideNext=true;
  swiper.slideTo(3, 400);
});
$('#e').click(function(){
  swiper.allowSlideNext=true;
  swiper.allowSlidePrev=true;
  swiper.slideTo(4, 400);
  swiper.allowSlideNext=false;
  
});
$('.rcpt').click(function(){
  swiper.slideTo(6, 400);
});
var info = localStorage.getItem('user');
info = JSON.parse(info);
$(document).ready(function(){
  $('#prof').attr('src','http://nexus.uc-bcf.edu.ph/'+info[1].img);
  $('#name').html(info[1].fullname);
  $('#idnumber').html(info[1].id_number);
  $('#track').html(info[1].track);
  $('#section').html(info[1].section);
  for (var i = info[5].length-1; i >-1; i--) {
    $('#buudy2').append('<tr>');
    $('#buudy2').append('<td><center>'+info[5][i].date+'</center></td>');
    $('#buudy2').append('<td><center>'+convert(info[5][i].time)+'</center></td>');
    $('#buudy2').append('<td><center>'+info[5][i].sub_code+'</center></td>');
    switch(info[5][i].remarks){
      case "P":
      $('#buudy2').append('<td><center><div style="color:green">Present</div></center></td>');
      break;
      case "L":
      $('#buudy2').append('<td><center><div style="color:orange">Late</div></center></td>');
      break;
      case "A":
      $('#buudy2').append('<td><center><div style="color:red">Absent</div></center></td>');
      break;
    }
    $('#buudy2').append('</tr>');
  }
  for (var i = 1; i <= info[2][info[2].length-1].semester; i++) {
    var j;
    switch(i){
      case 1: 
      j=i+"st";
      break;
      case 2:
      j=i+"nd";
      break;
      case 3:
      j=i+"rd";
      break;
      case 4:
      case 5:
      case 6:
      j = i+"th";
      break;
    }
    if (i>3) {
      j = i+"th";
    }
    var insertMe = "<div id=\"term\" class=\"accordion\" style=\"height: 10%; padding-top: 10px; background-color: #3e7b5d;\" >"+j+" Term SY "+info[2][0].syfrom_to+"</div>";
    $('#contains').append(insertMe);
    var panel = '<div class="panel"><table class="table table-condensed" id="'+i+'"><tbody><tr id="title" style="background-color: #5bb187;"><th class="text-center" rowspan=2>Subject</th><th class="text-center">Grade</th></tr></tbody></table></div>';
    $('#contains').append(panel);
    for (var j = 0 ; j <= info[2].length-1; j++) {
      if (info[2][j].semester==i) {
        var tblval='<tr><td class="text-center">'+
        info[2][j].sub_code+'</td><td class="text-center">'+
        info[2][j].grade+'</td></tr>';
        $('#'+i).append(tblval);
      }
    }
  }
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {

    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }
  $("#pblnce").html(info[6][0].periodic_bal);
  $("#blnce").html(info[6][0].balance);
  $("#dsct").html(info[6][0].vouch_disc);
  $("#down").html(info[6][0].down_pay);
  for (var i = 1; i < 7; i++) {
    $("#Q"+i).html(info[6][0].periodic_bal);
  }
  var ko;
  var sm2 =info[3][0].semester;
  switch(sm2){
    case '1': 
    ko=sm2+"st";
    break;
    case '2':
    ko=sm2+"nd";
    break;
    case '3':
    ko=sm2+"rd";
    break;
    case '4':
    case '5':
    case '6':
    ko = sm2+"th";
    break;
  }
  var insertMe = "<div id=\"term\" style=\"height: 10%; padding-top: 10px;text-align:center; background-color: #3e7b5d;\">"+ko+" Semester SY "+info[3][0].syfrom_to+"</div>";
  $('.sch').append(insertMe);
  var panel = '<table class="table table-condensed" id="ins"><tbody><tr id="title" style="background-color: #5bb187;"><th class="text-center">Subject</th><th class="text-center">Units</th><th class="text-center">Schedule</th></tr></tbody></table>';
  $('.sch').append(panel);
  for (var j = 0 ; j <= info[3].length-1; j++) {
    var tblval2='<tr><td class="text-center">'+info[3][j].sub_code+'</td><td class="text-center">'+info[3][j].units+'</td><td class="text-center">'+info[3][j].schedule+'</td></tr>';
    $('#ins').append(tblval2);
  }
});
swiper.on('slideChangeTransitionEnd', function () {
  if(swiper.activeIndex==0){
    /*changer("#a");*/
    swiper.allowSlideNext=true;
    swiper.allowSlidePrev=false;
  }
  else if(swiper.activeIndex==1){
    /*changer("#b");*/
    swiper.allowSlidePrev=true;
    swiper.allowSlideNext=true;
  }
  else if(swiper.activeIndex==2){
    /*changer("#c");*/
    swiper.allowSlidePrev=true;
    swiper.allowSlideNext=true;
  }
  else if(swiper.activeIndex==3){
    /*changer("#d");*/
    swiper.allowSlidePrev=true;
    swiper.allowSlideNext=true;
  }
  else if(swiper.activeIndex==4){
    /*changer("#e");*/
    swiper.allowSlidePrev=true;
    swiper.allowSlideNext=false;
  }
  else if(swiper.activeIndex==5){
    /*changer("#c");*/
    swiper.allowSlidePrev=false;
    swiper.allowSlideNext=false;
  }
  else if(swiper.activeIndex==6){
    /*changer("#d");*/
    swiper.allowSlidePrev=false;
    swiper.allowSlideNext=false;
  }

});
swiper.on('slideChangeTransitionStart', function () {
  if(swiper.activeIndex==0){
    changer("#a");
  }
  else if(swiper.activeIndex==1){
    changer("#b");
  }
  else if(swiper.activeIndex==2){
    changer("#c");
  }
  else if(swiper.activeIndex==3){
    changer("#d");
  }
  else if(swiper.activeIndex==4){
    changer("#e");
  }
  else if(swiper.activeIndex==5){
    changer("#c");
  }
  else if(swiper.activeIndex==6){
    changer("#d");
  }

});
function changer(c) {
  $("#a").css("background-color","#478c6a");
  $("#b").css("background-color","#478c6a");
  $("#c").css("background-color","#478c6a");
  $("#d").css("background-color","#478c6a");
  $("#e").css("background-color","#478c6a");
  $(c).css("background-color","#3e7b5d");
}
var d = new Date();
var curMnth = d.getMonth()+1;
var curDay = d.getDate();
if (curMnth < 10) {
  curMnth = "0"+curMnth;
}
if (curDay < 10) {
  curDay = "0"+curDay;
}
$('#month').val(curMnth);
$('#days').val(curDay);
var info = localStorage.getItem('user');
info = JSON.parse(info);
function loadlink(){
  var selectedDay = $('#month').val()+"-"+$('#days').val();
  $.ajax({
    type: "post",
    url: "http://nexus.uc-bcf.edu.ph/process.php",
    data: {
      user_index : info[1].user_index
    },
    cache:false,
    timeout: 20000,
    success:function(data){
      var id;
      var ch;
      time = function (num) {
        if (num == 1) {
          ch="Your Child has arrived to school!"
        }else{
          ch="Your Child has left the school!";
        }
        cordova.plugins.notification.local.schedule({
          id: 1,
          title: "PPAPP",
          text: ch,
          badge: 1,
          data: { test: id }
        });
      }
      var userInfo = JSON.parse(data);
      var newLength = userInfo[4].length;
      if(newLength != info[4].length){
        localStorage.setItem('user', JSON.stringify(userInfo));
        info = localStorage.getItem('user');
        info = JSON.parse(info); 
        if (info[4][info[4].length -1].date_in.substring(5,10) == selectedDay) {
          time(1);
          $('#buudy').append('</tr>');
          $('#buudy').append('<tr>');
          $('#buudy').append('<td><center>'+convert(info[4][info[4].length -1].time_in.substring(0,5))+'</center></td>');
          try{

            $('#buudy').append('<td><center>'+convert(info[4][info[4].length -1].time_out.substring(0,5))+'</center></td>');
          } catch(err){
            var o = 1;
          }

        }
      }
      if (userInfo[4][userInfo[4].length-1].time_out != null) {
        info = localStorage.getItem('user');
        info = JSON.parse(info); 
        if (info[4][info[4].length-1].time_out == null) {
          time(0);
          localStorage.setItem('user', JSON.stringify(userInfo));
          info = localStorage.getItem('user');
          info = JSON.parse(info);
          $('#buudy').append('<td><center>'+convert(info[4][info[4].length -1].time_out.substring(0,5))+'</center></td>');
        }
      }

    }
  });
}

$(document).ready(function(){
  var selectedDay = $('#month').val()+"-"+$('#days').val();
  $('#buudy').append('<tr><th><center>Time In</center></th><th><center>Time Out</center></th></tr>');
  for (var i = 0; i < info[4].length; i++) {
    /*alert(info[4][i].date_in.substring(5,10));*/
    if (info[4][i].date_in.substring(5,10) == selectedDay) {

      $('#buudy').append('<tr>');
      $('#buudy').append('<td><center>'+convert(info[4][i].time_in.substring(0,5))+'</center></td>');
      try{
        $('#buudy').append('<td><center>'+convert(info[4][i].time_out.substring(0,5))+'</center></td>');
      } catch(err){
        $('#buudy').append('');
      }
      $('#buudy').append('</tr>');
    }
  }
  $('#classatt').click(function(){
    swiper.slideTo(5, 400);
  });
  $('.logMeOut').click(function(){
    $.ajax({
      type: "post",
      url: "http://nexus.uc-bcf.edu.ph/logout.php",
      data: {
        user_index : info[1].user_index
      }
    });
    localStorage.clear();
    window.location.href="../index.html";
    cordova.plugins.backgroundMode.disable();
  });
  $('#month').change(function(){
    switch($('#month').val()){
      case "1":
      case '3':
      case '5':
      case '7':
      case '8':
      case '10':
      case '12':
      $('#days').find('option').remove().end();
      for (var i = 1; i < 32; i++) {
        if (i < 10) {
          $('#days').append('<option value="0'+i+'">'+i+'</option>');
        }
        else{
          $('#days').append('<option value="'+i+'">'+i+'</option>');
        }
      }
      break;
      case '4':
      case '6':
      case '9':
      case '11':
      $('#days').find('option').remove().end();
      for (var i = 1; i < 31; i++) {
        if (i < 10) {
          $('#days').append('<option value="0'+i+'">'+i+'</option>');
        }
        else{
          $('#days').append('<option value="'+i+'">'+i+'</option>');
        }
      }
      break;
      case '2':
      $('#days').find('option').remove().end();
      for (var i = 1; i < 29; i++) {
        if (i < 10) {
          $('#days').append('<option value="0'+i+'">'+i+'</option>');
        }
        else{
          $('#days').append('<option value="'+i+'">'+i+'</option>');
        }
      }
      break;
    }
  });
  $('#finder').click(function(){
    var selectedDay = $('#month').val()+"-"+$('#days').val();
    /*alert(selectedDay);*/

    $('#buudy').find('td').remove().end();
    $('#buudy').find('tr').remove().end();
    $('#buudy').append('<tr><th><center>Time In</center></th><th><center>Time Out</center></th></tr>');
    for (var i = 0; i < info[4].length; i++) {
      /*alert(info[4][i].date_in.substring(5,10));*/
      if (info[4][i].date_in.substring(5,10) == selectedDay) {

        $('#buudy').append('<tr>');
        $('#buudy').append('<td><center>'+convert(info[4][i].time_in.substring(0,5))+'</center></td>');
        try{
          $('#buudy').append('<td><center>'+convert(info[4][i].time_out.substring(0,5))+'</center></td>');
        } catch(err){
          $('#buudy').append('<td><center></center></td>');
        }
        $('#buudy').append('</tr>');
      }
    }
  });


});

function convert(input) {
  return moment(input, 'HH:mm').format('h:mm A');
}

loadlink(); // This will run on page load
setInterval(function(){
    loadlink() // this will run after every 5 seconds
  }, 10000);
$(document).ready(function() {
        //registering the back button
        document.addEventListener("backbutton", onBackKeyDown, false); 
      });
function onBackKeyDown(e) {
  var o = 'o';
}