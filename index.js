// function colourchange(){
//     var element = document.querySelector('#clickedbutton');
//     element.textContent = "Master the blaster";
//     element.classList.add('button');
// }
var Employee = [
  {
    category: "work",
    sub_category: "meeting",
    duration: "2hrs",
    task: "watching on the trade market.",
  },

  {
    category: "personal work",
    sub_category: "meeting",
    duration: "4hrs",
    task: "complete my client meeting.",
  },

  {
    category: "work",
    sub_category: "project work",
    duration: "10hrs",
    task: "creating a filtering app using js.",
  },

  {
    category: " personal work",
    sub_category: "meeting",
    duration: "1hrs",
    task: "group discussion.",
  },

  {
    category: "work",
    sub_category: "project work",
    duration: "22hrs",
    task: "MERN project.",
  },

  {
    category: "personal work",
    sub_category: "project work",
    duration: "12hrs",
    task: "creating a to do list.",
  },

  {
    category: "personal work",
    sub_category: " project work",
    duration: "5hrs",
    task: "sleeping and eating some food.",
  },

  {
    category: "work",
    sub_category: "project work",
    duration: "21hrs",
    task: "testing for production errors.",
  },

  {
    category: "work",
    sub_category: "meeting",
    duration: "1.5hrs",
    task: "active participation in the group discussion.",
  },

  {
    category: "work",
    sub_category: "project work",
    duration: "4hrs",
    task: "client meeting.",
  },
];

function dropdown() {
  let dropdown1 = document.getElementById("demo");
  let dropOption = dropdown1.options[dropdown1.selectedIndex];
  console.log(dropOption.value);
  if (dropOption.value == 1) {
    categoryfilter();
  }
  if (dropOption.value == 2) {
    personalworkfilter();
  }
  if (dropOption.value == 3) {
    sub_categoryfilter();
  }
  if (dropOption.value == 4) {
    meetingfilter();
  }
}
var nextId = 0; 

function addval(category, sub_category, duration, task) {
  var table = document.getElementById("Emplist");
  var row = table.insertRow();
  var id = `row-${nextId++}`;
  row.id = id;
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  cell1.innerHTML = category;
  cell2.innerHTML = sub_category;
  cell3.innerHTML = duration;
  cell4.innerHTML = task;
  cell5.innerHTML = `<button type='button' class="btn btn-primary" onclick="updateRow('${id}')">Update</button>`;
  cell6.innerHTML = `<button type='button' class="btn btn-delete" onclick="removeRow('${id}')">Delete</button>`;
}

function allfunc() {
  document.getElementById("Emplist").innerHTML =
    "<tr><th>Category</th><th>sub_category</th><th>duration</th><th>Task</th><th colspan='2' >Action</th></tr>";
  Employee.forEach((task) => {
    addval(task.category, task.sub_category, task.duration, task.task);
  });
}
allfunc();
function categoryfilter() {
  document.getElementById("Emplist").innerHTML =
    "<tr><th>Category</th><th>sub_category</th><th>duration</th><th>Task</th><th colspan='2' >Action</th></tr>";
  Employee.filter((task) => task.category === "work").forEach((task) => {
    addval(task.category, task.sub_category, task.duration, task.task);
  });
}

function personalworkfilter() {
  document.getElementById("Emplist").innerHTML =
    "<tr><th>Category</th><th>sub_category</th><th>duration</th><th>Task</th><th colspan='2' >Action</th></tr>";
  Employee.filter((task) => task.category === "personal work").forEach(
    (task) => {
      addval(task.category, task.sub_category, task.duration, task.task);
    }
  );
}

function sub_categoryfilter() {
  document.getElementById("Emplist").innerHTML =
    "<tr><th>Category</th><th>sub_category</th><th>duration</th><th>Task</th><th colspan='2' >Action</th></tr>";
  Employee.filter((task) => task.sub_category === "project work").forEach(
    (task) => {
      addval(task.category, task.sub_category, task.duration, task.task);
    }
  );
}

function meetingfilter() {
  document.getElementById("Emplist").innerHTML =
    "<tr><th>Category</th><th>sub_category</th><th>duration</th><th>Task</th><th colspan='2' >Action</th></tr>";
  Employee.filter((task) => task.sub_category === "meeting").forEach((task) => {
    addval(task.category, task.sub_category, task.duration, task.task);
  });
}

var min = 0;
var hr = 0;
var sec = 0;
isrunning = false;

function timer() {
  if (!isrunning) {
    setIntervalid = setInterval(() => {
      isrunning = true;
      sec++;
      if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
          min = 0;
          hr++;
          if (hr >= 24) {
            hr = 0;
          }
        }
      }
      document.getElementById("btn").innerText = "STOP";
      formatted = `${hr.toString().padStart(2, "0")}:${min
        .toString()
        .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
      document.querySelector(".stopwatch").innerText = formatted;
    }, 10);
  } else {
    isrunning = false;
    clearInterval(setIntervalid);
    document.getElementById("btn").innerText = "START";
  }
}

function resetting() {
  clearInterval(setIntervalid);
  min = 0;
  hr = 0;
  sec = 0;
  formatted = `${hr.toString().padStart(2, "0")}:${min
    .toString()
    .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  document.querySelector(".stopwatch").innerText = formatted;
}

document.addEventListener("submit", (e) => {
  e.preventDefault();
  var category = document.getElementById('Category').value;
  var sub_category = document.getElementById('Sub-Category').value;
  var duration = formatted;
  var task = document.getElementById('Task').value;
  Employee.push({category, sub_category,duration,task});
  addval(category, sub_category,duration,task)
  resetting();
});

// Function to update a row
function updateRow(rowId) {
  var row = document.getElementById(rowId);
  var cells = row.getElementsByTagName("td");
  
  // Extracting the current values from the row
  var category = cells[0].innerText;
  var sub_category = cells[1].innerText;
  var duration = cells[2].innerText;
  var task = cells[3].innerText;

  // Creating input fields to edit values
  cells[0].innerHTML = `<input type="text" value="${category}" id="category-${rowId}">`;
  cells[1].innerHTML = `<input type="text" value="${sub_category}" id="sub_category-${rowId}">`;
  cells[2].innerHTML = `<input type="text" value="${duration}" id="duration-${rowId}">`;
  cells[3].innerHTML = `<input type="text" value="${task}" id="task-${rowId}">`;

  // Changing the button to a "Save" button
  var updateButton = cells[4].getElementsByTagName("button")[0];
  updateButton.innerText = "Save";
  updateButton.setAttribute("onclick", `saveUpdate('${rowId}')`);
}

// Function to save the updated values
function saveUpdate(rowId) {
  var category = document.getElementById(`category-${rowId}`).value;
  var sub_category = document.getElementById(`sub_category-${rowId}`).value;
  var duration = document.getElementById(`duration-${rowId}`).value;
  var task = document.getElementById(`task-${rowId}`).value;

  // Updating the row with the new values
  var row = document.getElementById(rowId);
  var cells = row.getElementsByTagName("td");
  cells[0].innerText = category;
  cells[1].innerText = sub_category;
  cells[2].innerText = duration;
  cells[3].innerText = task;

  // Changing the button back to "Update"
  var updateButton = cells[4].getElementsByTagName("button")[0];
  updateButton.innerText = "Update";
  updateButton.setAttribute("onclick", `updateRow('${rowId}')`);
}


function removeRow(rowId) {
  var row = document.getElementById(rowId);
  row.parentNode.removeChild(row);
}

//http://127.0.0.1:3000/login.html
