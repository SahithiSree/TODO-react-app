import React from "react";
import "./exmp.css";

class Todo extends React.Component {
  addTaskButton = (e) => {
    var taskList = document.getElementById("taskList");
    var newTaskInput = document.getElementById("newTask");
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const taskText = newTaskInput.value;
    if (taskText.trim() !== "") {
      btn.id = "todo";
      btn.innerText = taskText;
      btn.addEventListener("click", this.handleToggle);
      li.appendChild(btn); // Append the button inside the li element
      taskList.appendChild(li); // Append the li to the taskList
      newTaskInput.value = "";
    }
  };
  handleToggle = (e) => {
    let taskList = document.getElementById("taskList");
    let doneList = document.getElementById("doneList");
    if (e.target.id === "todo") {
      let taskItem = e.target.parentNode;
      let doneButton = e.target.cloneNode(true);
      taskList.removeChild(taskItem); // Remove from taskList
      doneList.appendChild(taskItem); // Append to doneList
      doneButton.id = "done";
      doneButton.addEventListener("click", this.handleToggle);
      taskItem.innerHTML = ""; // Clear the item's content
      taskItem.appendChild(doneButton); // Append the done button to the item
    } else {
      let taskItem = e.target.parentNode;
      let btn = e.target.cloneNode(true);
      btn.id = "todo";
      doneList.removeChild(taskItem); // Remove from doneList
      taskList.appendChild(taskItem); // Append to taskList
      taskItem.innerHTML = ""; // Clear the item's content
      taskItem.appendChild(btn); // Append the done button to the item
      btn.addEventListener("click", this.handleToggle);
    }
  };
  render() {
    return (
      <>
        <input type="text" id="newTask" placeholder="Enter a new task" />

        <button id="addTask" onClick={this.addTaskButton}>
          Add
        </button>
        <h1>Todo List</h1>
        <ul id="taskList"></ul>
        <hr />
        <h1>Done List</h1>

        <ul id="doneList"></ul>
      </>
    );
  }
}
export default Todo;
// reference
// undoTask
// let btn = document.createElement("button");
// let txt = e.target.innerText;
// const li = document.createElement("li");
// btn.id = "todo";
// btn.innerText = txt;
// btn.addEventListener("click", this.handleToggle);
// li.appendChild(btn); // Append the button inside the li element
// taskList.appendChild(li); // Append the li to the taskList
// e.target.style.textDecoration = "";
// e.target.id = "todo";
// console.log(txt);

// todo Reference
// e.target.style.textDecoration = "line-through";
// e.target.id = "done";
// let li = document.createElement("li");
// let doneList = document.getElementById("doneList");
// let done = document.createElement("button");
// li.appendChild(done);
// doneList.appendChild(li);
// done.id = "done";
// done.innerHTML = e.target.innerText;
// done.addEventListener("click", this.undoTask);
// taskList.removeChild(e.target);
