var presentTime = moment();
var hourSectionEl = document.querySelector('.container');

$('#presentDay').text(presentTime.format('LLLL'));
$('.saveBtn').on('click', function () {
  var textValue = $(this).siblings('.type-tasks').val();
  var timeKey = $(this).parent().attr('id');

  localStorage.setItem(timeKey, textValue);
});

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

function auditTask() {
  var currenttime = presentTime.hours();

  $('.hour-section').each(function () {
    var timeId = parseInt($(this).attr('id').split("time")[1]);

    if (timeId < currenttime) {
      $(this).addClass('yesterday');
    } 
    else if (timeId === currenttime) {
      $(this).removeClass('yesterday');
      $(this).removeClass('tomorrow');
      $(this).addClass('present');
    } 
    else {
      $(this).removeClass('yesterday');
      $(this).removeClass('present');
      $(this).addClass('tomorrow');
    }
  });
}

auditTask();

setTimeout(function () {
  location = '';
}, 1000 * 60);