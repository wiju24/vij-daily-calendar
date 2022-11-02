var presentTime = moment();
var hourSectionEl = document.querySelector('.container');

$('#presentDay').text(presentTime.format('LLLL'));
$('.saveTaskBtn').on('click', function () {
  var inputTextValue = $(this).siblings('.type-tasks').val();
  var hourLog = $(this).parent().attr('id');

  localStorage.setItem(hourLog, inputTextValue);
});

function presentDailyTask() {
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

presentDailyTask();

// $('#time8 .type-tasks').val(localStorage.getItem('time8'));
// $('#time9 .type-tasks').val(localStorage.getItem('time9'));
// $('#time10 .type-tasks').val(localStorage.getItem('time10'));
// $('#time11 .type-tasks').val(localStorage.getItem('time11'));
// $('#time12 .type-tasks').val(localStorage.getItem('time12'));
// $('#time13 .type-tasks').val(localStorage.getItem('time13'));
// $('#time14 .type-tasks').val(localStorage.getItem('time14'));
// $('#time15 .type-tasks').val(localStorage.getItem('time15'));
// $('#time16 .type-tasks').val(localStorage.getItem('time16'));
// $('#time17 .type-tasks').val(localStorage.getItem('time17'));
// $('#time18 .type-tasks').val(localStorage.getItem('time18'));

let _taskData = [
  {id: time8},
  {id: time9},
  {id: time10},
  {id: time11},
  {id: time12},
  {id: time13},
  {id: time14},
  {id: time15},
  {id: time16},
  {id: time17},
  {id: time18},
]

localStorage.setItem('taskData', JSON.stringify(_taskData));

let _retrieveUserData = JSON.parse(localStorage.getItem('taskData'));

setTimeout(function () {
  location = '';
}, 1000 * 60);