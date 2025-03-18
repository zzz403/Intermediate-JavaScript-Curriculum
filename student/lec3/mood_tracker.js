let moodData = {};
let selectedCell = null;
let selectedDateStr = "";

function generateCalendar(year, month) {
  const calendarDiv = document.createElement('div');
  calendarDiv.className = 'calendar';
  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const title = document.createElement('h3');
  title.textContent = year + " " + monthNames[month];
  calendarDiv.appendChild(title);

  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  days.forEach(day => {
    const th = document.createElement('th');
    th.textContent = day;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  const firstDay = new Date(year, month, 1);
  const startingDay = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let date = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');
      if (i === 0 && j < startingDay || date > daysInMonth) {
        cell.textContent = "";
      } else {
        cell.textContent = date;
        const currentDate = new Date(year, month, date);
        const yyyy = currentDate.getFullYear();
        const mm = String(currentDate.getMonth() + 1).padStart(2, '0');
        const dd = String(currentDate.getDate()).padStart(2, '0');
        const dateStr = yyyy + '-' + mm + '-' + dd;
        cell.dataset.date = dateStr;
        cell.addEventListener('click', function() {
          if (selectedCell) {
            selectedCell.classList.remove('selected');
          }
          selectedCell = cell;
          selectedCell.classList.add('selected');
          selectedDateStr = cell.dataset.date;
          document.getElementById('selectedDate').textContent = selectedDateStr;
          if (moodData[selectedDateStr]) {
            document.getElementById('mood').value = moodData[selectedDateStr].mood;
            document.getElementById('note').value = moodData[selectedDateStr].note;
          } else {
            document.getElementById('mood').value = "";
            document.getElementById('note').value = "";
          }
        });
        date++;
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
    if (date > daysInMonth) break;
  }
  calendarDiv.appendChild(table);
  return calendarDiv;
}

function renderCalendars() {
  const calendarsDiv = document.getElementById('calendars');
  calendarsDiv.innerHTML = "";
  const today = new Date();
  for (let i = 2; i >= 0; i--) {
    const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
    calendarsDiv.appendChild(generateCalendar(d.getFullYear(), d.getMonth()));
  }
}

document.getElementById('cacheSaveBtn').addEventListener('click', function() {
  if (!selectedDateStr) {
    alert("Please select a date first!");
    return;
  }
  const mood = document.getElementById('mood').value;
  const note = document.getElementById('note').value;

  //TODO: Student need to complete this function to save the mood and note to the moodData object
});

document.getElementById('exportJsonBtn').addEventListener('click', function() {
  // TODO: Student need to complete this function to export the moodData object to a JSON file
});

document.getElementById('importJsonBtn').addEventListener('click', function() {
  // TODO: Student need to complete this function to import the moodData object from a JSON file
});

document.getElementById('fileInput').addEventListener('change', function(event) {
  // TODO: Student need to complete this function to read the JSON file and update the moodData object
});

renderCalendars();