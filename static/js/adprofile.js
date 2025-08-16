document.addEventListener('DOMContentLoaded', () => {
  const nameElement = document.getElementById('adminname');
  const positionElement = document.getElementById('adminp');
  const graduationElement = document.getElementById('adming');
  const facebookElement = document.getElementById('Facebook');
  const gmailElement = document.getElementById('gmail');
  const linkedinElement = document.getElementById('LinkedIn');
  const numberElement = document.getElementById('number');
  const idElement = document.getElementById('id');

  // Check if 'adminName' is available in local storage
  const storedadminName = localStorage.getItem('adminname');
  if (storedadminName) {
      nameElement.textContent = storedadminName;
  }

  // Calendar rendering logic
  const currentMonthElement = document.getElementById('currentMonth');
  const daysContainer = document.querySelector('.days');

  let currentDate = new Date();

  function renderCalendar() {
      const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
      const daysInMonth = lastDayOfMonth.getDate();
      const startingDay = firstDayOfMonth.getDay();
      const weekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
      
      currentMonthElement.textContent = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

      // Render the calendar grid with task input/checkbox elements
      generateCalendarGrid(daysInMonth);
  }

  function generateCalendarGrid(numDays) {
      daysContainer.innerHTML = '';
      for (let i = 0; i < numDays; i++) {
          const dayDiv = document.createElement('div');
          dayDiv.classList.add('day');
          const dayContentDiv = document.createElement('div');
          dayContentDiv.classList.add('day-content');
          dayContentDiv.appendChild(document.createTextNode(i + 1));
          const taskInput = document.createElement('input');
          taskInput.type = 'text';
          taskInput.placeholder = 'Write your tasks here...';
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          dayContentDiv.appendChild(taskInput);
          dayContentDiv.appendChild(checkbox);
          dayDiv.appendChild(dayContentDiv);
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
});
