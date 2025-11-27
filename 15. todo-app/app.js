import { clearInput, manageEmptyMsg, pushTask, renderTasks } from "./ui.js";

//aside bar selection
const categoryList = document.querySelector("#category-list");
const priorityList = document.querySelector("#priority-list");
const filterList = document.querySelector("#filter-list");

//main content selection
const taskForm = document.querySelector("#new-task-form");
const taskTitle = document.querySelector("#new-task-title");
const taskDescription = document.querySelector("#new-task-description");
const emptyMsg = document.querySelector("#empty-msg");
const tasksUl = document.querySelector("#tasks");

//footer selection
const totalTasks = document.querySelector("#total-tasks");
const remainingTasks = document.querySelector("#remaining-tasks");

let todos = [];
let currentId = 0;

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskText = taskInput.value.trim();
    if (!taskText) return;

    pushTask(todos, currentId, taskText);
    currentId++;
    clearInput(taskInput);

    renderTasks(todos, tasksUl, emptyMsg);
});
