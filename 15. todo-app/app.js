/*
<li class="task-li">
                            <span class="task-description"
                                >This is task description.</span
                            >
                            <span class="button-wrapper">
                                <button type="button" class="btn-style">
                                    Done
                                </button>
                                <button type="button" class="btn-style">
                                    Delete
                                </button>
                            </span>
                        </li>
*/

import { clearInput, manageEmptyMsg, pushTask, renderTasks } from "./ui.js";

//aside bar selection
const categoryList = document.querySelector("#category-list");
const priorityList = document.querySelector("#priority-list");
const filterList = document.querySelector("#filter-list");

//main content selection
const taskForm = document.querySelector("#new-task-form");
const taskInput = document.querySelector("#new-task-input");
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
    console.log(todos);

    renderTasks(todos, tasksUl, emptyMsg);
});
