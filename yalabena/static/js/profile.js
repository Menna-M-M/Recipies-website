// //   return {
// //     numDays: numDays,
// //     currentMonth: currentMonth
// //   };
// // }
// // const calendarInfo = generateCalendar();
// //  console.log("Number of days:", calendarInfo.numDays);
// //  console.log("Current month:", calendarInfo.currentMonth);

// Get the name element in the profile page
var nameElement = document.getElementById('adminname');
var positionElement = document.getElementById('adminp');
var GraduationElement = document.getElementById('adming');
var facebookElement = document.getElementById('facebook');
var gmailElement = document.getElementById('gmail');
var linkedinElement = document.getElementById('Linkedin');
var numberElement = document.getElementById('number');
var idElement = document.getElementById('id');
// Function to update the admin's name
function updateUserName(name) {
    nameElement.textContent = name;
}

// Check if 'adminName' is available in local storage
var storedadminName = localStorage.getItem('adminname');

// If 'adminName' is available, update the profile with it
if (storedadminName) {
    updateadminName(storedadminName);
}

const currentMonthElement = document.getElementById('currentMonth');
const daysContainer = document.querySelector('.days');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const addTodoBtn = document.getElementById('addTodoBtn');

let currentDate = new Date();

function renderCalendar() {
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDay = firstDayOfMonth.getDay();
  const weekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  
  currentMonthElement.textContent = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  // Shift the weekdays array based on the starting day of the month
  const shiftedWeekdays = [...weekdays.slice(startingDay), ...weekdays.slice(0, startingDay)];
  
  // Render the weekdays
  const weekdaysList = document.querySelector('.weekdays');
  weekdaysList.innerHTML = ''; // Clear previous weekdays
  shiftedWeekdays.forEach(day => {
    const li = document.createElement('li');
    li.textContent = day;
    weekdaysList.appendChild(li);
  });

  // Render the calendar grid with task input/checkbox elements
  generateCalendarGrid(daysInMonth);
}

function generateCalendarGrid(numDays) {
  // Clear previous calendar days
  daysContainer.innerHTML = '';
    
  // Loop through each day of the month
  for (let i = 0; i < numDays; i++) {
    // Create a div to hold the day's tasks
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('day');
    
    // Create an input for writing tasks
    const taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.placeholder = 'Write your tasks here...';
    
    // Create a checkbox for completing tasks
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    // Create a div to hold the day's number and task input/checkbox
    const dayContentDiv = document.createElement('div');
    dayContentDiv.classList.add('day-content');
    
    // Append the day number, task input, and checkbox to the day content div
    dayContentDiv.appendChild(document.createTextNode(i + 1)); // Day number
    dayContentDiv.appendChild(taskInput);
    dayContentDiv.appendChild(checkbox);
    
    // Append the day content div to the day div
    dayDiv.appendChild(dayContentDiv);
    
    // Append the day div to the days container
    daysContainer.appendChild(dayDiv);
  }
}

renderCalendar();

document.getElementById('prevMonthBtn').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

document.getElementById('nextMonthBtn').addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

const calendarInfo = generateCalendar();
console.log("Number of days:", calendarInfo.numDays);
console.log("Current month:", calendarInfo.currentMonth);
