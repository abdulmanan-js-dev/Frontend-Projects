export const pushTask = (arr, id, task) => {
    const taskTodo = {
        id: ++id,
        description: task,
        isCompleted: false,
        createdAt: Date.now(),
    };
    arr.push(taskTodo);
};

export const clearInput = (element) => {
    element.value = "";
};

export const manageEmptyMsg = (element, command) => {
    if (command === "show") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
};

export const renderTasks = (arr, element, el) => {
    manageEmptyMsg(el, "hide");

    element.innerHTML = "";

    arr.forEach((todo) => {
        element.innerHTML += `
            <li class="task-li">
                <span class="task-description">${todo.description}</span>
                <span class="button-wrapper">
                    <button type="button" class="btn-style">
                        Done
                    </button>
                    <button type="button" class="btn-style">
                        Delete
                    </button>
                </span>
            </li>
        `;
    });
};
