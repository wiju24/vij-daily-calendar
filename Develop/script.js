var presentTime = moment();
var hourSectionEl = document.querySelector('.container');

$('#presentDay').text(presentTime.format('LLLL'));
$('.saveTaskBtn').on('click', function () {
  var inputTextValue = $(this).siblings('.type-tasks').val();
  var hourLog = $(this).parent().attr('id');

  localStorage.setItem(hourLog, inputTextValue);
});

function performTask() {
  var currenttime = presentTime.hours();

  $('.hour-section').each(function () {
    var hourId = parseInt($(this).attr('id').split("time")[1]);

    if (hourId < currenttime) {
      $(this).addClass('yesterday');
    } 
    else if (hourId === currenttime) {
      $(this).removeClass('yesterday');
      $(this).removeClass('tomorrow');
      $(this).addClass('now');
    } 
    else {
      $(this).removeClass('yesterday');
      $(this).removeClass('now');
      $(this).addClass('tomorrow');
    }
  });
}

performTask();

$('#time8 .type-tasks').val(localStorage.getItem('time8'));
$('#time9 .type-tasks').val(localStorage.getItem('time9'));
$('#time10 .type-tasks').val(localStorage.getItem('time10'));
$('#time11 .type-tasks').val(localStorage.getItem('time11'));
$('#time12 .type-tasks').val(localStorage.getItem('time12'));
$('#time1 .type-tasks').val(localStorage.getItem('time1'));
$('#time2 .type-tasks').val(localStorage.getItem('time2'));
$('#time3 .type-tasks').val(localStorage.getItem('time3'));
$('#time4 .type-tasks').val(localStorage.getItem('time4'));
$('#time5 .type-tasks').val(localStorage.getItem('time5'));
$('#time6 .type-tasks').val(localStorage.getItem('time6'));



setTimeout(function () {
  location = '';
}, 1000 * 60);