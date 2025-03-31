let moodData = {};
let selectedCell = null;
let selectedDateStr = "";

function generateCalendar(year, month) {
  const savedData = localStorage.getItem("moodData");
  if (savedData) {
    try {
      moodData = JSON.parse(savedData);
      console.log("Loaded mood data from localStorage");
    } catch (error) {
      console.error("Error loading mood data:", error);
      moodData = {};
    }
  }

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
        const currentDate = new Date(year, month, date);
        const yyyy = currentDate.getFullYear();
        const mm = String(currentDate.getMonth() + 1).padStart(2, '0');
        const dd = String(currentDate.getDate()).padStart(2, '0');
        const dateStr = yyyy + '-' + mm + '-' + dd;
        cell.dataset.date = dateStr;

        try {
          cell.textContent = moodData[dateStr].mood;
        } catch {
          cell.textContent = date;
        }
        
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
  moodData[selectedDateStr] = { mood, note };
  localStorage.setItem("moodData", JSON.stringify(moodData));
  alert("Saved successfully!");
  renderCalendars()
});

document.getElementById('exportJsonBtn').addEventListener('click', function() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(moodData, null, 4));
  const dlAnchorElem = document.createElement('a');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", "moodData.json");
  dlAnchorElem.click();
  alert("Exported successfully!");
});

document.getElementById('importJsonBtn').addEventListener('click', function() {
  document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      moodData = JSON.parse(e.target.result);
      alert("Imported successfully!");
    } catch (error) {
      alert("Invalid JSON file!");
    }
  };
  reader.readAsText(file);
});


renderCalendars();