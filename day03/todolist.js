let arr = [];
function addTodo(newTodo) {
    arr.push({ title: newTodo, status: "unchecked" });
}
function removeTodo(todoId) {
    arr.splice(todoId, 1)
}
function changeTodoTitle(todoId, newTitle) {
    arr[todoId].title = newTitle;
}
function changeTodoStatus(todoId, isComplete) {
    if (isComplete) {
        arr[todoId].status = "checked";
    } else { arr[todoId].status = "unchecked"; }
}