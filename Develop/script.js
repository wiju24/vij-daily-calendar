var presentTime = moment();
var hourSectionEl = document.querySelector('.container');
let _retrieveUserData = JSON.parse(localStorage.getItem('taskData'))||[];

$('#presentDay').text(presentTime.format('LLLL'));
$('.saveTaskBtn').on('click', function () {
  var inputTextValue = $(this).siblings('.type-tasks').val();
  var hourLog = $(this).parent().attr('id');

  var taskObject={
    id:hourLog,
    value:inputTextValue
  }

  var taskIndex=_retrieveUserData.findIndex(timeslot=>timeslot.id==hourLog)

  if(taskIndex!==-1){
    _retrieveUserData[taskIndex]=taskObject
  }else{
    _retrieveUserData.push(taskObject)
  }
    
  localStorage.setItem('taskData',JSON.stringify( _retrieveUserData));
});

function setTasks(){
  const timeslots = document.querySelectorAll(".hour-section");

  timeslots.forEach(function(timeslot){

  var id=timeslot.id

  var value=_retrieveUserData.find(timeslot=>timeslot.id==id)?.value

  var textarea=timeslot.children[1]

  if(value!=undefined){
    textarea.innerText=value
  }})
};

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
setTasks();
presentDailyTask();