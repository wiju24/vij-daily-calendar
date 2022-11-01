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
    } else if (hourId === currenttime) {
      $(this).removeClass('yesterday','tomorrow');
      $(this).addClass('now');
    } else {
      $(this).removeClass('yesterday', 'now');
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
$('#time13 .type-tasks').val(localStorage.getItem('time13'));
$('#time14 .type-tasks').val(localStorage.getItem('time14'));
$('#time15 .type-tasks').val(localStorage.getItem('time15'));
$('#time16 .type-tasks').val(localStorage.getItem('time16'));
$('#time17 .type-tasks').val(localStorage.getItem('time17'));
$('#time18 .type-tasks').val(localStorage.getItem('time18'));



setTimeout(function () {
  location = '';
}, 1000 * 60);