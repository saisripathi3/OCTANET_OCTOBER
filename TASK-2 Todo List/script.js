document.addEventListener("DOMContentLoaded", function () {
    const todoList = document.querySelector(".js-todo-list");
    const todoInput = document.querySelector(".inputselect");

    function addTodo() {
        const todoText = todoInput.value.trim();

        if (todoText !== "") {
            const todoItem = document.createElement("li");
            todoItem.className = "todo-item";

            const todoTextElement = document.createElement("span");
            todoTextElement.textContent = todoText;
            todoTextElement.className = "todo-text"; // Add a class for text styling

            const completedButton = document.createElement("button");
            completedButton.className = "completed-btn";
            completedButton.addEventListener("click", (e) => {
                const todoItem = e.target.parentElement;
                const todoTextElement = todoItem.querySelector(".todo-text");

                if (todoTextElement) {
                    todoTextElement.classList.toggle("completed");
                    completedButton.classList.toggle("checkmark");
                }
            });

            const deleteButton = document.createElement("button");
            deleteButton.className = "delete-btn";
            deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
            deleteButton.addEventListener("click", () => {
                todoItem.remove();
            });

            todoItem.appendChild(completedButton);
            todoItem.appendChild(todoTextElement);
            todoItem.appendChild(deleteButton);

            todoList.appendChild(todoItem);
            todoInput.value = "";
        }
    }

    document.querySelector(".formselect").addEventListener("submit", function (e) {
        e.preventDefault();
        addTodo();
    });

    todoInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            addTodo();
        }
    });
});